// Figures for the collection.
//
// A figure here is not decoration. Decorative pictures beside explanatory text
// measurably hurt comprehension — the reader spends attention reconciling the
// image with the words and comes away with less. So every figure on this site
// draws the *shape of the trouble*: the structural reason the entry is hard.
//
// That is also why figures are shared. The Liar, Russell's paradox, the Barber
// and the Grandfather are one shape wearing four costumes, and seeing the same
// diagram on all four is the point rather than a shortcut. The site's whole
// argument is that these things have kinds; the figures make the kinds visible.
//
// Everything is inline SVG on a 320×160 canvas, drawn in `currentColor` with a
// single accent, so it inherits the page's text colour and works in either
// theme without a second asset.

const W = 320;
const H = 160;

/** @type {Record<string, { label: string, caption: string, svg: string }>} */
export const MOTIFS = {
  'self-reference': {
    label: 'Self-reference',
    caption: 'A statement that turns around and talks about itself. Follow the arrow and it hands you back the opposite of what you started with.',
    svg: `
      <rect x="104" y="58" width="112" height="42" rx="9" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <text x="160" y="84" text-anchor="middle" font-size="13" font-weight="600" fill="var(--fig-accent)">this sentence</text>
      <path d="M216 79H250Q260 79 260 89V114Q260 124 250 124H70Q60 124 60 114V89Q60 79 70 79H104"
            fill="none" stroke="var(--fig-accent)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M96 73l9 6-9 6" fill="none" stroke="var(--fig-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="160" y="146" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">…is about this sentence</text>
      <text x="160" y="38" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">no outside reference anywhere</text>
    `,
  },

  regress: {
    label: 'Infinite regress',
    caption: 'Each step covers half of what is left. There are infinitely many steps, and yet the whole journey is finite.',
    svg: `
      <line x1="24" y1="112" x2="296" y2="112" stroke="currentColor" stroke-opacity=".25" stroke-width="2"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const start = 24 + 256 * (1 - 1 / 2 ** i);
        const end = 24 + 256 * (1 - 1 / 2 ** (i + 1));
        const h = 112 - Math.max(10, 46 / (i * 0.55 + 1));
        return `<path d="M${start} 112 Q${(start + end) / 2} ${h} ${end} 112" fill="none" stroke="var(--fig-accent)" stroke-width="${Math.max(1, 2.4 - i * 0.22)}" stroke-linecap="round"/>
                <circle cx="${start}" cy="112" r="${Math.max(1.4, 3.4 - i * 0.3)}" fill="var(--fig-accent)"/>`;
      }).join('')}
      <line x1="280" y1="94" x2="280" y2="126" stroke="currentColor" stroke-opacity=".45" stroke-width="2" stroke-dasharray="3 4"/>
      <text x="280" y="142" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">the end</text>
      <text x="40" y="142" font-size="11" fill="currentColor" fill-opacity=".5">start</text>
    `,
  },

  'two-infinities': {
    label: 'Counting the uncountable',
    caption: 'Two endless collections, paired off one for one. The pairing never runs out — which is what it means for them to be the same size.',
    svg: `
      ${[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 74 + i * 38;
        return `<circle cx="${x}" cy="54" r="7" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="2"/>
                <circle cx="${x}" cy="112" r="7" fill="var(--fig-accent)" fill-opacity=".2" stroke="var(--fig-accent)" stroke-width="2"/>
                <line x1="${x}" y1="63" x2="${x}" y2="103" stroke="var(--fig-accent)" stroke-width="1.6" stroke-opacity=".8"/>`;
      }).join('')}
      <text x="296" y="59" text-anchor="end" font-size="15" fill="currentColor" fill-opacity=".45">…</text>
      <text x="296" y="117" text-anchor="end" font-size="15" fill="currentColor" fill-opacity=".45">…</text>
      <text x="24" y="34" font-size="11" fill="currentColor" fill-opacity=".55">every number</text>
      <text x="24" y="142" font-size="11" fill="currentColor" fill-opacity=".55">only the squares — and none left over</text>
    `,
  },

  'aggregation-flip': {
    label: 'The parts disagree with the whole',
    caption: 'Every group points one way. Add the groups together and the total points the other way. No arithmetic was harmed.',
    svg: `
      <g stroke-linecap="round">
        <path d="M40 116l40-30" stroke="var(--fig-accent)" stroke-width="3"/>
        <path d="M74 88l8-2-2 8" stroke="var(--fig-accent)" stroke-width="3" fill="none" stroke-linejoin="round"/>
        <path d="M120 96l40-30" stroke="var(--fig-accent)" stroke-width="3"/>
        <path d="M154 68l8-2-2 8" stroke="var(--fig-accent)" stroke-width="3" fill="none" stroke-linejoin="round"/>
        <path d="M204 60l72 54" stroke="currentColor" stroke-opacity=".7" stroke-width="3"/>
        <path d="M270 106l8 10-11 1" stroke="currentColor" stroke-opacity=".7" stroke-width="3" fill="none" stroke-linejoin="round"/>
      </g>
      <text x="60" y="140" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">group A</text>
      <text x="140" y="140" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">group B</text>
      <text x="240" y="140" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">both together</text>
      <line x1="188" y1="34" x2="188" y2="126" stroke="currentColor" stroke-opacity=".18" stroke-width="1.5" stroke-dasharray="4 5"/>
    `,
  },

  payoff: {
    label: 'Everyone reasoning well, everyone worse off',
    caption: 'Each player improves their own outcome by defecting, whatever the other does. Both defect. Both end up in the worst square they could have shared.',
    svg: `
      <g stroke="currentColor" stroke-opacity=".3" stroke-width="1.5" fill="none">
        <rect x="96" y="34" width="90" height="52" rx="6"/>
        <rect x="186" y="34" width="90" height="52" rx="6"/>
        <rect x="96" y="86" width="90" height="52" rx="6"/>
      </g>
      <rect x="186" y="86" width="90" height="52" rx="6" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <text x="141" y="66" text-anchor="middle" font-size="14" fill="currentColor" fill-opacity=".6">good</text>
      <text x="231" y="66" text-anchor="middle" font-size="14" fill="currentColor" fill-opacity=".6">bad</text>
      <text x="141" y="118" text-anchor="middle" font-size="14" fill="currentColor" fill-opacity=".6">bad</text>
      <text x="231" y="118" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fig-accent)">worst</text>
      <text x="86" y="66" text-anchor="end" font-size="11" fill="currentColor" fill-opacity=".5">stay</text>
      <text x="86" y="118" text-anchor="end" font-size="11" fill="currentColor" fill-opacity=".5">defect</text>
      <text x="141" y="26" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">stay</text>
      <text x="231" y="26" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">defect</text>
    `,
  },

  coordination: {
    label: 'Agreement that cannot be confirmed',
    caption: 'The parties can only learn about each other through messages, and messages go missing. No amount of confirming ever finishes.',
    svg: `
      <circle cx="58" cy="80" r="20" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <circle cx="262" cy="80" r="20" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <g stroke-linecap="round" fill="none">
        <path d="M82 62h156" stroke="currentColor" stroke-opacity=".6" stroke-width="2"/>
        <path d="M230 56l9 6-9 6" stroke="currentColor" stroke-opacity=".6" stroke-width="2" stroke-linejoin="round"/>
        <path d="M238 80H160" stroke="currentColor" stroke-opacity=".6" stroke-width="2"/>
        <path d="M90 74l-9 6 9 6" stroke="currentColor" stroke-opacity=".45" stroke-width="2" stroke-linejoin="round"/>
        <path d="M148 80h-66" stroke="currentColor" stroke-opacity=".25" stroke-width="2" stroke-dasharray="4 5"/>
        <path d="M82 100h120" stroke="currentColor" stroke-opacity=".25" stroke-width="2" stroke-dasharray="4 5"/>
      </g>
      <g stroke="var(--fig-accent)" stroke-width="2.5" stroke-linecap="round">
        <path d="M148 73l14 14M162 73l-14 14"/>
      </g>
      <text x="160" y="128" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">the message that had to arrive</text>
    `,
  },

  frames: {
    label: 'Two observers, two correct answers',
    caption: 'The disagreement is not a mistake. Each observer measures accurately from where they stand, and there is no third place to stand.',
    svg: `
      <line x1="160" y1="20" x2="160" y2="140" stroke="currentColor" stroke-opacity=".18" stroke-width="1.5" stroke-dasharray="4 5"/>
      <g fill="none" stroke-linecap="round">
        <path d="M30 118L108 34" stroke="var(--fig-accent)" stroke-width="2.5"/>
        <path d="M30 118h96" stroke="currentColor" stroke-opacity=".35" stroke-width="2"/>
        <path d="M290 118L212 34" stroke="currentColor" stroke-opacity=".7" stroke-width="2.5"/>
        <path d="M290 118h-96" stroke="currentColor" stroke-opacity=".35" stroke-width="2"/>
      </g>
      <circle cx="30" cy="118" r="6" fill="var(--fig-accent)"/>
      <circle cx="290" cy="118" r="6" fill="currentColor" fill-opacity=".7"/>
      <text x="34" y="140" font-size="11" fill="currentColor" fill-opacity=".55">her clock</text>
      <text x="286" y="140" text-anchor="end" font-size="11" fill="currentColor" fill-opacity=".55">his clock</text>
      <text x="160" y="30" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".45">same event</text>
    `,
  },

  superposition: {
    label: 'Both states until it is looked at',
    caption: 'The box holds two outcomes at once. Opening it is not discovering which was already true — that is exactly the part nobody agrees on.',
    svg: `
      <rect x="96" y="42" width="128" height="86" rx="10" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <line x1="160" y1="42" x2="160" y2="128" stroke="var(--fig-accent)" stroke-opacity=".4" stroke-width="1.5" stroke-dasharray="4 5"/>
      <circle cx="128" cy="80" r="15" fill="none" stroke="currentColor" stroke-opacity=".65" stroke-width="2"/>
      <path d="M122 76l4 4M134 76l-4 4" stroke="currentColor" stroke-opacity=".65" stroke-width="2" stroke-linecap="round"/>
      <path d="M122 90q6 5 12 0" fill="none" stroke="currentColor" stroke-opacity=".65" stroke-width="2" stroke-linecap="round"/>
      <circle cx="192" cy="80" r="15" fill="none" stroke="currentColor" stroke-opacity=".65" stroke-width="2"/>
      <path d="M186 74l8 8M194 74l-8 8" stroke="currentColor" stroke-opacity=".65" stroke-width="2" stroke-linecap="round"/>
      <path d="M186 92q6-5 12 0" fill="none" stroke="currentColor" stroke-opacity=".65" stroke-width="2" stroke-linecap="round"/>
      <text x="160" y="146" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">sealed</text>
      <path d="M84 34h20M84 34v20" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="2" stroke-linecap="round"/>
      <path d="M236 136h-20M236 136v-20" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="2" stroke-linecap="round"/>
    `,
  },

  vagueness: {
    label: 'No line anywhere',
    caption: 'Each step is far too small to matter. Enough of them, and you have crossed from plainly one thing to plainly another without ever passing a border.',
    svg: `
      <defs>
        <linearGradient id="vg" x1="0" x2="1">
          <stop offset="0" stop-color="var(--fig-accent)" stop-opacity=".08"/>
          <stop offset="1" stop-color="var(--fig-accent)" stop-opacity=".85"/>
        </linearGradient>
      </defs>
      <rect x="24" y="56" width="272" height="46" rx="8" fill="url(#vg)"/>
      <rect x="24" y="56" width="272" height="46" rx="8" fill="none" stroke="currentColor" stroke-opacity=".22" stroke-width="1.5"/>
      <text x="34" y="122" font-size="11" fill="currentColor" fill-opacity=".6">not a heap</text>
      <text x="286" y="122" text-anchor="end" font-size="11" fill="currentColor" fill-opacity=".6">a heap</text>
      <text x="160" y="44" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">one grain at a time</text>
      <g stroke="currentColor" stroke-opacity=".3" stroke-width="1.5" stroke-dasharray="3 4">
        <line x1="150" y1="50" x2="150" y2="108"/>
        <line x1="170" y1="50" x2="170" y2="108"/>
      </g>
      <text x="160" y="82" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor" fill-opacity=".55">?</text>
    `,
  },

  'identity-swap': {
    label: 'Every part replaced',
    caption: 'No single swap changes what the thing is. Repeat until nothing original remains, and the question of whether it survived has no obvious answer.',
    svg: `
      ${[0, 1, 2, 3, 4].map((i) => {
        const x = 26 + i * 58;
        const replaced = i;
        return `<g transform="translate(${x} 44)">
          ${[0, 1, 2, 3].map((r) => `<rect x="0" y="${r * 15}" width="46" height="11" rx="2.5" fill="${r < replaced ? 'var(--fig-accent)' : 'none'}" fill-opacity="${r < replaced ? '.85' : '0'}" stroke="${r < replaced ? 'var(--fig-accent)' : 'currentColor'}" stroke-opacity="${r < replaced ? '1' : '.45'}" stroke-width="1.6"/>`).join('')}
        </g>`;
      }).join('')}
      <text x="49" y="130" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">year 1</text>
      <text x="281" y="130" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">year 300</text>
      <text x="160" y="30" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">same name throughout</text>
    `,
  },

  absence: {
    label: 'The signal that should be there',
    caption: 'Everything we know says the sky ought to be crowded. Look, and it is empty. The gap between the prediction and the observation is the whole problem.',
    svg: `
      <rect x="24" y="26" width="126" height="108" rx="8" fill="var(--fig-accent)" fill-opacity=".85"/>
      <rect x="170" y="26" width="126" height="108" rx="8" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-opacity=".25" stroke-width="1.5"/>
      ${[[196, 52], [242, 44], [276, 72], [210, 92], [262, 112], [188, 120]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 2 ? 1.4 : 2}" fill="currentColor" fill-opacity=".5"/>`).join('')}
      <text x="87" y="150" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".6">what the theory predicts</text>
      <text x="233" y="150" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".6">what we see</text>
    `,
  },

  sorting: {
    label: 'Order for nothing',
    caption: 'A gate that lets the fast ones through one way and the slow ones the other. It looks free. The cost is hiding somewhere, and finding it took a century.',
    svg: `
      <rect x="26" y="34" width="268" height="92" rx="8" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
      <line x1="160" y1="34" x2="160" y2="70" stroke="currentColor" stroke-opacity=".5" stroke-width="3"/>
      <line x1="160" y1="90" x2="160" y2="126" stroke="currentColor" stroke-opacity=".5" stroke-width="3"/>
      <circle cx="160" cy="80" r="7" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2"/>
      ${[[58, 56], [92, 100], [70, 78], [110, 52]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 2 ? 3 : 5}" fill="currentColor" fill-opacity="${i % 2 ? '.35' : '.6'}"/>`).join('')}
      ${[[208, 50], [246, 66], [222, 96], [268, 104], [200, 112], [262, 46]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i < 3 ? 5 : 3}" fill="${i < 3 ? 'var(--fig-accent)' : 'currentColor'}" fill-opacity="${i < 3 ? '.9' : '.3'}"/>`).join('')}
      <text x="90" y="146" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">mixed</text>
      <text x="234" y="146" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">sorted, apparently free</text>
    `,
  },

  'perverse-curve': {
    label: 'The intervention backfires',
    caption: 'Push on the thing you want to improve and the line moves the wrong way — not through incompetence, but because pushing changed what the line was measuring.',
    svg: `
      <line x1="34" y1="130" x2="296" y2="130" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
      <line x1="34" y1="130" x2="34" y2="24" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
      <path d="M34 104C80 74 116 58 150 56" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="2.5" stroke-dasharray="5 5"/>
      <path d="M150 56c34-2 76 10 138 46" fill="none" stroke="currentColor" stroke-opacity=".2" stroke-width="2.5" stroke-dasharray="5 5"/>
      <path d="M34 104C80 74 116 58 150 56c34 2 60 24 82 56" fill="none" stroke="var(--fig-accent)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="150" cy="56" r="5" fill="var(--fig-accent)"/>
      <line x1="150" y1="34" x2="150" y2="130" stroke="var(--fig-accent)" stroke-opacity=".35" stroke-width="1.5" stroke-dasharray="3 4"/>
      <text x="150" y="28" text-anchor="middle" font-size="11" fill="var(--fig-accent)">you intervene here</text>
      <text x="286" y="66" text-anchor="end" font-size="11" fill="currentColor" fill-opacity=".4">expected</text>
    `,
  },

  wall: {
    label: 'A proved limit',
    caption: 'Not a problem waiting for a cleverer person or a faster machine. There is a proof that the far side cannot be reached at all.',
    svg: `
      <g stroke-linecap="round" fill="none">
        <path d="M28 80h96" stroke="var(--fig-accent)" stroke-width="3"/>
        <path d="M112 71l12 9-12 9" stroke="var(--fig-accent)" stroke-width="3" stroke-linejoin="round"/>
        <path d="M28 48h72" stroke="currentColor" stroke-opacity=".35" stroke-width="2.5"/>
        <path d="M28 112h58" stroke="currentColor" stroke-opacity=".35" stroke-width="2.5"/>
      </g>
      <rect x="148" y="20" width="16" height="120" rx="3" fill="var(--fig-accent)" fill-opacity=".18" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <g stroke="currentColor" stroke-opacity=".2" stroke-width="2" stroke-dasharray="4 6">
        <path d="M186 44h96M186 124h74"/>
      </g>
      <text x="238" y="80" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".42">provably</text>
      <text x="238" y="96" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".42">unreachable</text>
    `,
  },

  scale: {
    label: 'Size should have mattered',
    caption: 'One is thousands of times bigger than the other. Everything we understand says that ought to change the outcome. It does not.',
    svg: `
      <circle cx="88" cy="86" r="42" fill="var(--fig-accent)" fill-opacity=".16" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <circle cx="228" cy="86" r="11" fill="var(--fig-accent)" fill-opacity=".16" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <g stroke="currentColor" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" fill="none">
        <path d="M88 138v8M228 107v39"/>
        <path d="M64 146h48M204 146h48"/>
      </g>
      <text x="88" y="26" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">1000× the cells</text>
      <text x="228" y="62" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">1×</text>
      <text x="160" y="86" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor" fill-opacity=".55">=</text>
    `,
  },

  spillover: {
    label: 'One trait floods all others',
    caption: 'A single vivid quality — good or bad — bleeds into every other judgment. The halo is invisible to the person wearing it, and to the person seeing it.',
    svg: `
      <circle cx="62" cy="80" r="22" fill="var(--fig-accent)" fill-opacity=".85" stroke="var(--fig-accent)" stroke-width="2.5"/>
      <text x="62" y="148" text-anchor="middle" font-size="11" fill="var(--fig-accent)">one trait</text>
      <g stroke="var(--fig-accent)" fill="none" stroke-linecap="round">
        <line x1="84" y1="64" x2="182" y2="28"  stroke-opacity=".75" stroke-width="2"/>
        <line x1="84" y1="72" x2="182" y2="52"  stroke-opacity=".65" stroke-width="1.8"/>
        <line x1="84" y1="80" x2="182" y2="76"  stroke-opacity=".55" stroke-width="1.6"/>
        <line x1="84" y1="88" x2="182" y2="100" stroke-opacity=".45" stroke-width="1.4"/>
        <line x1="84" y1="96" x2="182" y2="124" stroke-opacity=".35" stroke-width="1.2"/>
      </g>
      <g fill="var(--fig-accent)" fill-opacity=".22" stroke="var(--fig-accent)" stroke-width="1.5">
        <rect x="182" y="18"  width="110" height="22" rx="4"/>
        <rect x="182" y="42"  width="110" height="22" rx="4"/>
        <rect x="182" y="66"  width="110" height="22" rx="4"/>
        <rect x="182" y="90"  width="110" height="22" rx="4"/>
        <rect x="182" y="114" width="110" height="22" rx="4"/>
      </g>
      <text x="237" y="148" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".55">all other judgments</text>
    `,
  },

  'power-law': {
    label: 'Frequency falls off sharply',
    caption: 'The first digit is 1 six times more often than 9. Not because someone arranged it — it emerges from the mathematics of how real-world numbers span many orders of magnitude.',
    svg: `
      <line x1="30" y1="132" x2="304" y2="132" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
      <line x1="30" y1="132" x2="30"  y2="20"  stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
      ${[
        [1, 106], [2, 62], [3, 44], [4, 34], [5, 28], [6, 24], [7, 20], [8, 18], [9, 16]
      ].map(([d, h], i) => {
        const x = 38 + i * 30;
        const opacity = (0.9 - i * 0.07).toFixed(2);
        return `<rect x="${x}" y="${132 - h}" width="22" height="${h}" rx="2" fill="var(--fig-accent)" fill-opacity="${opacity}"/>
                <text x="${x + 11}" y="144" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity=".5">${d}</text>`;
      }).join('')}
      <text x="30" y="16" font-size="10" fill="currentColor" fill-opacity=".45">30%</text>
      <text x="30" y="120" font-size="10" fill="currentColor" fill-opacity=".35">5%</text>
      <text x="175" y="156" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity=".5">leading digit</text>
    `,
  },

  cycle: {
    label: 'Preference that goes round',
    caption: 'A beats B, B beats C, and C beats A. Every individual comparison is decided by a clear majority, and together they form a loop with no winner.',
    svg: `
      ${[
        ['A', 160, 34],
        ['B', 254, 116],
        ['C', 66, 116],
      ].map(([t, x, y]) => `<circle cx="${x}" cy="${y}" r="22" fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5"/>
        <text x="${x}" y="${Number(y) + 6}" text-anchor="middle" font-size="16" font-weight="700" fill="var(--fig-accent)">${t}</text>`).join('')}
      <g stroke="currentColor" stroke-opacity=".6" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M181 48l50 44"/><path d="M232 80l2 14-14-1"/>
        <path d="M231 124H90"/><path d="M104 114l-14 10 14 10"/>
        <path d="M84 96l52-44"/><path d="M124 50l14-2-2 14"/>
      </g>
    `,
  },

  divergence: {
    label: 'Growth that outruns intuition',
    caption: 'Each step doubles the one before it. A few steps in it is still small; a few more and it is past anything the situation can hold.',
    svg: `
      <line x1="30" y1="132" x2="298" y2="132" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const h = Math.max(3, Math.min(106, 2.4 * 2 ** (i * 0.79)));
        return `<rect x="${38 + i * 32}" y="${132 - h}" width="20" height="${h}" rx="2.5" fill="var(--fig-accent)" fill-opacity="${0.28 + i * 0.09}"/>`;
      }).join('')}
      <text x="48" y="148" font-size="11" fill="currentColor" fill-opacity=".5">1</text>
      <text x="290" y="148" text-anchor="end" font-size="11" fill="currentColor" fill-opacity=".5">8 steps later</text>
    `,
  },

  conditioning: {
    label: 'What the evidence was answering',
    caption: 'Something gets opened, and the odds on everything else move. How far they move depends entirely on why that one was opened.',
    svg: `
      ${[0, 1, 2].map((i) => {
        const x = 42 + i * 84;
        const open = i === 2;
        return `<rect x="${x}" y="36" width="60" height="88" rx="6" fill="${open ? 'none' : 'var(--fig-wash)'}" stroke="${open ? 'currentColor' : 'var(--fig-accent)'}" stroke-opacity="${open ? '.35' : '1'}" stroke-width="2.5" ${open ? 'stroke-dasharray="5 5"' : ''}/>
          ${open ? `<path d="M${x + 18} 92l12-24 12 24z" fill="currentColor" fill-opacity=".25"/><text x="${x + 30}" y="${140}" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">opened</text>` : `<circle cx="${x + 30}" cy="80" r="4" fill="var(--fig-accent)" fill-opacity=".5"/>`}
        `;
      }).join('')}
      <text x="72" y="20" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".55">1/3</text>
      <text x="156" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--fig-accent)">2/3</text>
      <text x="240" y="20" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity=".35">0</text>
    `,
  },

  symmetry: {
    label: 'Perfectly balanced',
    caption: 'Two options, identical in every respect that could possibly matter. Any argument for taking one is word for word an argument for taking the other.',
    svg: `
      <line x1="160" y1="46" x2="160" y2="132" stroke="currentColor" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/>
      <path d="M132 132h56" stroke="currentColor" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="46" x2="264" y2="46" stroke="var(--fig-accent)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="160" cy="46" r="5" fill="var(--fig-accent)"/>
      <g fill="var(--fig-wash)" stroke="var(--fig-accent)" stroke-width="2.5">
        <rect x="26" y="60" width="60" height="42" rx="6"/>
        <rect x="234" y="60" width="60" height="42" rx="6"/>
      </g>
      <g stroke="var(--fig-accent)" stroke-opacity=".5" stroke-width="1.5">
        <line x1="56" y1="46" x2="56" y2="60"/>
        <line x1="264" y1="46" x2="264" y2="60"/>
      </g>
      <text x="56" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-accent)">?</text>
      <text x="264" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-accent)">?</text>
      <text x="160" y="152" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity=".5">nothing to choose between them</text>
    `,
  },
};

/** Which structural family each entry belongs to. */
export const FIGURE_BY_SLUG = {
  'abilene-paradox': 'coordination',
  'achilles-and-the-tortoise': 'regress',
  'allais-paradox': 'payoff',
  'arrows-impossibility-theorem': 'cycle',
  'banach-tarski-paradox': 'two-infinities',
  'barber-paradox': 'self-reference',
  'berksons-paradox': 'aggregation-flip',
  'berrys-paradox': 'self-reference',
  'bertrands-box-paradox': 'conditioning',
  'birthday-problem': 'divergence',
  'black-hole-information-paradox': 'wall',
  'boy-or-girl-paradox': 'conditioning',
  'braess-paradox': 'perverse-curve',
  'buridans-ass': 'symmetry',
  'byzantine-generals-problem': 'coordination',
  'c-value-paradox': 'scale',
  'cantors-diagonal-argument': 'two-infinities',
  'cap-theorem': 'wall',
  'condorcet-paradox': 'cycle',
  'easterlin-paradox': 'perverse-curve',
  'epr-paradox': 'frames',
  'fermi-paradox': 'absence',
  'flp-impossibility': 'wall',
  'friendship-paradox': 'aggregation-flip',
  'galileos-paradox': 'two-infinities',
  'giffen-paradox': 'perverse-curve',
  'godels-incompleteness': 'wall',
  'goodharts-law': 'perverse-curve',
  'grandfather-paradox': 'self-reference',
  'halting-problem': 'wall',
  'hilberts-hotel': 'two-infinities',
  'jevons-paradox': 'perverse-curve',
  'ladder-paradox': 'frames',
  'levinthals-paradox': 'divergence',
  'liar-paradox': 'self-reference',
  'maxwells-demon': 'sorting',
  'monty-hall-problem': 'conditioning',
  'moravecs-paradox': 'scale',
  'olbers-paradox': 'absence',
  'paradox-of-choice': 'perverse-curve',
  'paradox-of-the-court': 'self-reference',
  'paradox-of-tolerance': 'self-reference',
  'peto-paradox': 'scale',
  'prisoners-dilemma': 'payoff',
  'productivity-paradox': 'perverse-curve',
  'russells-paradox': 'self-reference',
  'schrodingers-cat': 'superposition',
  'ship-of-theseus': 'identity-swap',
  'simpsons-paradox': 'aggregation-flip',
  'sleeping-beauty-problem': 'conditioning',
  'sorites-paradox': 'vagueness',
  'st-petersburg-paradox': 'divergence',
  'tragedy-of-the-commons': 'payoff',
  'twin-paradox': 'frames',
  'two-envelopes-problem': 'symmetry',
  'two-generals-problem': 'coordination',
  'unexpected-hanging-paradox': 'self-reference',
  'zenos-dichotomy': 'regress',
  // Laws and effects added 2026-08-31
  'benfords-law': 'power-law',
  'bystander-effect': 'payoff',
  'cobra-effect': 'perverse-curve',
  'halo-effect': 'spillover',
  'matthew-effect': 'divergence',
  'moores-law': 'divergence',
  'pygmalion-effect': 'perverse-curve',
};

export const FIGURE_IDS = Object.keys(MOTIFS);
export const VIEWBOX = `0 0 ${W} ${H}`;

/** The figure for an entry, or null if it has none. Never throws. */
export function figureFor(slug) {
  const id = FIGURE_BY_SLUG[slug];
  if (!id) return null;
  const motif = MOTIFS[id];
  return motif ? { id, ...motif } : null;
}

/** Every entry sharing a structural family, for the "same shape" listing. */
export function slugsWithFigure(id) {
  return Object.entries(FIGURE_BY_SLUG)
    .filter(([, figureId]) => figureId === id)
    .map(([slug]) => slug);
}
