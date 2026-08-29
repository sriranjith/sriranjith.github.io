import { Marked } from 'marked';

// Section bodies are rendered here rather than by Astro's pipeline, because the
// site splits one Markdown file into several independently-rendered layers.

const marked = new Marked({
  gfm: true,
  breaks: false,
});

// The section itself owns the h2, so nothing inside it may be h1 or h2.
// Authors write `###` for sub-headings, which stays h3; anything shallower is
// pushed down rather than allowed to compete with the section heading.
marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const level = Math.min(Math.max(depth, 3), 6);
      return `<h${level}>${text}</h${level}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      const t = title ? ` title="${title}"` : '';
      return `<a href="${href}"${t}${attrs}>${text}</a>`;
    },
  },
});

/** @param {string} md */
export function renderMarkdown(md) {
  if (!md) return '';
  return marked.parse(md.trim());
}

/** Strip Markdown down to plain text, for meta descriptions and the search index. */
export function toPlainText(md, limit = 0) {
  if (!md) return '';
  let text = md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (limit && text.length > limit) {
    text = text.slice(0, limit).replace(/\s+\S*$/, '') + '…';
  }
  return text;
}
