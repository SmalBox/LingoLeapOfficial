# Official distribution

This public repository contains the website, signed update feeds and distribution workflows only. Application sources and development data remain private. Binary packages are Release assets, never Git blobs.

## Update trust

- Feed: `https://raw.githubusercontent.com/SmalBox/LingoLeapOfficial/main/updates/stable.json`
- Website: `https://smalbox.github.io/LingoLeapOfficial/`
- Public key: `updates/trust.json`; fingerprint `1cca9bf7f0bc536eaca6c9156be8e074bce9dec6fe65a138ae052a7b6591f79a`.
- Desktop clients pin this key in the application and verify Ed25519 signatures, expiry, sequence, platform, version, size and SHA-256. The website verifies metadata for display; its key is served by the website and is not an independent trust root.
- Release asset redirects are restricted to GitHub's asset CDN. Clients require no GitHub account or token.

## Publishing order

1. Build, validate and inspect actual native application ZIPs in the private development workspace.
2. Generate a versioned content package and signed feed with the persistent release key.
3. Create the GitHub Release and upload the program ZIP, `.llresource`, `SHA256SUMS.txt` and a signed `stable.json` snapshot. Do not replace published asset bytes.
4. Only after the assets are available, update `updates/stable.json` on `main` and deploy the website.
5. Check both the raw feed and public downloads from a client without GitHub credentials.

The private key is never committed or published as an asset. Daily renewal uses the encrypted Actions repository secret `LINGOLEAP_UPDATE_SIGNING_KEY`. Keep an offline backup of the signing identity. Removing/changing this key requires an explicit client trust migration.

## Feed renewal and recovery

The workflow runs daily and on manual dispatch; it verifies the existing signature before extending validity by seven days and increasing the sequence. Asset versions, hashes and content revisions remain unchanged. A renewal is not a new software release. The same workflow deploys Pages after renewal, avoiding dependence on another workflow being triggered by a bot commit.

Monitor Actions failures. If the feed expires, clients fail closed and retain the existing application/data. Fix the secret or permissions and rerun the workflow with `renew=true`. Pages must be configured for GitHub Actions. GitHub availability and download speed depend on the user's network; no domestic mirror is configured in this phase.

## Installation boundary

Current program packages are unsigned Alpha ZIPs, requiring manual replacement after quitting the previous application. A verified download does not install or restart the application. Content updates require explicit confirmation and support rollback. Platforms without actual builds do not get placeholder download entries.
