# LingoLeap 语跃

> Understand it now. Keep it. Use it again.

**Your desktop companion for Korean, Chinese and English.** Capture a sentence from the screen, translate it offline, explore its meaning when you need more help, and keep useful answers in your own learning library.

**[Download for macOS & Windows](https://github.com/SmalBox/LingoLeapOfficial/releases)** · [Website](https://smalbox.github.io/LingoLeapOfficial/) · [Setup & offline guide](https://smalbox.github.io/LingoLeapOfficial/#offline) · [Feedback](https://github.com/SmalBox/LingoLeapOfficial/issues)

For another download option, use **[腾讯CNB 加速下载](https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases)**.

## New in v0.37.11: capture, understand and reuse

- **Read from your screen without losing your place.** Capture, annotate, pin and recognize text in place. Edit recognized text directly, translate a selection or a whole passage offline, and see lookup results without searching for them.
- **OCR that fits your computer.** Choose the macOS or Windows system engine, or the bundled compatibility engine. Mixed Chinese, English and Korean text keeps a local fallback; images stay on your device.
- **Listen and practise in all three languages.** Use installed system voices for Chinese, English and Korean. Follow recognition, listening, writing, text dialogue and sentence practice, with progress kept by language and meaning.
- **Make useful answers your own.** Search offline translations, personal materials, captured sources and learning items together. Correct and confirm translations for exact reuse, add context, and organize content into works or projects.
- **A clearer, calmer capture flow.** Improve long OCR text, small-window layouts and annotation controls. Fix Mac capture access, first-permission recovery and stale errors after successful retries. Startup does not ask you to unlock AI for offline work.
- **The familiar offline setup.** Exact dictionary matches appear first; the installed model translates the rest into the other two languages. Install Q8 or Q6 once with **Download and enable**, then reuse it across updates. AI explanation and questions remain an explicit choice.

## Choose your download

| What you need | What to get |
| --- | --- |
| First installation on Mac | `LingoLeap-0.37.11-macos-arm64.zip` — Apple Silicon, M-series |
| First installation on Windows | `LingoLeap-0.37.11-windows-x64.zip` — Windows x64 |
| Offline sentence translation | Install Q8 or Q6 from Settings after opening the app |
| A computer that stays offline | Download the app and one model in advance; follow the [offline guide](https://smalbox.github.io/LingoLeapOfficial/#offline) |
| Updating an existing app | Use Settings → Software updates; download, then Restart and install |

The full app ZIP includes dictionaries, OCR and the translation engine. Model weights are a separate, one-time download from Tencent's official model repository, and are reused across app updates. Program-only update ZIPs are for existing installations; use a full ZIP for a first installation. Dictionary content also updates separately.

## Start in a minute

1. Extract the full ZIP. On Mac, move `LingoLeap.app` to Applications. On Windows, keep the extracted folder intact and open `LingoLeap.exe`.
2. Choose your display language: Simplified Chinese, Traditional Chinese, English or Korean.
3. Open Settings → Query & Translation → **Download and enable** for Q8 or Q6. LingoLeap downloads, verifies, installs and selects it. You can use the dictionary while waiting.
4. Open quick lookup with **⌘ + Shift + Space** on Mac or **Ctrl + Shift + Space** on Windows. Type or paste a word or sentence.
5. Capture with **⌘/Ctrl + Alt + S**, pin a clipboard image with **⌘/Ctrl + Alt + V**, and hide/restore pins with **⌘/Ctrl + Alt + P**. Alt is Option on Mac; shortcuts are configurable.

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
