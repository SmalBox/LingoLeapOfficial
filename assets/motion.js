/* Progressive enhancement: no frame loop, account data, storage or external requests. */
(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".motion-toggle");
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = false;
  let flourish;
  let cleanup;
  function clearFlourish() {
    clearTimeout(cleanup);
    flourish?.remove();
    flourish = undefined;
  }
  function applyMotion() {
    const reduced = preference.matches;
    root.dataset.siteMotion = reduced ? "reduced" : paused ? "paused" : "running";
    root.dataset.siteVisibility = document.hidden ? "hidden" : "visible";
    const label = reduced ? "已遵循系统减少动态" : paused ? "继续页面动效" : "暂停页面动效";
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
    toggle.setAttribute("aria-pressed", String(paused || reduced));
    toggle.disabled = reduced;
    toggle.querySelector("[data-motion-label]").textContent = reduced ? "静态显示" : paused ? "继续动效" : "暂停动效";
    toggle.querySelector("use").setAttribute("href", paused || reduced ? "#i-play" : "#i-pause");
    if (paused || reduced || document.hidden) clearFlourish();
  }
  toggle.hidden = false;
  toggle.addEventListener("click", () => { paused = !paused; applyMotion(); });
  preference.addEventListener("change", applyMotion);
  document.addEventListener("visibilitychange", applyMotion);
  applyMotion();

  const scenes = document.querySelectorAll(".motion-scene");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.dataset.motionView = entry.isIntersecting ? "on" : "off";
    }, { rootMargin: "80px" });
    scenes.forEach((scene) => observer.observe(scene));
  } else scenes.forEach((scene) => { scene.dataset.motionView = "on"; });

  document.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest(".demo-switch button, [data-demo-save], a.button") : null;
    if (!button || root.dataset.siteMotion !== "running" || document.hidden) return;
    clearFlourish();
    flourish = document.createElement("i");
    flourish.className = "click-sprinkles";
    flourish.setAttribute("aria-hidden", "true");
    for (let n = 0; n < 3; n++) flourish.appendChild(document.createElement("i"));
    button.appendChild(flourish);
    cleanup = setTimeout(clearFlourish, 700);
  });
  window.addEventListener("pagehide", clearFlourish);
})();
