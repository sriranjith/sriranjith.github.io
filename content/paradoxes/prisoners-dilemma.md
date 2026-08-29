---
title: The Prisoner's Dilemma
slug: prisoners-dilemma
alternateNames:
  - The Flood–Dresher game
  - Two-person dilemma
summary: >-
  Two suspects are questioned in separate rooms. Each is offered a deal: betray
  the other and walk free. Each reasons impeccably, each betrays, and both end up
  worse off than if neither had said a word.
hook: >-
  Two people can each do better by betraying the other — and end up worse off
  than if neither of them had.
era: twentieth-century
date: 1950
year: 1950
origin: >-
  Devised as a payoff table by Merrill Flood and Melvin Dresher at the RAND
  Corporation in January 1950, and dressed in the story of two interrogated
  prisoners a few months later by Albert Tucker of Princeton.
people:
  - merrill-flood
  - melvin-dresher
  - albert-tucker
  - john-nash
  - robert-axelrod
domains:
  - economics
  - society
  - psychology
types:
  - decision-making
  - aggregation
nature: counterintuitive-result
difficulty: beginner
status: resolved
renown: landmark
concepts:
  - Dominant strategy
  - Nash equilibrium
  - Pareto efficiency
  - Collective action
  - Reciprocity
  - Shadow of the future
relationships:
  - kind: influences
    to: tragedy-of-the-commons
    note: >-
      The commons is the Prisoner's Dilemma with a hundred players and a
      pasture. Each herder's extra animal is a defection that pays the herder in
      full and charges the cost to everybody, so the dominant strategy argument
      runs unchanged — only the accounting gets bigger.
  - kind: related
    to: arrows-impossibility-theorem
    note: >-
      Both show individually impeccable inputs producing a collectively
      unacceptable output. Arrow's obstruction is in the aggregation rule; the
      dilemma's is in the incentives, with no rule to blame.
  - kind: contrasts-with
    to: byzantine-generals-problem
    note: >-
      Two failures of coordination with opposite causes. The generals cannot
      agree because messages may be lost or forged; the prisoners cannot
      cooperate although communication is perfect and both know exactly what is
      going on.
references:
  - source: flood-1958-experimental-games
    role: primary-source
    note: The 1950 RAND experiment, with the players' own commentary as they played.
  - source: tucker-1950-two-person-dilemma
    role: primary-source
    note: Where the prisoners, and the name, come from.
  - source: nash-1950-equilibrium-points
    role: paper
    note: The equilibrium concept that makes mutual defection a prediction.
  - source: axelrod-1984-evolution-of-cooperation
    role: book
    note: The tournaments, TIT FOR TAT, and the mathematics of repetition.
  - source: axelrod-hamilton-1981-evolution-of-cooperation
    role: paper
  - source: poundstone-1992-prisoners-dilemma
    role: book
    note: The history of RAND, the bomb, and what the dilemma was invented to model.
  - source: sep-prisoners-dilemma
    role: encyclopedia
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Two people are arrested. The police have enough evidence to convict them of
something small, but not of the big thing they are actually suspected of.

So the two are put in separate rooms, where they cannot talk, and each is made
exactly the same offer:

> "Blame the other one, and you walk out today. Your friend gets three years."
>
> "Say nothing, and if your friend blames you, *you* get the three years and
> they walk."
>
> "If you both blame each other, you both get two years."
>
> "And if you both keep quiet, I can only make the small charge stick. One year
> each."

Think it through from inside one of the rooms.

If the other one keeps quiet, you should talk — you go free instead of serving a
year. If the other one talks, you should also talk — two years instead of three.

Whatever they do, talking is better for you. So you talk. And they are in an
identical room, doing identical arithmetic, so they talk too.

You each get two years.

If you had both simply kept your mouths shut, you would each have got one.

## Understand

Nobody made a mistake. That is the whole point.

Each prisoner faced a genuine choice and reasoned about it correctly. Talking
really is better than staying quiet — not on average, not usually, but in *every
single case*, no matter what the other person does. In game theory this is called
a **dominant strategy**: an option that beats the alternative under every
possible circumstance you might be in.

Ordinarily, if an option is better in every circumstance, taking it is simply
what "being sensible" means. Here, two people both being sensible produces an
outcome that is worse for both of them than the outcome they could have reached
by both being less sensible.

That is the paradox, and it is a real one. It is not a trick of the wording, and
it does not go away when the prisoners get smarter. It gets worse. Two perfect
reasoners land on two years each with complete confidence.

### Where the loss comes from

The cost of your betrayal does not land on you. It lands on the other person.

When you decide to talk, you gain one year off your own sentence and you add one
year to theirs. You bank the benefit; they pay the bill. Since you are choosing,
and the bill is not addressed to you, the choice is easy.

Both of you do this at once. Both of you collect a small private gain and hand
over a larger cost. Add the two transactions together and the pair is worse off.

**This is the engine of every situation in this family.** Any time an action pays
the person who takes it and charges the cost to everyone, the individually
correct choice and the collectively correct choice come apart.

### What would fix it

Nothing available inside the two rooms.

Promising to keep quiet does not help: a promise costs nothing to break and there
is no way to be caught. Caring about the other person's sentence helps only if
you care about it *at least as much as your own* — which is to say, only if you
are playing a different game. Being clever does not help; the cleverer you are,
the faster you get to two years.

What does help is **a reason to expect the situation to recur**. If you and the
other person will face this again tomorrow, and the day after, then betrayal
stops being free — it buys you a year today and costs you every future year of
cooperation. That single change turns the dilemma from a trap into a solvable
problem, and it is the reason cooperation exists in the world at all.

## Examples

**The sentences, as a table.** Rows are what you do, columns are what the other
prisoner does. Each cell is (your years, their years) — smaller is better.

| | They stay quiet | They talk |
| --- | --- | --- |
| **You stay quiet** | 1, 1 | 3, 0 |
| **You talk** | 0, 3 | **2, 2** |

Read down the "They stay quiet" column: 0 years beats 1, so talk. Read down the
"They talk" column: 2 years beats 3, so talk. Talking wins both columns. The
bolded cell is where two rational players end up, and it is the only cell that
both players would happily trade away.

**The standard payoff version.** Game theorists usually write it with points
rather than sentences, so that bigger is better. These are the numbers Robert
Axelrod used in his tournaments:

| | They cooperate | They defect |
| --- | --- | --- |
| **You cooperate** | 3, 3 | 0, 5 |
| **You defect** | 5, 0 | **1, 1** |

The four payoffs have standard names: **T** = 5 for the temptation to defect on a
cooperator, **R** = 3 for the reward of mutual cooperation, **P** = 1 for the
punishment of mutual defection, **S** = 0 for the sucker's payoff. A game is a
Prisoner's Dilemma exactly when

- $T > R > P > S$ — defecting is better whatever the other player does, and
- $2R > T + S$ — taking turns exploiting each other is worse than cooperating.

With 5, 3, 1, 0: the first condition holds, and the second holds because
$6 > 5$. Both conditions matter. Drop the second and the players should
alternate rather than cooperate, which is a different problem entirely.

**Three real situations with this exact shape.**

| Situation | Cooperate | Defect | Why both defect |
| --- | --- | --- | --- |
| Two countries in an arms race | Disarm | Build weapons | Whatever the other does, being armed is safer for you. Both arm, both are poorer and no safer. |
| Two firms setting prices | Hold price | Undercut | Undercutting wins customers whichever way the rival moves. Both cut, both earn less. |
| Two cyclists in a breakaway | Take a turn in front | Sit in the slipstream | Sitting in saves energy either way. Both sit up, the pack catches them. |

**And one that looks similar but is not.** Two drivers approaching a one-lane
bridge from opposite ends is *not* a Prisoner's Dilemma. There, what you should
do depends entirely on what the other does — if they go, you should wait. That
game has two equilibria and its problem is coordination, not incentive. The
Prisoner's Dilemma is harder precisely because knowing what the other player will
do changes nothing about what you should do.

## Explore

**Is defection actually rational?** Almost all game theorists say yes, and the
argument is short: the dominance argument uses no assumption about the other
player at all. But there is a persistent minority tradition arguing that a theory
of rationality that reliably delivers worse outcomes to everyone who follows it
has something wrong with it. David Gauthier argued for "constrained
maximisation", where a rational agent adopts a *disposition* to cooperate with
others who share it, on the grounds that agents with that disposition do better.
Douglas Hofstadter's "superrationality" proposes that identical reasoners facing
an identical problem should recognise they will reach the same answer, and pick
the better of the two identical answers. Neither view is standard. Both are
attempts to relocate the choice from the act to the character.

**Is it even the right model?** The dilemma became famous partly because it
seemed to capture the Cold War, and RAND was in the business of modelling the
Cold War. Poundstone's history documents how heavily that framing shaped the
dilemma's early reception. But a nuclear standoff is repeated, observable and
communicative, which are exactly the three features that dissolve the one-shot
dilemma. Whether the model illuminated the arms race or flattered a conclusion
already reached is still argued about.

**The uncomfortable fact about finite repetition.** Repetition rescues
cooperation only if the players do not know when the game ends. Suppose you will
play exactly 100 rounds. On round 100 there is no future to protect, so both
defect. Both know this, so round 99 has no future either, and both defect. The
reasoning unravels backwards to round 1. Backward induction says: defect
throughout. Real people, including the very first players in 1950, do nothing of
the kind. Whether that makes the people irrational or the argument inapplicable
is a genuinely open question in the philosophy of game theory — and it is the
reason the entry for the one-shot game is marked resolved while the argument
about finite iteration is not.

**One honest caveat about Axelrod's tournaments.** TIT FOR TAT won two round-robin
tournaments against the programs that happened to be submitted. It is not
optimal, and it is not unbeatable. It is exploitable by noise: a single mistaken
defection between two TIT FOR TAT players locks them into alternating retaliation
forever. Later work found strategies that beat it in modified settings — most
strikingly the 2012 "zero-determinant" strategies of William Press and Freeman
Dyson, which let a player unilaterally fix the relationship between the two
scores and extort a naive opponent. The lesson of the tournaments is not that TIT
FOR TAT is the answer, but that being nice, provokable, forgiving and legible was
enough to beat everything cleverer that entered.

## Deep Dive

### The one-shot game

A two-player Prisoner's Dilemma is a normal-form game with strategy set
$\{C, D\}$ for each player and payoffs satisfying $T > R > P > S$ and
$2R > T + S$.

For player 1, holding player 2's choice fixed:

$$u_1(D, C) = T > R = u_1(C, C) \qquad u_1(D, D) = P > S = u_1(C, D)$$

$D$ **strictly dominates** $C$. The game is symmetric, so the same holds for
player 2, and $(D, D)$ is the unique Nash equilibrium — indeed the unique
outcome surviving iterated elimination of strictly dominated strategies, and
therefore the unique rationalisable outcome.

$(D,D)$ yields $(P, P)$. But $(C,C)$ yields $(R,R)$ with $R > P$, so $(D,D)$ is
**Pareto-dominated**: there exists another outcome strictly better for every
player. The Prisoner's Dilemma is the canonical demonstration that Nash
equilibrium and Pareto efficiency are independent properties. Nothing in the
definition of equilibrium promises efficiency; the first welfare theorem's
guarantee of efficiency in competitive markets depends on the *absence* of
exactly the externality this game contains.

### Repetition and the discount factor

Let the game repeat, with a probability $\delta \in (0,1)$ that another round
follows the current one — equivalently, a discount factor on future payoffs.
Axelrod calls $\delta$ the **shadow of the future**.

Consider the **grim trigger** strategy: cooperate until the opponent defects,
then defect forever. Against an opponent playing grim trigger, cooperating
forever pays

$$R + \delta R + \delta^2 R + \cdots = \frac{R}{1-\delta}$$

while defecting once and being punished thereafter pays

$$T + \delta P + \delta^2 P + \cdots = T + \frac{\delta P}{1 - \delta}$$

Cooperation is sustainable as a subgame-perfect equilibrium exactly when

$$\frac{R}{1-\delta} \ \ge\ T + \frac{\delta P}{1-\delta} \quad\Longleftrightarrow\quad \delta \ \ge\ \frac{T - R}{T - P}$$

With Axelrod's numbers $T=5$, $R=3$, $P=1$, this gives $\delta \ge 2/4 = 0.5$.
If the game is more likely than not to continue, cooperation is rational. If it
is more likely than not to end, it is not. **Cooperation between self-interested
agents is not a matter of character; it is a matter of the probability of meeting
again.**

The same condition for TIT FOR TAT against a defector requires the identical
threshold, since TIT FOR TAT's punishment is one round of $P$ followed by a
return to $R$ — a weaker threat, and correspondingly less robust.

### The folk theorem

The trigger construction generalises. Let $v_i$ be player $i$'s minmax value —
the worst payoff the opponents can force on $i$ if $i$ best-responds. In the
Prisoner's Dilemma, $v_i = P$.

The **folk theorem** (Friedman 1971 for Nash equilibria; Fudenberg and Maskin
1986 for subgame-perfect equilibria) states that for any feasible payoff vector
$u$ with $u_i > v_i$ for all $i$, there exists $\bar\delta < 1$ such that for
every $\delta \in (\bar\delta, 1)$, $u$ is achievable as the average payoff of a
subgame-perfect equilibrium of the infinitely repeated game.

Read carefully, this is a warning as much as a reassurance. Cooperation is
supportable among patient self-interested players — and so is almost everything
else. Any split of the surplus that leaves both players above $P$ is an
equilibrium: the mutually generous one, the grossly unequal one, and elaborate
schedules of alternating exploitation. Repeated-game theory predicts that
cooperation is *possible*, not that it will happen, and it offers no principled
way to say which of the infinitely many equilibria a real pair will land on.
Equilibrium selection, not equilibrium existence, is where the real content of
the repeated game lies.

Finite repetition is different again. With a commonly known final round $N$,
backward induction from the unique equilibrium of the last stage game yields
defection at every round. The argument, set out by R. Duncan Luce and Howard
Raiffa in 1957, is airtight given its premises; the standard escapes are
incomplete information about the opponent's
type (Kreps, Milgrom, Roberts and Wilson, 1982, where a small probability that
the opponent is a TIT FOR TAT automaton restores cooperation for most of a long
game) or bounded rationality in the form of finite automata.

### N players

With $n$ players, let each choose $C$ or $D$, and let a player's payoff depend on
their own action and the number $k$ of others cooperating. The game is an
**n-player Prisoner's Dilemma** when defecting pays more than cooperating for
every value of $k$, while every player prefers all-cooperate to all-defect.

Two things get worse as $n$ grows. Each defector's cost is now spread across
$n-1$ others, so the private gain to defection stays constant while the harm
becomes diffuse and hard to attribute. And targeted retaliation becomes
impossible: punishing a defector in a large anonymous group means harming
everyone, including cooperators. This is precisely why the reciprocity result
does not simply scale up, and why the collective action literature — Mancur
Olson's 1965 *The Logic of Collective Action*, and Elinor Ostrom's fieldwork —
concentrates on the institutional machinery of monitoring and graduated
sanctions rather than on strategies.

## History

**January 1950, Santa Monica.** Merrill Flood and Melvin Dresher, mathematicians
at the RAND Corporation, were probing an implication of John Nash's brand-new
equilibrium concept. They wanted to know whether real people would play the
equilibrium of a game where the equilibrium was jointly bad. They constructed a
payoff table with the required structure and recruited two colleagues — the
economist Armen Alchian of UCLA and the RAND mathematician John Williams — to
play it one hundred times, writing down their thoughts after each round.

The players did not converge on mutual defection. They cooperated in roughly
sixty of the hundred rounds, with long cooperative stretches broken by
retaliation and repair. Williams's written commentary shows him deliberately
trying to teach Alchian to cooperate, and grumbling when Alchian defected. Flood
published the whole record, commentary included, in *Management Science* in 1958.
It remains one of the most vivid documents in experimental economics: the very
first run of the very first Prisoner's Dilemma produced far more cooperation than
the theory predicted, and the theory has been chasing that observation ever
since.

**May 1950, Stanford.** Albert Tucker, Nash's doctoral adviser at Princeton, was
visiting Stanford and had to explain the Flood–Dresher game to an audience of
psychologists with no game theory. He invented the two-prisoners story on the
spot. The illustration completely outran the mathematics: the payoff structure
had existed for months, but it is Tucker's interrogation room that made the idea
transmissible, and Tucker's name for it that stuck.

**1965.** Anatol Rapoport and Albert Chammah published *Prisoner's Dilemma*, the
first large body of laboratory data on repeated play, establishing the
experimental programme that still runs.

**1980.** Robert Axelrod, a political scientist at Michigan, wrote to game
theorists, economists, psychologists and computer scientists inviting them to
submit programs to play the iterated dilemma round-robin. Fourteen entries came
in for the first tournament. The winner was the shortest program submitted:
Rapoport's TIT FOR TAT, which cooperates on the first move and thereafter copies
whatever the opponent did last. Axelrod published the results, announced a second
tournament, and received sixty-three entries from six countries — every one of
them written by someone who knew TIT FOR TAT had won and was trying to beat it.
TIT FOR TAT won again.

**1981.** Axelrod and the evolutionary biologist W. D. Hamilton published "The
Evolution of Cooperation" in *Science*, showing that reciprocity can be
evolutionarily stable and can invade a population of defectors if reciprocators
arrive in small clusters. The paper moved the dilemma out of strategy studies and
into biology, where it now underpins the theory of reciprocal altruism.

**1984.** Axelrod's book of the same name reached a general readership and made
the dilemma one of the few pieces of formal social science that most educated
people can state.

## Why It Matters

The Prisoner's Dilemma did one specific thing, and it is worth naming precisely:
**it separated "everyone acting rationally" from "a good outcome", in a way that
cannot be argued with.**

Before it, an intuition ran through a great deal of economic and political
thinking that if each person pursues their interest competently, the collective
result will be at worst acceptable. Adam Smith's invisible hand is the famous
version, and it is true — under conditions that include the absence of the exact
externality this game is built from. The dilemma supplies a two-line
counterexample. That is why it appears in the first weeks of economics, political
science, biology, philosophy and computer science courses alike.

The concrete consequences are visible in how institutions are now designed.
Antitrust enforcement assumes that competitors face a dilemma over price-fixing
and would escape it if allowed to communicate — which is why agreements between
competitors, not the prices themselves, are what the law prohibits. Leniency
programmes in cartel prosecution are deliberately engineered dilemmas: the first
conspirator to confess goes free, so every conspirator must reason from inside a
separate room. Arms control treaties are built around verification, because
verification is what converts an unobservable one-shot game into an observable
repeated one. Climate agreements struggle exactly where those mechanisms are
weakest: the payoffs are dispersed, the monitoring is imperfect and the players
cannot be punished.

The second contribution is the positive one, and it is Axelrod's. Cooperation
does not require morality, altruism, foresight, contracts or even a nervous
system. It requires that the participants meet again with sufficient probability,
can tell each other apart, and can respond to what happened last time. That is a
short and checkable list, and it explains cooperation in bacterial colonies,
cleaner fish, medieval merchant guilds, and the informal truces that formed
across the trenches in 1914 — all of them cases where the theory says cooperation
should be impossible and it happened anyway, because the game was repeated.

## Modern Relevance

**Climate and emissions.** Every country gains from unilateral emission, and the
cost is shared globally. The structure is exact. What is unusual, and what makes
the climate case harder than the textbook, is that the "future rounds" that
normally discipline defection are decades long and the punishment mechanisms are
weak. Most treaty design since Kyoto has been an attempt to install the missing
repetition machinery: pledge-and-review cycles, transparency requirements, border
carbon adjustments.

**Antibiotics and vaccination.** Prescribing an antibiotic benefits the patient
in front of you and contributes a fraction of a percent to resistance shared by
everyone. Declining a vaccine borrows the protection produced by others'
compliance. Neither is irrational for the individual; both fail in aggregate.

**Doping in sport.** Doping pays whether or not rivals dope, so testing regimes
exist to change the payoffs rather than to appeal to sportsmanship. It is one of
the clearest real-world cases where the only workable fix was to make the
dominant strategy expensive.

**Multi-agent AI systems.** As autonomous agents negotiate, bid and trade with
one another, their designers face the dilemma directly. An agent that always
defects is exploitable by coordinated opponents; an agent that always cooperates
is exploitable by anyone. Reinforcement-learning agents trained in repeated
social dilemmas reliably rediscover reciprocity, and just as reliably rediscover
extortion when the environment lets them. Zero-determinant strategies are a live
concern in algorithmic pricing, where independently trained pricing agents have
been observed sustaining supracompetitive prices without any communication —
tacit collusion arrived at by two machines simply noticing that the game repeats.

**Open source and public goods.** Every user of a shared library benefits from
maintenance; almost none contribute. The dilemma predicts under-provision, and
under-provision is what the ecosystem has. The partial fixes that work in
practice — corporate sponsorship, foundations, reputational credit for
contributors — are all ways of making the contribution visible and repeated.
