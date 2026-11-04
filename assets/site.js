/* Browser-only product demo. No AI calls, analytics, cookies, or account storage. */
const navigation = document.querySelector("#navigation");
const menuToggle = document.querySelector(".menu-toggle");
function closeMenu() {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "打开导航");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia("(min-width: 581px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const demoModes = {
  read: ["查过，也记得。", "让好内容成为你的资料。"],
  express: ["找到合适的说法。", "多懂一点语气，多一点从容。"],
  collect: ["好奇心，一点点积累。", "从看懂，到下次能用出来。"],
};
const bubbleTitle = document.querySelector("#bubble-title");
const bubbleDescription = document.querySelector("#bubble-description");
document.querySelectorAll("[data-demo-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.demoMode;
    document.querySelectorAll("[data-demo-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll("[data-demo-panel]").forEach((panel) => { panel.hidden = panel.dataset.demoPanel !== mode; });
    document.querySelectorAll(".demo-sidebar-item").forEach((item, index) => item.classList.toggle("active", index === (mode === "collect" ? 3 : 0)));
    bubbleTitle.textContent = demoModes[mode][0];
    bubbleDescription.textContent = demoModes[mode][1];
  });
});
const saveButton = document.querySelector("[data-demo-save]");
saveButton.setAttribute("aria-pressed", "false");
saveButton.addEventListener("click", () => {
  const saved = saveButton.getAttribute("aria-pressed") !== "true";
  saveButton.setAttribute("aria-pressed", String(saved));
  saveButton.classList.toggle("is-saved", saved);
  saveButton.querySelector("span").textContent = saved ? "已加入示例学习库 · 再点可取消" : "把这句放进示例学习库";
  bubbleTitle.textContent = saved ? "已留下这句表达。" : demoModes.read[0];
  bubbleDescription.textContent = saved ? "切换“留下来学”，看看学习示意。" : demoModes.read[1];
});

/* Official download metadata is used only after signature and URL validation.
   Static Release-page links remain available if metadata is unavailable. */
const sources = {
  github: { feed: "updates/stable.json", origin: "https://github.com", prefix: "/SmalBox/LingoLeapOfficial/releases/download/" },
  cnb: { feed: "updates/cnb-stable.json", origin: "https://cnb.cool", prefix: "/DipSugar/LingoLeapOfficial/-/releases/download/" },
};
function base64Bytes(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}
async function loadJson(path) {
  const response = await fetch(path, { cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error("Metadata unavailable");
  const text = await response.text();
  if (text.length > 1000000) throw new Error("Metadata exceeds limit");
  return JSON.parse(text);
}
async function verifiedApp(source, key, platform = "darwin", arch = "arm64") {
  const signed = await loadJson(source.feed);
  if (typeof signed.payload !== "string" || signed.payload.length > 700000 || !/^[A-Za-z0-9+/]{86}==$/.test(signed.signature)) throw new Error("Invalid envelope");
  const payload = base64Bytes(signed.payload);
  if (!await crypto.subtle.verify("Ed25519", key, base64Bytes(signed.signature), payload)) throw new Error("Invalid metadata");
  const feed = JSON.parse(new TextDecoder().decode(payload));
  if (feed.format !== "lingoleap-updates" || feed.formatVersion !== 1 || feed.channel !== "stable" || !Number.isSafeInteger(feed.sequence) || !Number.isFinite(Date.parse(feed.expiresAt)) || Date.parse(feed.expiresAt) <= Date.now() || !Array.isArray(feed.releases) || feed.releases.length > 30) throw new Error("Unavailable feed");
  const app = feed.releases.find((release) => release.kind === "app" && release.platform === platform && release.arch === arch);
  if (!app || typeof app.version !== "string" || !/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/.test(app.version) || !/^[a-f0-9]{64}$/.test(app.sha256) || !Number.isSafeInteger(app.bytes) || app.bytes <= 0 || app.bytes > 1073741824) throw new Error("No compatible app");
  const url = new URL(app.path);
  const suffix = url.pathname.slice(source.prefix.length);
  if (url.origin !== source.origin || !url.pathname.startsWith(source.prefix) || !/^[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/.test(suffix) || url.username || url.password || url.search || url.hash) throw new Error("Invalid download address");
  return { ...app, path: url.href };
}
async function updateDownloads() {
  const status = document.querySelector("#release-status");
  try {
    const trust = await loadJson("updates/trust.json");
    if (typeof trust.publicKey !== "string" || trust.publicKey.length > 1000) throw new Error("Invalid public key");
    const key = await crypto.subtle.importKey("spki", base64Bytes(trust.publicKey.replace(/-----[^-]+-----|\s/g, "")), { name: "Ed25519" }, false, ["verify"]);
    const [primary, mirror] = await Promise.allSettled([verifiedApp(sources.github, key), verifiedApp(sources.cnb, key)]);
    if (primary.status !== "fulfilled") throw new Error("Latest release unavailable");
    const app = primary.value;
    document.querySelector("#app-version").textContent = `v${app.version}`;
    const link = document.querySelector("#app-download");
    link.href = app.path;
    link.querySelector("span").textContent = "下载 macOS 测试版";
    status.textContent = `v${app.version} · ${(app.bytes / 1048576).toFixed(1)} MB · ZIP 程序包`;
    status.dataset.state = "ready";
    if (mirror.status === "fulfilled" && mirror.value.version === app.version && mirror.value.sha256 === app.sha256 && mirror.value.bytes === app.bytes) document.querySelector("#app-mirror").href = mirror.value.path;
    const [windows, windowsMirror] = await Promise.allSettled([verifiedApp(sources.github,key,"win32","x64"),verifiedApp(sources.cnb,key,"win32","x64")]);
    if(windows.status === "fulfilled") {
      document.querySelector("#windows-download").href=windows.value.path;
      document.querySelector("#windows-download").textContent="下载 Windows 测试版";
      document.querySelector("#windows-status").textContent=`v${windows.value.version} · ${(windows.value.bytes/1048576).toFixed(1)} MB · ZIP 程序包`;
      if(windowsMirror.status==="fulfilled" && windowsMirror.value.sha256===windows.value.sha256 && windowsMirror.value.version===windows.value.version)document.querySelector("#windows-mirror").href=windowsMirror.value.path;
    }

  } catch (error) {
    console.warn("Release metadata unavailable:", error instanceof Error ? error.message : "Unknown error");
    status.textContent = "最新版本请以下载页为准。";
    status.dataset.state = "fallback";
  }
}
void updateDownloads();
