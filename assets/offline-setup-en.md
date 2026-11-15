# LingoLeap v0.35.3 — installation and fully offline use

## One-click setup

Download the full application ZIP for macOS Apple Silicon or Windows x64. Extract it and open LingoLeap. In Settings → Query & Translation, choose Download and enable for Q8 (recommended, about 1.91 GB) or Q6 (smaller, about 1.47 GB). You only need one model.

The app downloads, verifies and installs it in its default shared folder, then selects it. Progress is shown, with pause/resume and retry. Downloads continue when you leave Settings. If you quit the app, downloaded data is kept; choose Download again to resume. If the server does not support resume, downloading restarts safely. Existing valid models are reused across app updates.

## Prepare an offline computer

On a connected computer, download the full application ZIP and one model below, then transfer both using a USB drive or local network. The application ZIP includes dictionaries, OCR and the native translation engine. Do not choose a program-only update ZIP for a first installation.

Recommended Q8:
https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF/resolve/a0c709d9fac510f2c807aa3af52872340dc37a4a/Hy-MT2-1.8B-Q8_0.gguf

Smaller Q6:
https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF/resolve/a0c709d9fac510f2c807aa3af52872340dc37a4a/Hy-MT2-1.8B-Q6_K.gguf

Keep the original filename. The same model file works on both supported platforms, but the application must match the operating system and architecture.

## Mac folder layout

Keep the model folder outside the .app:

```text
/Applications/
  LingoLeap.app
  LingoLeap-models/
    Hy-MT2-1.8B-Q8_0.gguf
```

## Windows folder layout

Keep all extracted application files. Put the model folder beside the EXE:

```text
D:\Apps\LingoLeap\
  LingoLeap.exe
  resources/
  ...other application files...
  LingoLeap-models/
    Hy-MT2-1.8B-Q8_0.gguf
```

For Q6, use Hy-MT2-1.8B-Q6_K.gguf instead. Start the app after placing the file, or choose Rescan models in Settings if it is already running. When only Q6 is available, the app selects Q6. Move the model folder with the application.

Alternatively, open Settings → Query & Translation → Fully offline installation and model folders → Install downloaded model file. Choose the file you brought with you. The app verifies and copies it to the default shared folder entirely offline; this route needs space for that additional copy. Settings displays the actual paths and provides folder-opening buttons.

## Use without a connection

No cloud account, API key, Python, Ollama, Node.js or extra runtime installation is required. Once model preparation finishes, try a Chinese, English or Korean sentence. Local dictionaries, screenshot/pin tools, offline OCR and installed-model translation work without online AI. Keep the AI policy at its default manual setting for offline use. AI explanations, questions and online updates need a connection.

On Mac, screenshot capture still needs screen-recording permission. Pronunciation needs an installed system voice; install any required voice while preparing the computer online.

## Updates and existing models

App updates reuse external/shared models. Keep your user-data folder and any app-adjacent model folder when replacing the application manually. Before deleting a legacy app that stored its only model internally, save that GGUF outside the old app first. Back up personal learning data before updating.

Model downloads depend on the official host and your network. If it cannot be reached, use the offline steps above. Arbitrary GGUF files are not automatically supported; use the pinned Q8/Q6 files listed here.
