// One-off content migration: add `hook` and `renown` to every paradox.
// Kept in the repo so the edit is reviewable rather than a mystery diff.

import fs from 'node:fs';
import path from 'node:path';
import { PARADOX_DIR } from '../src/lib/paths.js';

const DATA = {
  'abilene-paradox': ['specialist', 'Everyone at the table agreed to a trip that not one of them wanted to take. How does a group choose what every member is against?'],
  'achilles-and-the-tortoise': ['landmark', 'The fastest runner alive can never catch a tortoise with a head start. The argument is airtight. So where does it go wrong?'],
  'allais-paradox': ['known', 'Offered the same improvement in odds twice, most people take it once and refuse it the second time. Both choices feel obviously right.'],
  'arrows-impossibility-theorem': ['known', 'There is no fair way to turn what a group of people each want into what the group wants. This is not a complaint about politics. It is a theorem.'],
  'banach-tarski-paradox': ['landmark', 'Cut a solid ball into five pieces, move them around, and you have two balls the same size as the first. Nothing was stretched.'],
  'barber-paradox': ['known', 'The barber shaves every man in town who does not shave himself, and no one else. So who shaves the barber?'],
  'berksons-paradox': ['specialist', 'Two things with nothing whatever to do with each other can look strongly related — purely because of who ended up in the study.'],
  'berrys-paradox': ['specialist', '"The smallest number that cannot be described in fewer than twelve words." That description is eleven words long.'],
  'bertrands-box-paradox': ['specialist', 'You reach into one of three boxes and pull out a gold coin. The chance the other coin in that box is gold is not one half.'],
  'birthday-problem': ['landmark', 'How many people must be in a room before two of them probably share a birthday? The answer is far smaller than you expect.'],
  'black-hole-information-paradox': ['known', 'Physics insists information can never be destroyed. Black holes appear to destroy it. Both of those cannot be true.'],
  'boy-or-girl-paradox': ['known', 'A family has two children and one of them is a boy. What are the odds the other is a girl? It depends on how you found out.'],
  'braess-paradox': ['known', 'Add a new road to a congested city and every journey gets slower. Close the road again and the traffic speeds up.'],
  'buridans-ass': ['known', 'A donkey stands exactly halfway between two identical bales of hay. With no reason on earth to prefer either, does it starve?'],
  'byzantine-generals-problem': ['known', 'Several generals must attack together or be destroyed. They can only send messengers, and some of the generals are traitors.'],
  'c-value-paradox': ['specialist', 'An onion carries five times more DNA than you do. A single-celled amoeba carries a hundred times more. Nobody expected that.'],
  'cantors-diagonal-argument': ['known', 'There are more numbers between 0 and 1 than there are whole numbers in all of eternity. Both lists are infinite.'],
  'cap-theorem': ['known', 'A system spread across several machines can give you consistent answers, or always answer at all. The network makes you choose.'],
  'condorcet-paradox': ['known', 'A majority prefers A to B, and B to C, and C to A. Every voter was honest and nobody made a mistake.'],
  'easterlin-paradox': ['specialist', 'Richer people are happier than poorer people. Yet a whole country getting richer does not seem to get happier.'],
  'epr-paradox': ['known', 'Measure one particle here and you instantly know something about its partner light-years away. Einstein thought this proved physics was unfinished.'],
  'fermi-paradox': ['landmark', 'The universe is ancient, enormous, and full of ordinary stars much like ours. So where is everybody?'],
  'flp-impossibility': ['specialist', 'A handful of computers cannot be guaranteed to agree on a single value if even one of them might be slow. Not merely hard — impossible.'],
  'friendship-paradox': ['known', 'Your friends have more friends than you do. So do mine. This is true for almost everybody, all at the same time.'],
  'galileos-paradox': ['specialist', 'There are exactly as many square numbers as there are numbers, even though almost every number is not a square.'],
  'giffen-paradox': ['specialist', 'Some things sell more as the price goes up, and the people buying them are behaving perfectly sensibly.'],
  'godels-incompleteness': ['landmark', 'In any system of arithmetic strong enough to be useful, there are true statements it can never prove. Including this one.'],
  'goodharts-law': ['landmark', 'The moment you measure something and start rewarding the number, the number stops telling you what it used to.'],
  'grandfather-paradox': ['landmark', 'Travel back in time and stop your own grandparents from ever meeting. Then who was it that went back?'],
  'halting-problem': ['landmark', 'No program can ever be written that reliably tells you whether another program will finish running. This is not a limit of our cleverness.'],
  'hilberts-hotel': ['landmark', 'A hotel with infinitely many rooms is completely full. At two in the morning, one more guest arrives. The manager finds them a room.'],
  'jevons-paradox': ['known', 'Build an engine that burns less coal and the country ends up burning more coal. This was noticed in 1865 and has not stopped.'],
  'ladder-paradox': ['specialist', 'A ladder too long to fit inside a barn fits inside it — and also does not — depending entirely on who is watching.'],
  'levinthals-paradox': ['specialist', 'A protein has more possible shapes than the universe has atoms, yet it finds the right one in less than a thousandth of a second.'],
  'liar-paradox': ['landmark', '"This sentence is false." Decide whether you are looking at something true or something false, and see how far you get.'],
  'maxwells-demon': ['landmark', 'A tiny creature sorting fast molecules from slow ones appears to make heat flow the wrong way, for free, forever.'],
  'monty-hall-problem': ['landmark', 'Three doors, one car. The host opens a losing door and offers you the swap. Does it make any difference whether you take it?'],
  'moravecs-paradox': ['known', 'A computer beat the world chess champion in 1997. Getting one to pick up a cup it has not seen before is still hard.'],
  'olbers-paradox': ['known', 'If the universe is infinite and full of stars, every line of sight should end on one. So why is the night sky dark?'],
  'paradox-of-choice': ['landmark', 'Put out twenty-four kinds of jam instead of six and fewer people buy any jam at all. More options, fewer decisions.'],
  'paradox-of-the-court': ['known', 'A student agrees to pay for his lessons the day he wins his first case. He never takes a case. His teacher sues him for the money.'],
  'paradox-of-tolerance': ['landmark', 'A society that tolerates absolutely everything, including those working to end it, does not remain tolerant for long.'],
  'peto-paradox': ['specialist', 'A whale has a thousand times more cells than you and lives longer. It should be riddled with cancer. It is not.'],
  'prisoners-dilemma': ['landmark', 'Two people can each do better by betraying the other — and end up worse off than if neither of them had.'],
  'productivity-paradox': ['specialist', 'Computers arrived in every office through the 1970s and 80s. Measured productivity did not move for two decades.'],
  'russells-paradox': ['landmark', 'Consider the set of all sets that do not contain themselves. Does that set contain itself? Either answer is wrong.'],
  'schrodingers-cat': ['landmark', 'A cat sealed in a box, neither alive nor dead until somebody looks. The story was invented to show the idea was absurd.'],
  'ship-of-theseus': ['landmark', 'Replace a ship\'s planks one at a time until not one original piece is left. Is it still the same ship?'],
  'simpsons-paradox': ['landmark', 'A treatment does better for men, and better for women, and worse for people. None of the arithmetic is wrong.'],
  'sleeping-beauty-problem': ['known', 'Woken with no memory of having been woken before, how confident should you be that the coin came up heads?'],
  'sorites-paradox': ['known', 'One grain of sand is not a heap. Adding a single grain never turns a non-heap into a heap. So heaps do not exist.'],
  'st-petersburg-paradox': ['known', 'A coin-flipping game whose average winnings are infinite. How much of your own money would you actually pay to play?'],
  'tragedy-of-the-commons': ['landmark', 'Every herder gains by putting one more animal on the shared field. The field is destroyed by people behaving reasonably.'],
  'twin-paradox': ['landmark', 'One twin flies away and comes home younger than the other. Yet each of them saw the other\'s clock running slow.'],
  'two-envelopes-problem': ['known', 'One envelope holds twice as much money as the other. The arithmetic says swap — then says swap back, forever.'],
  'two-generals-problem': ['known', 'Two armies must attack at the same moment. Any message can be lost, including the one confirming the last one arrived.'],
  'unexpected-hanging-paradox': ['known', 'A prisoner is told he will hang next week, on a day he cannot possibly predict. He proves it cannot happen. It happens.'],
  'zenos-dichotomy': ['landmark', 'To cross a room you must first cross half of it, then half of what is left, and so on without end. So how does anyone move?'],
};

// Fold a hook onto indented lines so the YAML stays readable at 80 columns.
function fold(text, indent = '  ', width = 78) {
  const words = text.split(' ');
  const lines = [];
  let line = indent;
  for (const word of words) {
    if (line.length + word.length + 1 > width && line.trim()) {
      lines.push(line);
      line = indent + word;
    } else {
      line = line.trim() ? `${line} ${word}` : indent + word;
    }
  }
  if (line.trim()) lines.push(line);
  return lines.join('\n');
}

let changed = 0;
const missing = [];

for (const file of fs.readdirSync(PARADOX_DIR).filter((f) => f.endsWith('.md')).sort()) {
  const slug = file.replace(/\.md$/, '');
  const entry = DATA[slug];
  if (!entry) {
    missing.push(slug);
    continue;
  }
  const [renown, hook] = entry;
  if (hook.length > 150) throw new Error(`${slug}: hook is ${hook.length} chars, max 150`);

  const full = path.join(PARADOX_DIR, file);
  let text = fs.readFileSync(full, 'utf8');

  if (!/^hook:/m.test(text)) {
    const eraLine = /^era:/m.exec(text);
    if (!eraLine) throw new Error(`${slug}: no top-level era: line to anchor the hook`);
    text = `${text.slice(0, eraLine.index)}hook: >-\n${fold(hook)}\n${text.slice(eraLine.index)}`;
  }

  if (!/^renown:/m.test(text)) {
    const statusLine = /^status:.*$/m.exec(text);
    if (!statusLine) throw new Error(`${slug}: no top-level status: line to anchor renown`);
    const end = statusLine.index + statusLine[0].length;
    text = `${text.slice(0, end)}\nrenown: ${renown}${text.slice(end)}`;
  }

  fs.writeFileSync(full, text);
  changed += 1;
}

console.log(`updated ${changed} entries`);
if (missing.length) console.log(`no data for: ${missing.join(', ')}`);
