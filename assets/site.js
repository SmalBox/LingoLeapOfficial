/* Public download metadata is displayed only after its release signature verifies. */
(async () => {
  const container = document.querySelector("#downloads");
  const text = (tag, value) => { const node = document.createElement(tag); node.textContent = value; return node; };
  try {
    const [trust, signed] = await Promise.all([fetch("updates/trust.json", { cache: "no-store" }).then((r) => { if (!r.ok) throw new Error(); return r.json(); }), fetch("updates/stable.json", { cache: "no-store" }).then((r) => { if (!r.ok) throw new Error(); return r.json(); })]);
    const bytes = (value) => Uint8Array.from(atob(value), (c) => c.charCodeAt(0));
    const pem = trust.publicKey.replace(/-----[^-]+-----|\s/g, "");
    if (typeof signed.payload !== "string" || signed.payload.length > 700000 || !/^[A-Za-z0-9+/]{86}==$/.test(signed.signature)) throw new Error();
    const payload = bytes(signed.payload); let verified = false;
    try {
      const key = await crypto.subtle.importKey("spki", bytes(pem), { name: "Ed25519" }, false, ["verify"]);
      if (!await crypto.subtle.verify("Ed25519", key, bytes(signed.signature), payload)) throw new Error();
      verified = true;
    } catch (error) {
      // Older browsers can display repository metadata, but must never claim verification.
      if (error.name !== "NotSupportedError") throw error;
    }
    const feed = JSON.parse(new TextDecoder().decode(payload));
    if (feed.format !== "lingoleap-updates" || feed.formatVersion !== 1 || feed.channel !== "stable" || !Number.isFinite(Date.parse(feed.expiresAt)) || Date.parse(feed.expiresAt) <= Date.now() || !Array.isArray(feed.releases) || feed.releases.length > 30) throw new Error();
    container.replaceChildren();
    for (const release of feed.releases) {
      if (!["app", "content"].includes(release.kind) || !/^[a-f0-9]{64}$/.test(release.sha256) || !Number.isSafeInteger(release.bytes) || release.bytes <= 0 || release.bytes > 1073741824 || typeof release.version !== "string" || release.version.length > 80) continue;
      if (release.kind === "app" && (!["darwin", "win32"].includes(release.platform) || !["arm64", "x64"].includes(release.arch))) continue;
      const url = new URL(release.path);
      if (url.origin !== "https://github.com" || !/^\/SmalBox\/LingoLeapOfficial\/releases\/download\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/.test(url.pathname) || url.username || url.password || url.search || url.hash) continue;
      const card = document.createElement("article"); card.className = "download-card";
      const label = release.kind === "content" ? "独立内容资源" : `${release.platform === "darwin" ? "macOS" : "Windows"} · ${release.arch === "arm64" ? "ARM64" : "x64"}`;
      card.append(text("h3", `${label} · ${release.version}`), text("p", `${(release.bytes / 1048576).toFixed(1)} MiB · ${release.kind === "content" ? "在应用中导入，或检查内容更新" : "ZIP 测试包，手动解压安装"}`));
      const link = text("a", release.kind === "content" ? "下载内容包 ↗" : "下载程序 ↗"); link.href = url.href; link.className = "button primary";
      card.append(link, text("p", "SHA-256"), text("small", release.sha256)); container.append(card);
    }
    if (!container.children.length) throw new Error();
    const note = text("p", verified ? "以上版本信息已通过发布清单签名校验。未列出的平台暂未提供对应构建。" : "以上信息来自官方发布清单；当前浏览器不支持签名验证。请通过应用内更新独立校验，或对照 Releases 核对 SHA-256。未列出的平台暂未提供构建。"); note.className = "subtle"; container.append(note);
  } catch (error) {
    console.warn("Release metadata verification unavailable:", error.name);
    container.replaceChildren(text("p", "暂时无法验证在线版本信息。请前往官方 Releases 查看下载文件、平台和校验值。"));
    const link = text("a", "打开 GitHub Releases ↗"); link.href = "https://github.com/SmalBox/LingoLeapOfficial/releases"; link.className = "button primary"; container.append(link);
  }
})();
