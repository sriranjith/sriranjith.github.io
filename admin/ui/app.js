// Admin UI. Plain DOM, no framework, no build step — the whole thing is this
// file plus one stylesheet, which is the right size for the job.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const state = { data: null, tab: 'dashboard', editing: null, dirty: false };

// ---------------------------------------------------------------- helpers

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function html(strings, ...values) {
  return strings.reduce((out, str, i) => {
    const v = values[i - 1];
    return out + (Array.isArray(v) ? v.join('') : v ?? '') + str;
  });
}

async function api(method, path, body) {
  const res = await fetch(path, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
  return data;
}

let toastTimer;
function toast(message, kind = '') {
  const el = $('#toast');
  el.textContent = message;
  el.dataset.kind = kind;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.hidden = true), 3200);
}

function confirmDialog(title, message, okLabel = 'Confirm') {
  return new Promise((resolve) => {
    const dialog = $('#modal');
    $('#modal-title').textContent = title;
    $('#modal-body').innerHTML = `<p>${esc(message)}</p>`;
    $('#modal-ok').textContent = okLabel;
    dialog.showModal();
    dialog.addEventListener('close', () => resolve(dialog.returnValue === 'ok'), { once: true });
  });
}

const SEV = { error: '✗', warning: '!', info: 'i' };

function findingHtml(f) {
  return html`<div class="finding finding--${f.severity}">
    <span class="finding__icon">${SEV[f.severity]}</span>
    <div>
      <div class="finding__where">${esc(f.field)}</div>
      <div class="finding__msg">${esc(f.message)}</div>
      ${f.fix ? `<div class="finding__fix">→ ${esc(f.fix)}</div>` : ''}
    </div>
  </div>`;
}

const barClass = (n) => (n < 50 ? 'is-low' : n < 85 ? 'is-mid' : 'is-high');

// ---------------------------------------------------------------- shell

async function load() {
  $('#view').innerHTML = '<div class="loading">Reading content from disk…</div>';
  try {
    state.data = await api('GET', '/api/state');
    const { validation, totals } = state.data.health;
    $('#global-status').innerHTML = html`
      ${validation.errors ? `<span class="pill pill--err">${validation.errors} errors</span>` : ''}
      ${validation.warnings ? `<span class="pill pill--warn">${validation.warnings} warnings</span>` : ''}
      ${!validation.errors && !validation.warnings ? '<span class="pill pill--published">All clear</span>' : ''}
      <span>${totals.published}/${totals.paradoxes} published</span>
    `;
    render();
  } catch (error) {
    $('#view').innerHTML = `<div class="empty">Could not load content: ${esc(error.message)}</div>`;
  }
}

function render() {
  $$('#tabs button').forEach((b) => b.classList.toggle('is-active', b.dataset.tab === state.tab));
  const views = {
    dashboard: viewDashboard,
    paradoxes: viewParadoxes,
    coverage: viewCoverage,
    sources: () => viewRecords('source'),
    people: () => viewRecords('person'),
    paths: () => viewRecords('path'),
    taxonomy: viewTaxonomy,
    editor: viewEditor,
  };
  (views[state.tab] ?? viewDashboard)();
}

function go(tab) {
  if (state.dirty && !confirm('You have unsaved changes. Leave anyway?')) return;
  state.dirty = false;
  state.tab = tab;
  window.scrollTo(0, 0);
  render();
}

// ---------------------------------------------------------------- dashboard

function viewDashboard() {
  const { health } = state.data;
  const { totals, validation, coverage, attention, gaps, orphans, unusedSources, unusedPeople, averageScore } = health;

  $('#view').innerHTML = html`
    <div class="spread" style="margin-bottom:1rem">
      <div>
        <h1>Content health</h1>
        <p class="muted">What needs attention, in the order it needs it.</p>
      </div>
      <button class="btn btn--primary" id="new-paradox">New paradox</button>
    </div>

    <div class="stats">
      <div class="stat"><b>${totals.paradoxes}</b><span>Paradoxes</span></div>
      <div class="stat stat--ok"><b>${totals.published}</b><span>Published</span></div>
      <div class="stat"><b>${totals.review}</b><span>In review</span></div>
      <div class="stat"><b>${totals.draft}</b><span>Drafts</span></div>
      <div class="stat ${validation.errors ? 'stat--err' : ''}"><b>${validation.errors}</b><span>Errors</span></div>
      <div class="stat ${validation.warnings ? 'stat--warn' : ''}"><b>${validation.warnings}</b><span>Warnings</span></div>
      <div class="stat"><b>${averageScore}%</b><span>Avg completeness</span></div>
      <div class="stat"><b>${totals.words.toLocaleString()}</b><span>Words</span></div>
    </div>

    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))">
      <section class="card">
        <h2>Needs attention</h2>
        <p class="muted">Ordered by severity, then by how incomplete the entry is.</p>
        ${attention.length === 0 ? '<p class="muted">Nothing outstanding. Unusual and pleasant.</p>' : ''}
        <table>
          <thead><tr><th>Entry</th><th>State</th><th>Issues</th><th>Complete</th><th></th></tr></thead>
          <tbody>
            ${attention.slice(0, 18).map(
              (e) => html`<tr>
                <td><b>${esc(e.title)}</b><div class="mono muted">${esc(e.slug)}</div></td>
                <td><span class="pill pill--${e.state}">${e.state}</span></td>
                <td>
                  ${e.errors ? `<span class="pill pill--err">${e.errors}</span> ` : ''}
                  ${e.warnings ? `<span class="pill pill--warn">${e.warnings}</span>` : ''}
                  ${!e.errors && !e.warnings ? '<span class="muted">—</span>' : ''}
                </td>
                <td>
                  <div class="bar" title="${e.score}%"><i class="${barClass(e.score)}" style="width:${e.score}%"></i></div>
                </td>
                <td class="right"><button class="btn btn--sm" data-edit="${esc(e.slug)}">Edit</button></td>
              </tr>`
            )}
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>Coverage gaps</h2>
        <p class="muted">Where the collection is thin. Use these to steer research.</p>
        ${gaps.length === 0 ? '<p class="muted">No thin areas. Every domain and era is covered.</p>' : ''}
        <div class="stack">
          ${gaps.slice(0, 12).map(
            (g) => html`<div class="finding finding--${g.count === 0 ? 'warning' : 'info'}">
              <span class="finding__icon">${g.count === 0 ? '!' : 'i'}</span>
              <div>
                <div class="finding__msg"><b>${esc(g.label)}</b> · ${esc(g.strength)}</div>
                <div class="finding__fix">${esc(g.suggestion)}</div>
              </div>
            </div>`
          )}
        </div>
      </section>

      <section class="card">
        <h2>Loose ends</h2>
        <div class="stack">
          <div>
            <h3>Unconnected entries (${orphans.length})</h3>
            <p class="muted">
              ${orphans.length === 0 ? 'Every entry links to something.' : orphans.map((o) => esc(o.title)).join(', ')}
            </p>
          </div>
          <div>
            <h3>Uncited sources (${unusedSources.length})</h3>
            <p class="muted">
              ${unusedSources.length === 0 ? 'Every source is used.' : unusedSources.slice(0, 12).map((s) => esc(s.title)).join(' · ')}
            </p>
          </div>
          <div>
            <h3>Unreferenced people (${unusedPeople.length})</h3>
            <p class="muted">
              ${unusedPeople.length === 0 ? 'Every person is referenced.' : unusedPeople.map((p) => esc(p.name)).join(', ')}
            </p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Every issue</h2>
        <p class="muted">${validation.findings.length} findings across the whole knowledge base.</p>
        <div class="stack" style="max-height:26rem;overflow:auto">
          ${validation.findings.length === 0 ? '<p class="muted">Clean.</p>' : ''}
          ${validation.findings
            .slice()
            .sort((a, b) => ({ error: 0, warning: 1, info: 2 })[a.severity] - ({ error: 0, warning: 1, info: 2 })[b.severity])
            .slice(0, 120)
            .map(
              (f) => html`<div class="finding finding--${f.severity}">
                <span class="finding__icon">${SEV[f.severity]}</span>
                <div>
                  <div class="finding__where">${esc(f.entity)} · ${esc(f.id)} · ${esc(f.field)}</div>
                  <div class="finding__msg">${esc(f.message)}</div>
                  ${f.fix ? `<div class="finding__fix">→ ${esc(f.fix)}</div>` : ''}
                </div>
              </div>`
            )}
        </div>
      </section>
    </div>
  `;

  $('#new-paradox').onclick = newParadox;
  $$('[data-edit]').forEach((b) => (b.onclick = () => openEditor(b.dataset.edit)));
}

// ---------------------------------------------------------------- paradox list

function viewParadoxes() {
  const { paradoxes, taxonomy, health } = state.data;
  const scores = new Map(health.entries.map((e) => [e.slug, e]));

  $('#view').innerHTML = html`
    <div class="spread" style="margin-bottom:1rem">
      <div>
        <h1>Paradoxes</h1>
        <p class="muted">${paradoxes.length} entries. Filenames are URLs — renaming a slug renames the file.</p>
      </div>
      <button class="btn btn--primary" id="new-paradox">New paradox</button>
    </div>

    <div class="filters">
      <input type="search" id="f-q" placeholder="Filter by name or slug…" />
      <select id="f-state">
        <option value="">Any state</option>
        <option value="draft">Draft</option>
        <option value="review">In review</option>
        <option value="published">Published</option>
      </select>
      <select id="f-domain">
        <option value="">Any domain</option>
        ${taxonomy.domains.map((d) => `<option value="${esc(d.id)}">${esc(d.label)}</option>`)}
      </select>
      <select id="f-difficulty">
        <option value="">Any difficulty</option>
        ${taxonomy.difficulties.map((d) => `<option value="${esc(d.id)}">${esc(d.label)}</option>`)}
      </select>
      <span class="muted" id="f-count"></span>
    </div>

    <div class="card" style="padding:0.4rem 0.75rem">
      <table>
        <thead>
          <tr><th>Title</th><th>State</th><th>Domain</th><th>Difficulty</th><th>Date</th><th>Complete</th><th>Issues</th><th></th></tr>
        </thead>
        <tbody id="plist"></tbody>
      </table>
    </div>
  `;

  const paint = () => {
    const q = $('#f-q').value.trim().toLowerCase();
    const fState = $('#f-state').value;
    const fDomain = $('#f-domain').value;
    const fDiff = $('#f-difficulty').value;

    const rows = paradoxes
      .filter(
        (p) =>
          (!q || p.title.toLowerCase().includes(q) || p.slug.includes(q)) &&
          (!fState || p.state === fState) &&
          (!fDomain || p.domains.includes(fDomain)) &&
          (!fDiff || p.difficulty === fDiff)
      )
      .sort((a, b) => a.title.localeCompare(b.title));

    $('#f-count').textContent = `${rows.length} shown`;
    $('#plist').innerHTML = rows
      .map((p) => {
        const e = scores.get(p.slug) ?? { score: 0, errors: 0, warnings: 0 };
        return html`<tr>
          <td><b>${esc(p.title)}</b><div class="mono muted">${esc(p.slug)}</div></td>
          <td><span class="pill pill--${p.state}">${p.state}</span></td>
          <td class="muted">${esc(p.domains.map((d) => state.data.taxonomy.domains.find((x) => x.id === d)?.label ?? d).join(', '))}</td>
          <td class="muted">${esc(p.difficulty)}</td>
          <td class="muted mono">${p.year}</td>
          <td><div class="bar" title="${e.score}%"><i class="${barClass(e.score)}" style="width:${e.score}%"></i></div></td>
          <td>
            ${e.errors ? `<span class="pill pill--err">${e.errors}</span> ` : ''}
            ${e.warnings ? `<span class="pill pill--warn">${e.warnings}</span>` : ''}
            ${!e.errors && !e.warnings ? '<span class="muted">—</span>' : ''}
          </td>
          <td class="right inline" style="justify-content:flex-end">
            <a class="btn btn--sm" href="http://localhost:4321/paradox/${esc(p.slug)}/" target="_blank" rel="noopener">Preview</a>
            <button class="btn btn--sm" data-edit="${esc(p.slug)}">Edit</button>
          </td>
        </tr>`;
      })
      .join('');

    $$('[data-edit]').forEach((b) => (b.onclick = () => openEditor(b.dataset.edit)));
  };

  ['#f-q', '#f-state', '#f-domain', '#f-difficulty'].forEach((sel) => ($(sel).oninput = paint));
  $('#new-paradox').onclick = newParadox;
  paint();
}

async function newParadox() {
  const title = prompt('Title of the new paradox');
  if (!title) return;
  try {
    const result = await api('POST', '/api/paradox/new', { title });
    toast(`Created ${result.file}`, 'ok');
    await load();
    openEditor(result.created);
  } catch (error) {
    toast(error.message, 'error');
  }
}

// ---------------------------------------------------------------- editor

async function openEditor(slug) {
  state.tab = 'editor';
  $('#view').innerHTML = '<div class="loading">Loading…</div>';
  try {
    state.editing = await api('GET', `/api/paradox?slug=${encodeURIComponent(slug)}`);
    state.editing.originalSlug = slug;
    state.dirty = false;
    viewEditor();
    window.scrollTo(0, 0);
  } catch (error) {
    toast(error.message, 'error');
    go('paradoxes');
  }
}

function chipGroup(name, terms, selected, multi = true) {
  return html`<div class="chips">
    ${terms.map(
      (t) => html`<label class="chip ${selected.includes(t.id) ? 'is-on' : ''}">
        <input type="${multi ? 'checkbox' : 'radio'}" name="${name}" value="${esc(t.id)}"
          ${selected.includes(t.id) ? 'checked' : ''} />
        ${esc(t.label)}
      </label>`
    )}
  </div>`;
}

function viewEditor() {
  const { front, sections, findings, file } = state.editing;
  const tx = state.data.taxonomy;
  const { layers, interactive, publishStates, paradoxes, people, sources } = state.data;

  const listInput = (id, label, values, hint) => html`
    <label class="field">
      <span>${label}</span>
      <input id="${id}" value="${esc((values ?? []).join(', '))}" />
      ${hint ? `<small>${esc(hint)}</small>` : ''}
    </label>`;

  $('#view').innerHTML = html`
    <div class="toolbar">
      <button class="btn" id="back">← All paradoxes</button>
      <b style="flex:1">${esc(front.title)}</b>
      <span class="pill pill--${front.publishing.state}">${front.publishing.state}</span>
      <a class="btn" href="http://localhost:4321/paradox/${esc(front.slug)}/" target="_blank" rel="noopener">Preview</a>
      <button class="btn" id="validate">Validate</button>
      <button class="btn btn--primary" id="save">Save</button>
      ${front.publishing.state !== 'published'
        ? '<button class="btn btn--primary" id="publish">Publish</button>'
        : '<button class="btn" id="unpublish">Unpublish</button>'}
      <button class="btn btn--danger" id="delete">Delete</button>
    </div>

    <div class="editor">
      <div>
        <details class="sec" open>
          <summary>Identity <span class="sec__req">required</span></summary>
          <div class="card">
            <div class="row">
              <label class="field"><span>Title</span><input id="f-title" value="${esc(front.title)}" /></label>
              <label class="field">
                <span>Slug</span><input id="f-slug" value="${esc(front.slug)}" />
                <small>This is the URL and the filename. Changing it renames the file.</small>
              </label>
            </div>
            <label class="field">
              <span>Summary</span>
              <textarea id="f-summary" rows="3">${esc(front.summary)}</textarea>
              <small>40–320 characters. Describes the entry. Used for search results and meta tags.</small>
            </label>
            <label class="field">
              <span>Hook</span>
              <textarea id="f-hook" rows="2">${esc(front.hook ?? '')}</textarea>
              <small>
                Up to 150 characters. The open question in the reader's own words — this is
                what every card shows, so state the gap and do not close it.
              </small>
            </label>
            ${listInput('f-alt', 'Alternate names', front.alternateNames, 'Comma separated. Fed into search.')}
          </div>
        </details>

        <details class="sec" open>
          <summary>History <span class="sec__req">required</span></summary>
          <div class="card">
            <div class="row">
              <label class="field">
                <span>Era</span>
                <select id="f-era">${tx.eras.map((e) => `<option value="${esc(e.id)}" ${e.id === front.era ? 'selected' : ''}>${esc(e.label)}</option>`)}</select>
              </label>
              <label class="field"><span>Date (for humans)</span><input id="f-date" value="${esc(front.date)}" /></label>
              <label class="field">
                <span>Year (for sorting)</span><input id="f-year" type="number" value="${front.year}" />
                <small>Negative is BCE. Must fall inside the era.</small>
              </label>
            </div>
            <label class="field"><span>Origin</span><textarea id="f-origin" rows="2">${esc(front.origin ?? '')}</textarea></label>
            <div class="field">
              <span>People</span>
              ${chipGroup('people', people.map((p) => ({ id: p.id, label: p.name })), front.people)}
            </div>
          </div>
        </details>

        <details class="sec" open>
          <summary>Classification <span class="sec__req">required</span></summary>
          <div class="card">
            <div class="field"><span>Domains</span>${chipGroup('domains', tx.domains, front.domains)}</div>
            <div class="field"><span>Types</span>${chipGroup('types', tx.types, front.types)}</div>
            <div class="field">
              <span>Nature — the most important field on this form</span>
              ${chipGroup('nature', tx.natures, [front.nature], false)}
              <small>${esc(tx.natures.find((n) => n.id === front.nature)?.explanation ?? '')}</small>
            </div>
            <div class="row">
              <div class="field"><span>Difficulty</span>${chipGroup('difficulty', tx.difficulties, [front.difficulty], false)}</div>
              <div class="field"><span>Status</span>${chipGroup('status', tx.statuses, [front.status], false)}</div>
            </div>
            <div class="field">
              <span>Renown — how likely a reader is to have heard of this already</span>
              ${chipGroup('renown', tx.renowns, [front.renown ?? 'known'], false)}
              <small>${esc(tx.renowns.find((r) => r.id === (front.renown ?? 'known'))?.explanation ?? '')}</small>
            </div>
            ${listInput('f-concepts', 'Concepts', front.concepts, 'Free text ideas, comma separated. Used for search and neighbours.')}
            <label class="field">
              <span>Interactive demonstration</span>
              <select id="f-interactive">
                <option value="">None</option>
                ${Object.entries(interactive).map(
                  ([id, meta]) => `<option value="${esc(id)}" ${id === front.interactive ? 'selected' : ''}>${esc(meta.label)}</option>`
                )}
              </select>
            </label>
          </div>
        </details>

        ${layers.map(
          (layer) => html`<details class="sec" ${layer.required || (sections[layer.id] ?? '').trim() ? 'open' : ''}>
            <summary>
              ${esc(layer.label)}
              <span class="sec__req ${(sections[layer.id] ?? '').trim() ? '' : 'muted'}">
                ${layer.required ? 'required' : 'optional'} ·
                ${(sections[layer.id] ?? '').trim().length} chars
              </span>
            </summary>
            <div class="card">
              <p class="sec__hint">${esc(layer.hint)}</p>
              <textarea id="sec-${layer.id}" rows="12">${esc(sections[layer.id] ?? '')}</textarea>
            </div>
          </details>`
        )}

        <details class="sec">
          <summary>Relationships <span class="sec__req">${front.relationships.length}</span></summary>
          <div class="card" id="rel-box"></div>
        </details>

        <details class="sec">
          <summary>References <span class="sec__req">${front.references.length}</span></summary>
          <div class="card" id="ref-box"></div>
        </details>

        <details class="sec">
          <summary>Further reading <span class="sec__req">${front.furtherReading.length}</span></summary>
          <div class="card" id="fr-box"></div>
        </details>
      </div>

      <aside class="editor__side">
        <div class="card">
          <h2>Validation</h2>
          <p class="muted mono" style="font-size:0.72rem">${esc(file)}</p>
          <div id="findings" class="stack">
            ${findings.length === 0 ? '<p class="muted">No issues.</p>' : findings.map(findingHtml)}
          </div>
        </div>
        <div class="card">
          <h2>Publishing</h2>
          <label class="field">
            <span>State</span>
            <select id="f-state-sel">
              ${publishStates.map((s) => `<option value="${s}" ${s === front.publishing.state ? 'selected' : ''}>${s}</option>`)}
            </select>
            <small>Publishing runs the full validation gate first.</small>
          </label>
          <p class="muted" style="font-size:0.78rem">
            Created ${esc(front.publishing.created)}<br />Updated ${esc(front.publishing.updated)}
          </p>
          <label class="field"><span>Notes</span><textarea id="f-pubnotes" rows="2">${esc(front.publishing.notes ?? '')}</textarea></label>
        </div>
      </aside>
    </div>
  `;

  // --- repeatable groups -------------------------------------------------

  const paradoxOptions = paradoxes
    .filter((p) => p.slug !== front.slug)
    .map((p) => ({ id: p.slug, label: `${p.title} (${p.state})` }));
  const sourceOptions = sources.map((s) => ({ id: s.id, label: `${s.title}${s.year ? ` (${s.year})` : ''}` }));

  function repeatable(boxId, items, key, fields, addLabel) {
    const box = $(`#${boxId}`);
    const draw = () => {
      box.innerHTML =
        items
          .map(
            (item, i) => html`<div class="repeat">
              <div class="repeat__head">
                <span class="repeat__n">${i + 1}</span>
                <button class="btn btn--sm btn--danger" data-rm="${i}">Remove</button>
              </div>
              ${fields.map((f) => {
                const value = item[f.name] ?? '';
                if (f.options) {
                  return html`<label class="field"><span>${f.label}</span>
                    <select data-i="${i}" data-k="${f.name}">
                      ${f.optional ? '<option value=""></option>' : ''}
                      ${f.options.map((o) => `<option value="${esc(o.id)}" ${o.id === value ? 'selected' : ''}>${esc(o.label)}</option>`)}
                    </select></label>`;
                }
                return f.long
                  ? html`<label class="field"><span>${f.label}</span><textarea rows="2" data-i="${i}" data-k="${f.name}">${esc(value)}</textarea></label>`
                  : html`<label class="field"><span>${f.label}</span><input data-i="${i}" data-k="${f.name}" value="${esc(value)}" /></label>`;
              })}
            </div>`
          )
          .join('') + `<button class="btn" data-add>${addLabel}</button>`;

      box.querySelectorAll('[data-rm]').forEach((b) => {
        b.onclick = () => {
          items.splice(Number(b.dataset.rm), 1);
          state.dirty = true;
          draw();
        };
      });
      box.querySelector('[data-add]').onclick = () => {
        items.push({});
        state.dirty = true;
        draw();
      };
      box.querySelectorAll('[data-i]').forEach((el) => {
        el.oninput = () => {
          items[Number(el.dataset.i)][el.dataset.k] = el.value;
          state.dirty = true;
        };
      });
    };
    draw();
  }

  repeatable(
    'rel-box',
    front.relationships,
    'relationships',
    [
      { name: 'kind', label: 'Kind', options: tx.relationshipKinds.map((k) => ({ id: k.id, label: k.label })) },
      { name: 'to', label: 'Target paradox', options: paradoxOptions },
      { name: 'note', label: 'Why they are connected (the useful part)', long: true },
    ],
    '+ Add relationship'
  );

  repeatable(
    'ref-box',
    front.references,
    'references',
    [
      { name: 'source', label: 'Source', options: sourceOptions },
      { name: 'role', label: 'Role', options: tx.sourceTypes.map((t) => ({ id: t.id, label: t.label })), optional: true },
      { name: 'locator', label: 'Locator (page, chapter, theorem)' },
      { name: 'note', label: 'Note', long: true },
    ],
    '+ Add reference'
  );

  repeatable(
    'fr-box',
    front.furtherReading,
    'furtherReading',
    [
      { name: 'title', label: 'Title' },
      { name: 'url', label: 'URL' },
      { name: 'note', label: 'Note' },
    ],
    '+ Add link'
  );

  // --- collect + actions --------------------------------------------------

  const splitList = (id) =>
    $(`#${id}`).value.split(',').map((s) => s.trim()).filter(Boolean);

  const checked = (name) => $$(`input[name="${name}"]:checked`).map((i) => i.value);

  function collect() {
    return {
      front: {
        ...front,
        title: $('#f-title').value.trim(),
        slug: $('#f-slug').value.trim(),
        summary: $('#f-summary').value.trim(),
        hook: $('#f-hook').value.trim() || undefined,
        alternateNames: splitList('f-alt'),
        era: $('#f-era').value,
        date: $('#f-date').value.trim(),
        year: Number($('#f-year').value),
        origin: $('#f-origin').value.trim(),
        people: checked('people'),
        domains: checked('domains'),
        types: checked('types'),
        nature: checked('nature')[0] ?? front.nature,
        difficulty: checked('difficulty')[0] ?? front.difficulty,
        status: checked('status')[0] ?? front.status,
        renown: checked('renown')[0] ?? front.renown ?? 'known',
        concepts: splitList('f-concepts'),
        interactive: $('#f-interactive').value || undefined,
        relationships: front.relationships.filter((r) => r.kind && r.to),
        references: front.references.filter((r) => r.source),
        furtherReading: front.furtherReading.filter((r) => r.title && r.url),
        publishing: {
          state: $('#f-state-sel').value,
          created: front.publishing.created,
          updated: front.publishing.updated,
          notes: $('#f-pubnotes').value.trim() || undefined,
        },
      },
      sections: Object.fromEntries(
        state.data.layers.map((l) => [l.id, $(`#sec-${l.id}`).value])
      ),
    };
  }

  async function save({ silent = false } = {}) {
    const payload = collect();
    try {
      const result = await api('POST', '/api/paradox', {
        ...payload,
        previousSlug: state.editing.originalSlug,
      });
      state.dirty = false;
      state.editing.originalSlug = result.saved;
      $('#findings').innerHTML =
        result.findings.length === 0
          ? '<p class="muted">No issues.</p>'
          : result.findings.map(findingHtml).join('');
      if (!silent) toast(`Saved ${result.file}`, 'ok');
      return result;
    } catch (error) {
      toast(error.message, 'error');
      throw error;
    }
  }

  $('#back').onclick = () => go('paradoxes');
  $('#save').onclick = () => save();
  $('#validate').onclick = () => save({ silent: true }).then(() => toast('Validated against the whole knowledge base.'));

  $('#delete').onclick = async () => {
    if (!(await confirmDialog('Delete this paradox?', `${front.title} will be removed from disk. Git can bring it back.`, 'Delete'))) return;
    await api('DELETE', `/api/paradox?slug=${encodeURIComponent(state.editing.originalSlug)}`);
    toast('Deleted', 'ok');
    await load();
    go('paradoxes');
  };

  const setState = async (next) => {
    await save({ silent: true });
    const result = await api('POST', '/api/paradox/state', { slug: $('#f-slug').value.trim(), state: next });
    if (result.blocked) {
      $('#findings').innerHTML =
        '<p style="color:var(--err);font-weight:600">Cannot publish until these are fixed:</p>' +
        result.findings.map(findingHtml).join('');
      toast('Publishing blocked — see the validation panel.', 'error');
      return;
    }
    toast(next === 'published' ? 'Published.' : `Moved to ${next}.`, 'ok');
    await load();
    openEditor($('#f-slug').value.trim());
  };

  if ($('#publish')) $('#publish').onclick = () => setState('published');
  if ($('#unpublish')) $('#unpublish').onclick = () => setState('draft');

  $('#view').addEventListener('input', () => (state.dirty = true));

  // Chip groups need manual class syncing since they are styled labels.
  $$('.chip input').forEach((input) => {
    input.onchange = () => {
      if (input.type === 'radio') {
        $$(`input[name="${input.name}"]`).forEach((i) => i.closest('.chip').classList.toggle('is-on', i.checked));
      } else {
        input.closest('.chip').classList.toggle('is-on', input.checked);
      }
      state.dirty = true;
    };
  });
}

// ---------------------------------------------------------------- coverage

function viewCoverage() {
  const { coverage, matrix } = state.data.health;
  const eras = state.data.taxonomy.eras;

  const strengthRow = (title, terms, note) => html`
    <section class="card" style="margin-bottom:0.85rem">
      <h2>${title}</h2>
      <p class="muted">${note}</p>
      <table>
        <thead><tr><th>Term</th><th>Published</th><th>Coverage</th></tr></thead>
        <tbody>
          ${terms.map(
            (t) => html`<tr>
              <td><b>${esc(t.label)}</b></td>
              <td class="mono">${t.count}</td>
              <td><span class="strength s${t.strength.rank}">${t.strength.label}</span></td>
            </tr>`
          )}
        </tbody>
      </table>
    </section>`;

  $('#view').innerHTML = html`
    <h1>Coverage</h1>
    <p class="muted" style="margin-bottom:1.25rem">
      Where the collection is strong and where it is thin. This is the input to
      the research prompts in <span class="mono">docs/ai-prompts/</span> — paste a
      weak area into the gap-analysis prompt to get candidates.
    </p>

    <section class="card" style="margin-bottom:0.85rem">
      <h2>Domain × era</h2>
      <p class="muted">The most useful view: it shows which fields are missing whole periods.</p>
      <div style="overflow:auto">
        <table class="cov">
          <thead>
            <tr><th>Domain</th>${eras.map((e) => `<th>${esc(e.label)}</th>`)}<th>Total</th></tr>
          </thead>
          <tbody>
            ${matrix.map(
              (row) => html`<tr>
                <td><b>${esc(row.domain.label)}</b></td>
                ${row.cells.map(
                  (c) => `<td class="cell s${c.count === 0 ? 0 : c.count <= 1 ? 1 : c.count <= 3 ? 2 : c.count <= 6 ? 3 : 4}">${c.count || '·'}</td>`
                )}
                <td class="mono"><b>${row.total}</b></td>
              </tr>`
            )}
          </tbody>
        </table>
      </div>
    </section>

    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr))">
      ${strengthRow('By domain', coverage.domains, 'The headline coverage measure.')}
      ${strengthRow('By nature', coverage.natures, 'A collection heavy on one nature is a collection with a blind spot.')}
      ${strengthRow('By era', coverage.eras, 'Modern bias is the usual failure mode here.')}
      ${strengthRow('By difficulty', coverage.difficulties, 'Too few beginner entries makes the site unusable for young readers.')}
      ${strengthRow('By type', coverage.types, 'Types cut across domains — gaps here suggest missing connections.')}
      ${strengthRow('By status', coverage.statuses, 'A site with no open problems is presenting more certainty than exists.')}
    </div>
  `;
}

// ---------------------------------------------------------------- records

const RECORD_FORMS = {
  person: {
    title: 'People',
    note: 'Reusable across entries. Referenced by id from a paradox.',
    fields: [
      { name: 'id', label: 'Id (filename)', required: true },
      { name: 'name', label: 'Name', required: true },
      { name: 'born', label: 'Born (year, negative for BCE)', type: 'number' },
      { name: 'died', label: 'Died (year)', type: 'number' },
      { name: 'tradition', label: 'Tradition' },
      { name: 'bio', label: 'Biography', long: true, required: true },
      { name: 'url', label: 'URL' },
    ],
  },
  source: {
    title: 'Sources',
    note: 'The shared bibliography. One record, cited from many entries — fix it here and it is fixed everywhere.',
    fields: [
      { name: 'id', label: 'Id (filename)', required: true },
      { name: 'type', label: 'Type', taxonomy: 'sourceTypes', required: true },
      { name: 'title', label: 'Title', required: true },
      { name: 'authors', label: 'Authors (comma separated)', list: true },
      { name: 'year', label: 'Year' },
      { name: 'publisher', label: 'Publisher' },
      { name: 'journal', label: 'Journal' },
      { name: 'volume', label: 'Volume / issue / pages' },
      { name: 'doi', label: 'DOI (no https:// prefix)' },
      { name: 'isbn', label: 'ISBN' },
      { name: 'url', label: 'URL' },
      { name: 'notes', label: 'Notes', long: true },
    ],
  },
  path: {
    title: 'Learning paths',
    note: 'Ordered sequences. Each step needs a reason it follows the previous one.',
    fields: [
      { name: 'id', label: 'Id (filename)', required: true },
      { name: 'title', label: 'Title', required: true },
      { name: 'summary', label: 'Summary', long: true, required: true },
      { name: 'difficulty', label: 'Difficulty', taxonomy: 'difficulties', required: true },
      { name: 'domains', label: 'Domains (comma separated ids)', list: true },
      { name: 'order', label: 'Sort order', type: 'number' },
      { name: 'steps', label: 'Steps', steps: true },
    ],
  },
};

function viewRecords(kind) {
  const form = RECORD_FORMS[kind];
  const items = state.data[kind === 'person' ? 'people' : kind === 'source' ? 'sources' : 'paths'];

  $('#view').innerHTML = html`
    <div class="spread" style="margin-bottom:1rem">
      <div>
        <h1>${form.title}</h1>
        <p class="muted">${form.note}</p>
      </div>
      <button class="btn btn--primary" id="new-record">New ${kind}</button>
    </div>

    <div class="filters"><input type="search" id="r-q" placeholder="Filter…" /><span class="muted" id="r-count"></span></div>

    <div class="grid" style="grid-template-columns:minmax(0,1fr) minmax(0,26rem);align-items:start">
      <div class="card" style="padding:0.4rem 0.75rem">
        <table>
          <thead><tr><th>Name</th><th>Detail</th><th>Uses</th><th></th></tr></thead>
          <tbody id="rlist"></tbody>
        </table>
      </div>
      <div class="card" id="rform"><p class="muted">Select a record to edit, or create a new one.</p></div>
    </div>
  `;

  const paint = () => {
    const q = $('#r-q').value.trim().toLowerCase();
    const rows = items.filter((i) => JSON.stringify(i).toLowerCase().includes(q));
    $('#r-count').textContent = `${rows.length} of ${items.length}`;
    $('#rlist').innerHTML = rows
      .map(
        (i) => html`<tr>
          <td><b>${esc(i.name ?? i.title)}</b><div class="mono muted">${esc(i.id)}</div></td>
          <td class="muted">${esc(i.type ?? (i.authors ?? []).join(', ') ?? '')}${i.year ? ` · ${esc(i.year)}` : ''}${i.steps ? `${i.steps} steps` : ''}</td>
          <td class="mono ${i.uses === 0 ? '' : 'muted'}">${i.uses ?? '—'}</td>
          <td class="right"><button class="btn btn--sm" data-open="${esc(i.id)}">Edit</button></td>
        </tr>`
      )
      .join('');
    $$('[data-open]').forEach((b) => (b.onclick = () => editRecord(kind, b.dataset.open)));
  };

  $('#r-q').oninput = paint;
  $('#new-record').onclick = () => editRecord(kind, null);
  paint();
}

async function editRecord(kind, id) {
  const form = RECORD_FORMS[kind];
  let data = { id: '' };
  if (id) {
    try {
      data = (await api('GET', `/api/record?kind=${kind}&id=${encodeURIComponent(id)}`)).data;
    } catch (error) {
      return toast(error.message, 'error');
    }
  }

  const tx = state.data.taxonomy;

  const fieldHtml = (f) => {
    const value = data[f.name];
    if (f.steps) {
      const steps = Array.isArray(value) ? value : [];
      return html`<div class="field"><span>${f.label}</span>
        <div id="steps-box">${steps
          .map(
            (s, i) => html`<div class="repeat">
              <div class="repeat__head"><span class="repeat__n">${i + 1}</span><button class="btn btn--sm btn--danger" data-srm="${i}">Remove</button></div>
              <label class="field"><span>Paradox</span>
                <select data-si="${i}" data-sk="paradox">
                  ${state.data.paradoxes.map((p) => `<option value="${esc(p.slug)}" ${p.slug === s.paradox ? 'selected' : ''}>${esc(p.title)} (${p.state})</option>`)}
                </select></label>
              <label class="field"><span>Why this step follows</span><textarea rows="2" data-si="${i}" data-sk="why">${esc(s.why ?? '')}</textarea></label>
            </div>`
          )
          .join('')}</div>
        <button class="btn" id="add-step">+ Add step</button></div>`;
    }
    if (f.taxonomy) {
      return html`<label class="field"><span>${f.label}</span>
        <select data-f="${f.name}">${tx[f.taxonomy].map((t) => `<option value="${esc(t.id)}" ${t.id === value ? 'selected' : ''}>${esc(t.label)}</option>`)}</select></label>`;
    }
    if (f.long) {
      return html`<label class="field"><span>${f.label}</span><textarea rows="3" data-f="${f.name}">${esc(value ?? '')}</textarea></label>`;
    }
    const v = f.list ? (value ?? []).join(', ') : (value ?? '');
    return html`<label class="field"><span>${f.label}</span><input type="${f.type ?? 'text'}" data-f="${f.name}" value="${esc(v)}" /></label>`;
  };

  $('#rform').innerHTML = html`
    <h2>${id ? `Edit ${esc(id)}` : `New ${kind}`}</h2>
    ${form.fields.map(fieldHtml)}
    <div class="inline" style="margin-top:0.75rem">
      <button class="btn btn--primary" id="r-save">Save</button>
      ${id ? '<button class="btn btn--danger" id="r-delete">Delete</button>' : ''}
    </div>
  `;

  const steps = Array.isArray(data.steps) ? [...data.steps] : [];
  if (form.fields.some((f) => f.steps)) {
    const rebind = () => {
      $$('[data-srm]').forEach((b) => (b.onclick = () => { steps.splice(Number(b.dataset.srm), 1); editRecordRedraw(); }));
      $$('[data-si]').forEach((el) => (el.oninput = () => { steps[Number(el.dataset.si)][el.dataset.sk] = el.value; }));
    };
    const editRecordRedraw = () => {
      data.steps = steps;
      editRecord(kind, id);
    };
    $('#add-step').onclick = () => { steps.push({ paradox: state.data.paradoxes[0]?.slug, why: '' }); data.steps = steps; editRecord(kind, id); };
    rebind();
  }

  $('#r-save').onclick = async () => {
    const payload = {};
    for (const f of form.fields) {
      if (f.steps) { payload.steps = steps; continue; }
      const el = $(`[data-f="${f.name}"]`);
      if (!el) continue;
      let value = el.value.trim();
      if (f.list) payload[f.name] = value.split(',').map((s) => s.trim()).filter(Boolean);
      else if (f.type === 'number') payload[f.name] = value === '' ? undefined : Number(value);
      else payload[f.name] = value || undefined;
    }
    try {
      const result = await api('POST', '/api/record', { kind, data: payload, previousId: id });
      toast(`Saved ${result.file}`, 'ok');
      await load();
      render();
    } catch (error) {
      toast(error.message, 'error');
    }
  };

  if (id) {
    $('#r-delete').onclick = async () => {
      if (!(await confirmDialog('Delete this record?', `${id} will be removed from disk.`, 'Delete'))) return;
      try {
        await api('DELETE', `/api/record?kind=${kind}&id=${encodeURIComponent(id)}`);
        toast('Deleted', 'ok');
        await load();
        render();
      } catch (error) {
        toast(error.message, 'error');
      }
    };
  }
}

// ---------------------------------------------------------------- taxonomy

const TAXONOMY_FILES = [
  ['domains.yml', 'Domains'],
  ['types.yml', 'Types'],
  ['natures.yml', 'Natures'],
  ['difficulties.yml', 'Difficulties'],
  ['statuses.yml', 'Statuses'],
  ['eras.yml', 'Eras'],
  ['relationship-kinds.yml', 'Relationship kinds'],
  ['source-types.yml', 'Source types'],
];

function viewTaxonomy() {
  $('#view').innerHTML = html`
    <h1>Taxonomy</h1>
    <p class="muted" style="margin-bottom:1.25rem">
      The controlled vocabularies. Adding a term here creates its browse page,
      adds it to every filter, and adds it to the coverage dashboard. No code
      changes. Each file is a YAML list; every term needs an <span class="mono">id</span>
      and a <span class="mono">label</span>.
    </p>

    <div class="filters">
      <select id="t-file">${TAXONOMY_FILES.map(([f, label]) => `<option value="${f}">${label}</option>`)}</select>
      <button class="btn btn--primary" id="t-save">Save</button>
      <span class="muted" id="t-status"></span>
    </div>

    <div class="card"><textarea id="t-text" rows="30" spellcheck="false"></textarea></div>
  `;

  const open = async () => {
    const file = $('#t-file').value;
    try {
      const { text } = await api('GET', `/api/taxonomy?file=${encodeURIComponent(file)}`);
      $('#t-text').value = text;
      $('#t-status').textContent = file;
    } catch (error) {
      toast(error.message, 'error');
    }
  };

  $('#t-file').onchange = open;
  $('#t-save').onclick = async () => {
    try {
      const result = await api('POST', '/api/taxonomy', { file: $('#t-file').value, text: $('#t-text').value });
      toast(`Saved ${result.saved} — ${result.terms} terms`, 'ok');
      await load();
      state.tab = 'taxonomy';
      render();
      open();
    } catch (error) {
      toast(error.message, 'error');
    }
  };

  open();
}

// ---------------------------------------------------------------- boot

$('#tabs').addEventListener('click', (e) => {
  const tab = e.target.closest('button')?.dataset.tab;
  if (tab) go(tab);
});
$('#refresh').onclick = () => load().then(() => toast('Reloaded from disk'));

window.addEventListener('beforeunload', (e) => {
  if (state.dirty) e.preventDefault();
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 's') {
    e.preventDefault();
    $('#save')?.click();
  }
});

load();
