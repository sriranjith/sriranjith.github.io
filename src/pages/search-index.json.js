import { publicCatalog } from '../lib/catalog.js';
import { toPlainText } from '../lib/markdown.js';

// The search index is generated from the canonical content at build time.
// There is no separate index to maintain, and it cannot drift from the site.
export async function GET() {
  const catalog = publicCatalog();
  const tx = catalog.taxonomy;

  const documents = [
    ...catalog.paradoxes.map((p) => ({
      k: 'paradox',
      s: p.slug,
      t: p.title,
      d: p.summary,
      // Weighted keyword bag: names, ideas, people and taxonomy labels.
      w: [
        ...p.alternateNames,
        ...p.concepts,
        ...p.people.map((id) => catalog.personById.get(id)?.name).filter(Boolean),
        ...p.domains.map((x) => tx.label('domains', x)),
        ...p.types.map((x) => tx.label('types', x)),
        tx.label('natures', p.nature),
        tx.label('eras', p.era),
        p.date,
      ].join(' '),
      // A slice of the plain-language explanation, so concept searches land.
      b: toPlainText(`${p.sections.discover ?? ''} ${p.sections.understand ?? ''}`, 600),
      m: `${tx.label('domains', p.domains[0])} · ${tx.label('difficulties', p.difficulty)}`,
    })),

    ...catalog.people.map((person) => ({
      k: 'person',
      s: person.id,
      t: person.name,
      d: person.bio,
      w: person.tradition ?? '',
      b: '',
      m: `${person.paradoxes.length} ${person.paradoxes.length === 1 ? 'entry' : 'entries'}`,
    })),

    ...catalog.sources.map((source) => ({
      k: 'source',
      s: source.id,
      t: source.title,
      d: [source.authors.join(', '), source.year, source.publisher ?? source.journal]
        .filter(Boolean)
        .join(' · '),
      w: source.notes ?? '',
      b: '',
      m: tx.label('sourceTypes', source.type),
    })),

    ...catalog.paths.map((path) => ({
      k: 'path',
      s: path.id,
      t: path.title,
      d: path.summary,
      w: path.steps.map((s) => catalog.bySlug.get(s.paradox)?.title ?? '').join(' '),
      b: '',
      m: `${path.steps.length} steps`,
    })),
  ];

  return new Response(JSON.stringify({ documents }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
