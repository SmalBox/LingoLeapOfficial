import { verify, createHash } from "node:crypto";

// Public distribution validator. No application code, private keys or user data.
export function validateDictionaryCatalog(input, publicKey, source = "cnb", now = Date.now()) {
  if (!input || typeof input.payload !== "string" || input.payload.length > 500000 || typeof input.signature !== "string") throw Error("Invalid dictionary envelope.");
  const bytes=Buffer.from(input.payload,"base64");
  if(bytes.toString("base64")!==input.payload || !verify(null,bytes,publicKey,Buffer.from(input.signature,"base64")))throw Error("Dictionary catalog signature invalid.");
  const feed=JSON.parse(bytes.toString("utf8")),prefix=source==="cnb"?"https://cnb.cool/DipSugar/LingoLeapOfficial/-/releases/download/":"https://github.com/SmalBox/LingoLeapOfficial/releases/download/";
  const published=Date.parse(feed.publishedAt),expires=Date.parse(feed.expiresAt);
  if(feed.format!=="lingoleap-dictionary-catalog"||feed.formatVersion!==1||!Number.isSafeInteger(feed.sequence)||feed.sequence<0||!Number.isFinite(published)||published>now+300000||!Number.isFinite(expires)||expires<=now||expires<=published||expires-published>7*86400000||!Array.isArray(feed.packs)||feed.packs.length>30)throw Error("Invalid or expired dictionary catalog.");
  const ids=new Set();
  for(const pack of feed.packs){
    if(typeof pack.resourceId!=="string"||!/^[a-zA-Z0-9._-]{1,80}$/.test(pack.resourceId)||pack.resourceId==="ko-zh-core"||ids.has(pack.resourceId)||!Number.isSafeInteger(pack.bytes)||pack.bytes<1||pack.bytes>24*1024*1024||!/^[a-f0-9]{64}$/.test(pack.digest)||!Number.isSafeInteger(pack.revision)||pack.revision<1||!Number.isSafeInteger(pack.count)||pack.count<1||pack.count>50000||!["ko","zh","en"].includes(pack.language)||!Array.isArray(pack.meaningLanguages)||!pack.meaningLanguages.length||pack.meaningLanguages.some(value=>!["ko","zh","en"].includes(value))||typeof pack.path!=="string"||!pack.path.startsWith(prefix)||!/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,99}\/[a-zA-Z0-9][a-zA-Z0-9._-]{0,199}$/.test(pack.path.slice(prefix.length)))throw Error("Invalid dictionary asset identity.");
    ids.add(pack.resourceId);
  }
  return {feed,digest:createHash("sha256").update(bytes).digest("hex")};
}
