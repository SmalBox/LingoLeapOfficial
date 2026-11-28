# LingoLeap 语跃

> Understand it now. Keep it. Use it again.

**Your desktop companion for Korean, Chinese and English.** Capture a sentence from the screen, translate it offline, explore its meaning when you need more help, and keep useful answers in your own learning library.

**[Download for macOS & Windows](https://github.com/SmalBox/LingoLeapOfficial/releases)** · [Website](https://smalbox.github.io/LingoLeapOfficial/) · [Setup & offline guide](https://smalbox.github.io/LingoLeapOfficial/#offline) · [Feedback](https://github.com/SmalBox/LingoLeapOfficial/issues)

For another download option, use **[腾讯CNB 加速下载](https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases)**.

## Offline model download

For offline sentence translation, download one model once: **[Q8 recommended, 1.91 GB](https://github.com/SmalBox/LingoLeapOfficial/releases/download/models-hy-mt2-1.8b-a0c709d9/Hy-MT2-1.8B-Q8_0.gguf)** ([Tencent CNB mirror](https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases/download/models-hy-mt2-1.8b-a0c709d9/Hy-MT2-1.8B-Q8_0.gguf)) or [Q6 smaller, 1.47 GB](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF/resolve/a0c709d9fac510f2c807aa3af52872340dc37a4a/Hy-MT2-1.8B-Q6_K.gguf). The same GGUF works on macOS and Windows and is reused across application updates. Q8 is hosted as an independent, immutable model resource; it is not included again in every application release.

If the in-app download is slow or fails, use a browser or download tool. In Settings → Query & Translation, choose **Install downloaded model file**. LingoLeap verifies and configures it automatically. No Python, Ollama or API key is required for local translation.

## New in v0.45.2: desktop pins that feel more natural

- **Pinch to zoom on Mac.** Two-finger scrolling adjusts opacity. Mouse wheel controls stay the same: scroll to zoom, Ctrl/Command + scroll for opacity.
- **Hints when you need them.** Capture and pin icons show their tooltips faster, with quick switching between controls. Hints do not resize or push the toolbar.
- **A cleaner pin menu.** Image/menu opacity and smaller image exports are under **More**. Lock/unlock stays in the main toolbar; the opacity panel takes you back to More.
- **Clear, accurate labels.** Corrected Esc and inherited toolbar hints, added bold/italic descriptions, and kept hints in sync with lock state and your interface language.
- **Smoother editing.** Drawing, More and opacity panels fit their content, and old hints disappear when you leave, switch images or close the menu.
- **Keep your familiar tools.** Automatic cloud login, two free themes, batch image OCR, screenshot collages, smaller exports and the offline learning workflow remain available.

Offline dictionary, capture, OCR and installed-model translation remain available without a cloud account. Cloud login does not automatically upload or sync your learning library. Account registration follows the instructions in the app; AI provider usage is separate from the free welcome gift.

**Known Mac issue:** on some macOS systems, the first capture after each full app restart still shows an additional system confirmation. This release keeps the established capture workflow but does not eliminate that prompt. Existing screen-recording permission does not need repeated removal or resetting. If capture fails, report the app version, OS version and exact message.

## Choose your download

| What you need | What to get |
| --- | --- |
| First installation on Mac | `LingoLeap-0.45.2-macos-arm64.zip` — Apple Silicon, M-series |
| First installation on Windows | `LingoLeap-0.45.2-windows-x64.zip` — Windows x64 |
| Offline sentence translation | Install Q8 or Q6 from Settings after opening the app |
| A computer that stays offline | Download the app and one model in advance; follow the [offline guide](https://smalbox.github.io/LingoLeapOfficial/#offline) |
| Updating an existing app | Use Settings → Software updates; download, then Restart and install |

The full app ZIP includes dictionaries, OCR and the translation engine. Model weights are a separate, one-time download from the selected model source, and are reused across app updates. Program-only update ZIPs are for existing installations; use a full ZIP for a first installation. Dictionary content also updates separately.

## Start in a minute

1. Extract the full ZIP. On Mac, move `LingoLeap.app` to Applications. On Windows, keep the extracted folder intact and open `LingoLeap.exe`.
2. Choose your display language: Simplified Chinese, Traditional Chinese, English or Korean.
3. Open Settings → Query & Translation → **Download and enable** for Q8 or Q6. LingoLeap downloads, verifies, installs and selects it. You can use the dictionary while waiting.
4. Open quick lookup with **⌘ + Shift + Space** on Mac or **Ctrl + Shift + Space** on Windows. Type or paste a word or sentence.
5. Capture with **⌘/Ctrl + Alt + S**, pin clipboard images or text with **⌘/Ctrl + Alt + V**, and hide/restore pins with **⌘/Ctrl + Alt + P**.
6. Use **⌘/Ctrl + Alt + Shift + S** to capture and copy, or **⌘/Ctrl + Alt + G** to switch pin groups. Check automatic recording in Image history to keep new captures.
7. Use **⌘/Ctrl + Alt + R** to select a region, start or stop a short recording, and **⌘/Ctrl + Alt + Shift + R** to pause/resume. Alt is Option on Mac; shortcuts are configurable.

On Mac, allow screen recording when first capturing; if macOS asks you to quit and reopen, follow that step once. Importing images and offline OCR do not require screen-recording permission. Chinese, English and Korean pronunciation depends on installed system voices.

## Fully offline installation

On a connected computer, download the matching full application ZIP and one supported model: [Q8, recommended](https://github.com/SmalBox/LingoLeapOfficial/releases/download/models-hy-mt2-1.8b-a0c709d9/Hy-MT2-1.8B-Q8_0.gguf) or [Q6, smaller](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF/resolve/a0c709d9fac510f2c807aa3af52872340dc37a4a/Hy-MT2-1.8B-Q6_K.gguf). Transfer both to the offline computer.

On Mac, put `LingoLeap-models/` beside `LingoLeap.app`. On Windows, put `LingoLeap-models/` beside `LingoLeap.exe`. Keep the original GGUF filename. Start the app, or choose Rescan models if it is already running. Alternatively, choose **Install downloaded model file** in Settings; the app verifies and copies it into the default shared folder without going online.

No Python, Ollama, Node.js or extra runtime installation is needed. See the [illustrated setup steps](https://smalbox.github.io/LingoLeapOfficial/#offline) or [save the offline guide](https://smalbox.github.io/LingoLeapOfficial/assets/offline-setup-en.md).

## Make it your own

The built-in dictionary contains **11,902 sourced entries and 11,000 distinct headwords**. Local profiles separate materials, history and learning records, with backup and restore. Useful AI answers can be kept, edited, tagged and found again. Submit categorized feedback in the app and track replies without a GitHub account. Save vocabulary, grammar, expressions and common mistakes, then practise recognition, listening, writing, dialogue and sentence use.

Offline dictionaries, OCR and installed-model translation need no cloud account. AI translation, explanations and questions use the service you explicitly choose and may incur that provider's charges. AI calls are manual by default, with optional automatic policies. A failed offline translation does not silently switch to a cloud service.

Available for **macOS Apple Silicon and Windows x64**. Translation can make mistakes; keep the original and use contextual explanations when needed.

For later versions, use **Settings → Software updates** and choose **Restart and install** after downloading. Your local materials and compatible models are retained. Fully quit the old app before manually replacing it; keep your user-data folder and any external model folder.

Developer: **蘸糖 DipSugar**

Powered by 蘸糖科技 SmalBox
