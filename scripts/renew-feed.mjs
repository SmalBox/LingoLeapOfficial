import { createPublicKey, createPrivateKey, sign, verify } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

// This repository contains distribution metadata only, never application sources.
const trust = JSON.parse(await readFile("updates/trust.json", "utf8"));
const privateKey = createPrivateKey(process.env.LINGOLEAP_UPDATE_SIGNING_KEY ?? "");
for (const [file, prefix] of [["stable.json", "https://github.com/SmalBox/LingoLeapOfficial/releases/download/"], ["cnb-stable.json", "https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases/download/"], ["stable-v2.json", "https://github.com/SmalBox/LingoLeapOfficial/releases/download/"], ["cnb-stable-v2.json", "https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases/download/"]]) {
  let raw;try{raw=await readFile(`updates/${file}`,"utf8");}catch(error){if(error.code==='ENOENT'&&file.includes('v2'))continue;throw error;}
  const signed = JSON.parse(raw);
  const publicKey = createPublicKey(trust.publicKey);
  const payload = Buffer.from(signed.payload, "base64");
  if (!verify(null, payload, publicKey, Buffer.from(signed.signature, "base64"))) throw new Error("Existing release signature is invalid.");
  const feed = JSON.parse(payload.toString("utf8"));
  if (feed.format !== "lingoleap-updates" || ![1,2].includes(feed.formatVersion) || feed.channel !== "stable" || !Number.isSafeInteger(feed.sequence) || !Array.isArray(feed.releases) || !feed.releases.length) throw new Error("Unsupported feed.");
  for (const release of feed.releases) {
    if (!release.path.startsWith(prefix) || !/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,99}\/[a-zA-Z0-9][a-zA-Z0-9._-]{0,199}$/.test(release.path.slice(prefix.length))) throw new Error("Unexpected release destination.");
  }
  if (privateKey.asymmetricKeyType !== "ed25519" || !createPublicKey(privateKey).export({ type: "spki", format: "der" }).equals(publicKey.export({ type: "spki", format: "der" }))) throw new Error("Signing secret does not match pinned release key.");
  const now = Date.now();
  feed.sequence = Math.max(now, feed.sequence + 1); feed.publishedAt = new Date(now).toISOString(); feed.expiresAt = new Date(now + 7 * 86400000).toISOString();
  const renewed = Buffer.from(JSON.stringify(feed));
  await writeFile(`updates/${file}`, JSON.stringify({ payload: renewed.toString("base64"), signature: sign(null, renewed, privateKey).toString("base64") }, null, 2) + "\n");
  console.log(`Renewed ${file} ${feed.sequence}; release versions, hashes and content revisions unchanged.`);

}
