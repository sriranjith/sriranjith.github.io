// Registry of interactive demonstrations.
//
// A paradox opts in with `interactive: monty-hall` in its front matter.
// Nothing loads on pages that do not ask for one.
//
// Adding a demo: write the component, add one entry here. That is the whole
// contract — validation and the admin dropdown both read from this list.

export const INTERACTIVE = {
  'monty-hall': {
    label: 'Monty Hall simulator',
    description: 'Play the game and watch the win rate converge on 2/3.',
  },
  'birthday-problem': {
    label: 'Birthday probability calculator',
    description: 'Move a slider over group size and watch the collision probability.',
  },
  'zeno-dichotomy': {
    label: 'Convergent series visualiser',
    description: 'Add the halves one at a time and watch the total approach 1.',
  },
  'simpsons-paradox': {
    label: 'Simpson’s paradox explorer',
    description: 'Split and recombine two groups to watch the trend reverse.',
  },
};

export const INTERACTIVE_IDS = Object.keys(INTERACTIVE);
