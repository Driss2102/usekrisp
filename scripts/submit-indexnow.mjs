// Ping IndexNow (Bing, Yandex, and other participating engines) with the
// current sitemap URLs, so new/changed pages get re-crawled fast after a deploy.
// Never fails the build: IndexNow endpoints return transient non-2xx at times,
// and indexing is a best-effort signal, not a release gate.

const HOST = 'usekrisp.com';
const KEY = 'e57799b2d871183c59dfcb8814466fad';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'indexnow-submit' } });
  if (!res.ok) {
    console.warn(`[indexnow] could not fetch sitemap (${res.status}); skipping.`);
    return;
  }
  const xml = await res.text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urlList.length === 0) {
    console.warn('[indexnow] sitemap had no <loc> URLs; skipping.');
    return;
  }

  const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const submit = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  console.log(`[indexnow] submitted ${urlList.length} URLs -> HTTP ${submit.status}`);
}

main().catch((err) => {
  console.warn('[indexnow] non-fatal error:', err?.message ?? err);
});
