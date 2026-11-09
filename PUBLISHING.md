# Official distribution

This public repository contains the website, update feeds and distribution workflows. Binary packages are Release assets, never Git blobs.

## Update trust

- Current clients: `https://raw.githubusercontent.com/SmalBox/LingoLeapOfficial/main/updates/stable-v2.json`
- Legacy clients and website full-package downloads: `updates/stable.json`
- Website: `https://smalbox.github.io/LingoLeapOfficial/`
- Public key: `updates/trust.json`; fingerprint `1cca9bf7f0bc536eaca6c9156be8e074bce9dec6fe65a138ae052a7b6591f79a`.
- Desktop clients pin this key and verify Ed25519 signatures, expiry, sequence, platform, version, dependency declarations, size and SHA-256. Release redirects are restricted to the selected provider's asset CDN. Clients need no distribution account or token.
- The website verifies metadata when the browser supports Ed25519; older browsers display an unverified-metadata notice. Its key is served by the website and is not an independent trust root.

## Packages and publishing order

1. Build and validate full and program-only ZIPs on native macOS and Windows hosts, with matching source receipts, replacement/restart checks and offline-resource preservation.
2. Prepare immutable packages, the independent `.llresource`, checksums, release notes, and both legacy and V2 signed feed snapshots. The same resource bytes are reused when only the app changes.
3. Upload and verify Release assets. Earlier-tag resource/app references must still match their original size and SHA-256. Do not overwrite an immutable asset.
4. Only after the referenced assets are ready, advance the relevant provider's feeds and deploy the website. The legacy feed contains full app packages only; V2 distinguishes full/program packages and resource requirements.
5. Verify both protocols, full/program downloads, website defaults and mirrored release identities without credentials.

First-time users should choose the full ZIP without the `program` suffix. Program-only ZIPs contain the complete application runtime and require compatible locally stored dictionary data; they are not binary patches. Resource files have independent versions and revisions, not app-version timestamps. Resource-only releases use `resources-<resource-version>` tags and keep app records unchanged. A signed V2 feed can reference immutable assets across release tags from the same provider.

The private signing key is never committed or published. Daily renewal uses the encrypted Actions secret `LINGOLEAP_UPDATE_SIGNING_KEY`. Keep an offline backup of the signing identity. Changing it requires an explicit client trust migration.

## Renewal and recovery

The workflow runs daily and on manual dispatch. It verifies existing signatures before extending validity by seven days and advancing sequences. All existing legacy/V2 app and mirror feeds are renewed. Asset identities and resource revisions remain unchanged; renewal is not a new release. The same workflow deploys Pages after renewal.

Monitor Actions failures. If a feed expires, clients retain their existing app/data. Fix the secret or permissions and rerun with `renew=true`. Pages must use GitHub Actions.

## Installation

From v0.18.0, a downloaded app update can be installed with **Restart and install**. An independent helper replaces the application after it exits, restarts it, and restores the previous app if startup is not confirmed. From v0.25.0, verified resources are stored independently; combination installation checkpoints the resource selection and restores it with the app on failure. Downloading alone does not trigger installation. Resource application requires confirmation; rollback and pinning remain available.

These are Alpha ZIP packages. App code signing, notarization and system installers are separate from signed update metadata. Platforms without native validated packages get no placeholder downloads.

## Tencent CNB distribution

The companion channel is `https://cnb.cool/DipSugar/LingoLeapOfficial`. GitHub hosts separate signed `updates/cnb-stable.json` and `updates/cnb-stable-v2.json` envelopes for that channel. Package bytes and resource revisions match across providers; URLs are signed separately.

The CNB pipeline verifies these envelopes, imports and verifies immutable assets, publishes its Release, and then advances the matching feeds with a short-lived repository token. Release assets retain the original signed snapshots so scheduled renewal never mutates attachments. No private signing key or long-lived GitHub token is stored on CNB. Monitor import, renewal and synchronization jobs.
