---
title: The Two Generals' Problem
slug: two-generals-problem
alternateNames:
  - The Two Generals' Paradox
  - The Two Armies Problem
  - The Coordinated Attack Problem
summary: >-
  Two allies must agree on a time to attack, but every message between them
  might be lost. No matter how many confirmations they exchange, the last
  messenger is never confirmed — and agreement is provably unreachable.
hook: >-
  Two armies must attack at the same moment. Any message can be lost,
  including the one confirming the last one arrived.
era: twentieth-century
date: 1975 (proved), 1978 (named)
year: 1975
origin: >-
  First proved by Akkoyunlu, Ekanadham and Huber in 1975 as a constraint on
  network communication protocols, and given its military framing and its name
  by Jim Gray in 1978.
people:
  - jim-gray
domains:
  - computer-science
  - logic
types:
  - knowledge
  - computation
nature: impossibility-result
difficulty: intermediate
status: resolved
renown: known
concepts:
  - Common knowledge
  - Infinite regress
  - Unreliable channel
  - Acknowledgement
  - Idempotency
  - Atomic commit
relationships:
  - kind: influences
    to: byzantine-generals-problem
    note: >-
      Same generals, harder enemy. Two Generals asks what you can agree on when
      messages get lost; Byzantine asks what you can agree on when the
      messengers and the generals themselves may lie. Lamport chose the military
      framing knowingly, and the 1982 paper assumes the channel works precisely
      so the difficulty is faults, not loss.
  - kind: predecessor-of
    to: flp-impossibility
    note: >-
      The first proof that a distributed goal can be flatly unreachable rather
      than merely difficult. FLP is the same discovery under weaker assumptions:
      even with a perfectly reliable channel, one crash and unbounded delay are
      enough.
  - kind: contrasts-with
    to: prisoners-dilemma
    note: >-
      Two failures of coordination with opposite causes. The prisoners have
      perfect information and misaligned incentives; the generals have perfectly
      aligned incentives and imperfect information.
  - kind: related
    to: unexpected-hanging-paradox
    note: >-
      Both turn on an unbounded chain of "I know that you know that I know".
      Backward induction over that chain is what makes the hanging surprising
      and the attack impossible.
references:
  - source: akkoyunlu-1975-constraints
    role: primary-source
    note: The original result, stated as a constraint on network protocol design.
  - source: gray-1978-notes-database-operating-systems
    role: paper
    note: Where the two generals get their name, and where the link to two-phase commit is drawn.
  - source: halpern-moses-1990-knowledge
    role: paper
    note: The epistemic-logic account — coordinated action needs common knowledge, and common knowledge is unattainable over a lossy channel.
  - source: kleppmann-2017-ddia
    role: book
    locator: "Chapter 8"
    note: How the result shows up in the design of everyday networked systems.
furtherReading:
  - title: Please stop calling databases CP or AP
    url: https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html
    note: Kleppmann on why network faults are assumptions rather than choices — the same point the two generals make first.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Ari and Bella are best friends. They live on opposite sides of a valley, and
there is a monster in the valley.

They want to meet at the big oak tree, and it only works if they arrive at the
*same time*. If one turns up alone, the monster gets them. So they need to agree
on a time, exactly.

They cannot shout across. They cannot phone. All they can do is write a note and
send it with a runner, and the runner has to cross the valley. Most runners make
it. Some do not.

So Ari writes: **"Meet at the oak at four o'clock."** A runner takes it. Bella
gets it and grins — but then she stops.

*Ari doesn't know I got this.* If Ari isn't sure the note arrived, Ari won't
come. So Bella sends a runner back: **"Got it. Four o'clock. See you there."**

Then Bella stops again.

*What if my note gets lost?* Then Ari never learns that Bella knows, and Ari
stays home, and Bella walks to the oak alone. So Bella needs Ari to confirm the
confirmation.

Ari, receiving Bella's note, is already ahead of her. Ari writes: **"Got your
got-it. Four o'clock."** And hands it to a runner. And then Ari freezes, because
Ari has just realised the same thing.

*What if* this *one gets lost?*

Whoever sends the last note is walking to the oak tree not knowing whether it
arrived. And there is always a last note.

## Understand

This is not a story about nervous friends. It is a theorem, and it was the first
thing anyone proved to be impossible in distributed computing.

Set it up carefully. Two parties want to take an action that only works if they
both take it. The only way they can communicate is a channel that may silently
lose any message. Neither can tell the difference between a message that was
lost and a reply that has not come yet.

**No finite sequence of messages can get them to agree.**

### Why more messages never help

The proof is a piece of ordinary reasoning, and you can do it in your head.

Suppose someone hands you a protocol that works — some fixed exchange of notes
after which both generals attack. Look at the *shortest* such protocol, and
consider its final message.

That last message was either delivered or lost. The sender cannot tell which,
because nothing comes back after it. So the sender must be willing to attack
without knowing. And the receiver, by the same token, must have been willing to
attack before that message arrived — because in the world where it was lost, the
receiver still has to attack, or the plan fails.

But then the last message was not doing any work. Delete it. You now have a
shorter protocol that also works, contradicting the assumption that you started
with the shortest one.

Peel off messages one at a time and you end up with a protocol of *no* messages
at all, in which two people who have never communicated reliably co-ordinate a
surprise attack. That is absurd. Therefore no protocol works.

The chain of reasoning has a shape you can feel: Ari knows the time. Bella knows
the time. Ari knows that Bella knows. Bella knows that Ari knows that Bella
knows. Each acknowledgement buys exactly one more level, and the level after it
is missing. What the generals need is the whole infinite tower at once — the
state logicians call **common knowledge**, where the fact is known, and known to
be known, all the way up without end. Message-passing over a channel that can
drop things adds levels one at a time, and no finite number of steps reaches
infinity.

### What is actually going on

The obstacle is not the *loss* of messages. It is that loss and delay are
indistinguishable. The sender's uncertainty never closes, because silence has
two explanations and no way to choose between them.

Notice also that the problem is not about trust. The generals are loyal, honest,
and want the same thing. That is what makes the result so uncomfortable: perfect
alignment, perfect intentions, and it still cannot be done.

### What people do instead

Real systems do not solve this. They stop trying to, and change the goal.

- **Accept a probability instead of a certainty.** Send twenty acknowledgements.
  If each has a 90% chance of getting through, the chance that all twenty are
  lost is about one in $10^{20}$. You never reach certainty, but you get as
  close as you like, and the cost of the remaining risk becomes smaller than
  every other risk in the system. Every retry loop you have ever written is this
  strategy.
- **Make the action safe to repeat.** If arriving at the oak twice is harmless,
  the whole problem evaporates. This is what idempotency buys, and it is the
  dominant engineering answer.
- **Change who decides.** Add a trusted third party, or a clock. "Attack at four
  unless you hear otherwise" replaces agreement with a default, and the default
  needs no acknowledgement.

None of these is a solution. All of them are better than a solution, because a
solution is not available.

## Examples

**Follow the notes.** Every row below is a real state of belief, and the last
column is why it is not enough.

| Message | Ari believes | Bella believes | Missing |
| --- | --- | --- | --- |
| Ari → Bella: "4 o'clock" | the time | nothing yet | Ari doesn't know it arrived |
| Bella → Ari: "got it" | the time; Bella knows | the time; Ari knows | Bella doesn't know her ack arrived |
| Ari → Bella: "got your got-it" | Bella knows that Ari knows | the time; Ari knows | Ari doesn't know *that* arrived |
| Bella → Ari: "got that too" | … | Ari knows that Bella knows that Ari knows | Bella doesn't know … |

The last column never empties. Each message resolves the previous doubt and
creates a new one at the next level up.

**The coin-flip version, which makes it obvious.** Suppose the two agree in
advance: "we attack if and only if exactly one hundred messages have been
successfully exchanged." Whoever sends message one hundred does not know it
arrived. Whoever would receive it does not know it was sent. Pick any number and
the same hole appears at the top.

**A version you have lived through.** You send a payment on a website. The
spinner turns and the page times out. Did the payment go through?

You are the general. The bank is the other general. The network dropped
something, and you cannot tell whether it dropped your request or the bank's
reply. Press the button again and you might pay twice; do not press it and you
might not have paid at all. There is no amount of staring at the screen that
resolves this — which is why the fix is not on your side. It is that the bank
records a unique key with your request so that a repeat is recognised as the
same payment rather than a second one.

## Explore

**The result is stronger than it first sounds.** The channel in the theorem is
not malicious, not slow, not reordering, and not corrupting. It only loses
messages, and it might lose only one. The generals are honest, have unlimited
time, unlimited message capacity, perfect memory and perfect reasoning. Every
one of those luxuries is granted, and it is still impossible. Weakening any
assumption in the generals' favour does not help; the impossibility rests
entirely on the one thing that was withheld.

**Where the impossibility precisely lives.** Halpern and Moses made this exact
in 1990. Simultaneous coordinated action requires common knowledge of the plan.
Common knowledge can be attained instantly by broadcast in a system where
delivery is guaranteed and timing is known — a bell rung in a room full of
people creates common knowledge in one stroke, because everyone hears it and
everyone sees that everyone hears it. It cannot be attained at all, ever, by any
protocol, in a system where delivery is not guaranteed. The gap between those two
worlds is not a matter of degree. It is a cliff.

This means the impossibility is really about *simultaneity*. Weaken the
requirement from "both act at the same instant" to "both eventually act, whenever
they can" and the problem becomes solvable — which is exactly the weakening real
protocols make.

**Two objections worth taking seriously.**

*"Just keep retrying forever."* This does defeat the problem, but only by
abandoning the finiteness that made it a problem. An infinite protocol reaches
agreement in the limit and never at any particular moment, and a general who
attacks at no particular moment has not attacked. In practice "retry until
acknowledged" is genuinely the right engineering answer, and it works because it
converts the question from "have we agreed?" to "have we agreed *yet*?" — a
different and answerable question.

*"Probabilistically it is fine, so who cares?"* Mostly right, and the reason it
still matters is that it tells you what kind of thing you are buying. You are
buying a probability, not a guarantee, and probabilities compose badly. A
service that is 99.99% sure the payment went through, multiplied across a chain
of five services, is doing worse than it looks. Knowing the guarantee is
unavailable makes you design for the failure instead of assuming it away.

**Contrast with the Byzantine version.** Two Generals gives the generals a
faithless *channel* and honest generals. The Byzantine Generals Problem, seven
years later, gives them a reliable channel and faithless *generals*. It is worth
noticing that the second problem, which sounds far worse, is solvable — with
enough loyal generals. The first is not solvable at all. Lying can be
out-voted. Silence cannot.

## History

**1975.** E. A. Akkoyunlu, K. Ekanadham and R. V. Huber presented "Some
constraints and tradeoffs in the design of network communications" at the Fifth
ACM Symposium on Operating Systems Principles. There are no generals in it. The
setting is protocol design for computer networks, and the result appears as a
constraint: no finite protocol over an unreliable channel can make two parties
mutually certain that a message exchange has completed. It is, so far as the
record shows, the first proved impossibility result in distributed computing.

**1978.** Jim Gray, then at IBM San Jose and already the central figure in
transaction processing, wrote "Notes on Data Base Operating Systems" for a
Springer advanced course. In it he set out the "two generals paradox" in its
familiar military dress, and — this is the part that mattered for the next forty
years of database engineering — connected it directly to the atomic commit
problem. Two-phase commit blocks when the coordinator fails at the wrong moment,
and Gray showed that this is not a defect in the algorithm but the two generals
wearing a different hat.

**1980s.** The result became a standard fixture of distributed-systems courses,
usually taught immediately before the Byzantine Generals Problem, and Yoram
Moses, Danny Dolev and Joseph Halpern developed the epistemic machinery for
saying precisely what was unattainable.

**1990.** Halpern and Moses published "Knowledge and Common Knowledge in a
Distributed Environment" in the *Journal of the ACM*, giving the definitive
formulation. Coordinated simultaneous action requires common knowledge; common
knowledge requires either guaranteed delivery or a shared clock; a system with
neither cannot achieve it. Their paper also names the useful weaker notions —
$\varepsilon$-common knowledge, eventual common knowledge — that describe what
real protocols actually attain.

**A note on the name.** The generals-and-a-valley story is Gray's framing, not
the 1975 authors'. It is a good story, and its success is a small case study in
how much of a result's transmission depends on how it is dressed. The same thing
happened again in 1982 with the Byzantine generals, and Leslie Lamport later
said explicitly that he chose the framing because his earlier, blander name for
the problem had failed to catch on.

## Why It Matters

**It changed what engineers understood a network to be.** Before this result it
was reasonable to think of message loss as an implementation defect: build a
better protocol, add more acknowledgements, and reliability is recovered. The
Two Generals' Problem says the defect is structural. There is a class of
guarantee — mutual certainty about a shared decision — that no amount of protocol
engineering will deliver over a lossy channel. Effort is not the missing
ingredient.

**It explains the blocking behaviour of two-phase commit.** When a distributed
transaction coordinator fails after some participants have voted but before the
decision reaches them, those participants must hold their locks and wait,
possibly forever. Practitioners spent years treating this as a bug to be
engineered away. Gray's contribution was to show it is the two generals, and so
cannot be engineered away — which redirected effort towards three-phase commit,
consensus-based commit, and finally towards avoiding distributed transactions
altogether.

**It is why "exactly-once delivery" is a marketing term.** Over an unreliable
network you can have at-most-once (send it and do not retry, possibly losing it)
or at-least-once (retry until acknowledged, possibly duplicating it). You cannot
have exactly-once as a property of the *channel*. What systems that advertise it
actually provide is at-least-once delivery paired with deduplication at the
receiver — exactly-once *processing*, achieved by making the effect idempotent.
The distinction is not pedantry. It tells you where the responsibility for
correctness sits: at the endpoint, not in the pipe.

**It is a permanent argument against a certain kind of optimism.** Every few
years someone proposes a protocol that closes the gap. The proposals are always
some finite exchange of acknowledgements, and the proof applies to all of them at
once. Recognising the shape of the problem — "am I trying to make two parties
simultaneously certain over a channel that can drop things?" — saves real time.

## Modern Relevance

**The TCP handshake does not solve it, and cannot.** The three-way handshake —
SYN, SYN-ACK, ACK — is often taught as though it establishes that both ends agree
a connection exists. It does not. The final ACK may be lost, leaving the client
believing the connection is open and the server still waiting. TCP is
enormously useful and it is not a counterexample: it makes the failure *rare*
and *detectable* through timeouts and retransmission, which is the achievable
goal. Connection teardown has the same hole, which is why TCP has a `TIME_WAIT`
state and why a socket can be closed on one side and open on the other. The
protocol is a monument to living well with the impossibility.

**Payment systems use idempotency keys rather than trying to solve it.** When
your client sends a charge request, it attaches a unique key it generated. If the
response is lost and the client retries with the same key, the server recognises
it, does not charge again, and returns the original result. Stripe, Adyen,
PayPal and every serious payment API work this way, and it is a direct
architectural consequence of the theorem: since the client can never learn
whether its request arrived, the only safe design is one where asking twice costs
nothing. The industry did not solve the Two Generals' Problem. It made the
problem stop mattering, which is strictly better.

**Message queues and event pipelines.** Kafka, SQS, RabbitMQ and their relatives
all publish an at-least-once delivery guarantee, and the accompanying
documentation always tells consumers to be idempotent. Kafka's "exactly-once
semantics" is real but narrow: it holds for transactions entirely inside Kafka,
where the offset commit and the output write can be made atomic. The moment your
consumer writes to an external system, you are back with the generals and back to
deduplication.

**Distributed databases and sagas.** The reason microservice architectures
favour the saga pattern — a sequence of local transactions with compensating
actions — over distributed two-phase commit is exactly Gray's observation.
Compensation is a way of tolerating the uncertainty rather than eliminating it.

**Webhooks and API callbacks.** Every webhook provider retries on failure and
every webhook consumer is instructed to handle duplicates. GitHub, Slack and
Stripe all deliver a unique event ID for this purpose. The advice is universal
because the constraint is.

**Human protocols too.** "Please confirm receipt" at the end of an email is the
first acknowledgement. Wondering whether your confirmation was read is the
second. Air traffic control's readback-hearback procedure — controller instructs,
pilot repeats back, controller confirms the readback — is a deliberate,
regulated three-message protocol that stops at exactly the point where the
regress becomes unhelpful and substitutes standing procedure for the missing
levels.

## Deep Dive

### The model

Two processes, $A$ and $B$, each with an initial value and a decision to make:
attack or retreat. They communicate over a channel that may drop any message.
The channel does not reorder, duplicate or corrupt, and processes never fail;
these luxuries are granted deliberately to make the impossibility as sharp as
possible.

A protocol is required to satisfy:

- **Agreement.** $A$ attacks if and only if $B$ attacks.
- **Validity (non-triviality).** If both would prefer to attack and all messages
  are delivered, both attack. Without this, "always retreat" is a protocol.
- **Termination.** Both decide after finitely many messages.

### The proof

Suppose a correct protocol $P$ exists. Among all correct protocols, and among
all executions of $P$ in which all messages are delivered, take the execution
with the fewest messages, $m$. By validity $m \geq 1$: with no communication at
all, $A$'s decision is independent of $B$'s input, and an adversary picks inputs
that break agreement.

Consider the final message, number $m$, sent by (say) $A$. Compare two runs:

- **Run 1.** All $m$ messages are delivered.
- **Run 2.** The first $m-1$ messages are delivered; message $m$ is lost.

$A$ cannot distinguish Run 1 from Run 2 — the two runs are identical from $A$'s
point of view, since $A$ sends message $m$ and receives nothing afterwards in
either. So $A$ makes the same decision in both. In Run 1, $A$ attacks. Therefore
$A$ attacks in Run 2.

$B$ cannot distinguish Run 2 from any run in which message $m$ was never sent —
$B$'s received sequence is the same $m-1$ messages either way. By agreement in
Run 2, $B$ must also attack. So $B$ attacks having received only $m-1$ messages.
And in Run 1, $B$ attacks as well. So $B$'s decision does not depend on message
$m$ at all.

Then $P$ with message $m$ deleted is also correct, and uses $m-1$ messages,
contradicting minimality. By induction the protocol collapses to zero messages,
which validity forbids. $\square$

The argument is an *indistinguishability* proof, and it is the template for
almost every impossibility result in the field: exhibit two runs that some
process cannot tell apart, and show that the specification demands different
behaviour in each.

### The epistemic statement

Write $K_A \varphi$ for "$A$ knows $\varphi$". Define the everyone-knows operator
over the group $G = \{A, B\}$:

$$E_G \varphi = K_A \varphi \wedge K_B \varphi, \qquad E_G^{1}\varphi = E_G\varphi, \qquad E_G^{k+1}\varphi = E_G(E_G^{k}\varphi)$$

Common knowledge is the conjunction of the whole tower:

$$C_G \varphi = \bigwedge_{k \geq 1} E_G^{k} \varphi$$

Equivalently, $C_G\varphi$ is the greatest fixed point of $X \leftrightarrow
E_G(\varphi \wedge X)$ — it is self-sustaining in a way no finite conjunction is.

Halpern and Moses's theorem has two halves, and both matter:

1. **Simultaneous coordinated action requires common knowledge.** If a protocol
   guarantees that $A$ and $B$ perform an action at the same instant, then at
   that instant $C_G(\text{the action is being performed})$ holds. Anything less
   leaves a level at which one party is acting on an unverified assumption about
   the other.
2. **Common knowledge is unattainable in a system where communication is not
   guaranteed.** Each successfully delivered and acknowledged message raises the
   depth of nested knowledge by exactly one. Formally, in any run of any protocol
   over an unreliable channel, there is a finite $k$ with $E_G^{k}\varphi$ true
   and $E_G^{k+1}\varphi$ false. The tower is always exactly one storey short.

Their paper also shows that this is not a peculiarity of lossy channels.
Common knowledge is equally unattainable in a system with reliable delivery but
*unbounded, unknown* message delay, because the recipient's clock reading at the
moment of delivery is not something the sender can know. Perfectly reliable
asynchronous systems cannot achieve simultaneity either — a hint of what FLP
would prove in 1985.

### The useful weakenings

Since common knowledge is out of reach, the literature defines what is in reach:

- **$\varepsilon$-common knowledge.** Every level of the tower holds with
  probability at least $1 - \varepsilon$. Attained by repeated acknowledgement,
  and this is what practical retry protocols deliver.
- **Eventual common knowledge.** Every party will eventually know, without any
  bound on when. Sufficient for *eventual* coordination, useless for simultaneous
  coordination.
- **Timestamped common knowledge.** With synchronised clocks and a known upper
  bound on delivery time, silence becomes informative — "no news by 3:59 means it
  went through" — and true common knowledge becomes attainable. This is the
  theoretical justification for synchronous protocols, and for why systems like
  Google's Spanner invest heavily in bounded-uncertainty clocks.

The engineering translation is short. If your correctness argument requires two
machines to be simultaneously certain of the same fact, the argument is wrong,
and no protocol will rescue it. Rewrite the requirement so that acting twice, or
acting slightly out of step, is harmless.
