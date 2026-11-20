# LingoLeap 语跃

> Understand it now. Keep it. Use it again.

**Your desktop companion for Korean, Chinese and English.** Capture a sentence from the screen, translate it offline, explore its meaning when you need more help, and keep useful answers in your own learning library.

**[Download for macOS & Windows](https://github.com/SmalBox/LingoLeapOfficial/releases)** · [Website](https://smalbox.github.io/LingoLeapOfficial/) · [Setup & offline guide](https://smalbox.github.io/LingoLeapOfficial/#offline) · [Feedback](https://github.com/SmalBox/LingoLeapOfficial/issues)

For another download option, use **[腾讯CNB 加速下载](https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases)**.

## New in v0.39.7: capture a moment, keep reading

- **Short recordings, on your terms.** Select a live region, then start, pause or stop explicitly. Pin the clip on your desktop, save silent MP4, export a short GIF, or extract a frame for OCR and translation. Up to 3 minutes, 15 fps and 1280×720 per clip; GIF export is up to 10 seconds.
- **Tools that stay out of the way.** Refine capture and pin toolbar sizing, in-place annotation, opacity and editing transitions. Configure separate screenshot and recording folders and filename templates.
- **Change OCR where the result is.** The first recognition uses your default strategy. Choose a system or bundled compatibility engine and rerun from the result panel; canceled or failed retries keep the previous text. Recognition stays on your device.
- **Read, translate and keep useful material.** Correct recognized text, look up a selection, translate offline, listen in Chinese, English or Korean, and save material for later practice and reuse.
- **Install a model once.** Dictionaries and OCR are ready with the app. Add Q8 or Q6 through **Download and enable** for offline sentence translation; existing models remain available across updates. AI explanations and questions stay optional.

**Known Mac issue:** on some macOS systems, the first capture after each full app restart still shows an additional system confirmation. This release keeps the established capture workflow but does not eliminate that prompt. Existing screen-recording permission does not need repeated removal or resetting. If capture fails, report the app version, OS version and exact message.

## Choose your download

| What you need | What to get |
| --- | --- |
| First installation on Mac | `LingoLeap-0.39.7-macos-arm64.zip` — Apple Silicon, M-series |
| First installation on Windows | `LingoLeap-0.39.7-windows-x64.zip` — Windows x64 |
| Offline sentence translation | Install Q8 or Q6 from Settings after opening the app |
| A computer that stays offline | Download the app and one model in advance; follow the [offline guide](https://smalbox.github.io/LingoLeapOfficial/#offline) |
| Updating an existing app | Use Settings → Software updates; download, then Restart and install |

The full app ZIP includes dictionaries, OCR and the translation engine. Model weights are a separate, one-time download from Tencent's official model repository, and are reused across app updates. Program-only update ZIPs are for existing installations; use a full ZIP for a first installation. Dictionary content also updates separately.

## Start in a minute

1. Extract the full ZIP. On Mac, move `LingoLeap.app` to Applications. On Windows, keep the extracted folder intact and open `LingoLeap.exe`.
2. Choose your display language: Simplified Chinese, Traditional Chinese, English or Korean.
3. Open Settings → Query & Translation → **Download and enable** for Q8 or Q6. LingoLeap downloads, verifies, installs and selects it. You can use the dictionary while waiting.
4. Open quick lookup with **⌘ + Shift + Space** on Mac or **Ctrl + Shift + Space** on Windows. Type or paste a word or sentence.
5. Capture with **⌘/Ctrl + Alt + S**, pin a clipboard image with **⌘/Ctrl + Alt + V**, and hide/restore pins with **⌘/Ctrl + Alt + P**.
6. Use **⌘/Ctrl + Alt + R** to select a region, start or stop a short recording, and **⌘/Ctrl + Alt + Shift + R** to pause/resume. Alt is Option on Mac; shortcuts are configurable.

On Mac, allow screen recording when first capturing; if macOS asks you to quit and reopen, follow that step once. Importing images and offline OCR do not require screen-recording permission. Chinese, English and Korean pronunciation depends on installed system voices.

## Fully offline installation

On a connected computer, download the matching full application ZIP and one supported model: [Q8, recommended](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF/resolve/a0c709d9fac510f2c807aa3af52872340dc37a4a/Hy-MT2-1.8B-Q8_0.gguf) or [Q6, smaller](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF/resolve/a0c709d9fac510f2c807aa3af52872340dc37a4a/Hy-MT2-1.8B-Q6_K.gguf). Transfer both to the offline computer.

On Mac, put `LingoLeap-models/` beside `LingoLeap.app`. On Windows, put `LingoLeap-models/` beside `LingoLeap.exe`. Keep the original GGUF filename. Start the app, or choose Rescan models if it is already running. Alternatively, choose **Install downloaded model file** in Settings; the app verifies and copies it into the default shared folder without going online.

No Python, Ollama, Node.js or extra runtime installation is needed. See the [illustrated setup steps](https://smalbox.github.io/LingoLeapOfficial/#offline) or [save the offline guide](https://smalbox.github.io/LingoLeapOfficial/assets/offline-setup-en.md).

## Make it your own

The built-in dictionary contains **11,902 sourced entries and 11,000 distinct headwords**. Local profiles separate materials, history and learning records, with backup and restore. Useful AI answers can be kept, edited, tagged and found again. Save vocabulary, grammar, expressions and common mistakes, then practise recognition, listening, writing, dialogue and sentence use.

Offline dictionaries, OCR and installed-model translation need no cloud account. AI translation, explanations and questions use the service you explicitly choose and may incur that provider's charges. AI calls are manual by default, with optional automatic policies. A failed offline translation does not silently switch to a cloud service.

Current builds are Alpha test releases for **macOS Apple Silicon and Windows x64**. Translation can make mistakes; keep the original and use contextual explanations when needed.

For later versions, use **Settings → Software updates** and choose **Restart and install** after downloading. Your local materials and compatible models are retained. Fully quit the old app before manually replacing it; keep your user-data folder and any external model folder.

Developer: **蘸糖 DipSugar**

Powered by 蘸糖科技 SmalBox
