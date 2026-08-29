import { publicCatalog } from '../lib/catalog.js';
import { SITE, url } from '../lib/site.js';

const escape = (s) =>
  String(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]);

export async function GET(context) {
  const catalog = publicCatalog();
  const base = context.site ?? SITE.url;

  // Newest additions first, by publication date rather than by subject date.
  const items = [...catalog.paradoxes]
    .sort((a, b) => b.publishing.created.localeCompare(a.publishing.created))
    .slice(0, 50)
    .map((p) => {
      const link = new URL(url.paradox(p.slug), base).href;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${p.publishing.created}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(p.summary)}</description>
${p.domains.map((d) => `      <category>${escape(catalog.taxonomy.label('domains', d))}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(SITE.name)}</title>
    <link>${base}</link>
    <description>${escape(SITE.description)}</description>
    <language>${SITE.locale}</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
