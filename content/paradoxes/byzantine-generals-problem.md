---
title: The Byzantine Generals Problem
slug: byzantine-generals-problem
alternateNames:
  - Byzantine Agreement
  - Byzantine Fault Tolerance
  - The Byzantine Generals' Problem
summary: >-
  Loyal generals must agree on a plan while traitors among them send different
  stories to different people. With unsigned messages, agreement is impossible
  unless more than two-thirds are loyal — and signatures change the bound
  entirely.
era: twentieth-century
date: "1982"
year: 1982
origin: >-
  Named and popularised by Leslie Lamport, Robert Shostak and Marshall Pease at
  SRI International, generalising their 1980 result on agreement with faults,
  which arose from building fault-tolerant flight-control computers for NASA.
people:
  - leslie-lamport
  - robert-shostak
  - marshall-pease
domains:
  - computer-science
  - logic
  - mathematics
types:
  - knowledge
  - computation
  - aggregation
nature: impossibility-result
difficulty: advanced
status: resolved
concepts:
  - Byzantine fault
  - Agreement and validity
  - The 3f+1 bound
  - Oral versus signed messages
  - Interactive consistency
  - Replicated state machines
relationships:
  - kind: predecessor-of
    to: flp-impossibility
    note: >-
      Byzantine agreement is consensus with malicious faults in a synchronous
      system, and it is solvable. FLP keeps the participants honest, removes only
      the timing assumptions, and shows that even then deterministic consensus
      cannot be guaranteed. Read together, they say that synchrony, not honesty,
      is the scarce resource.
  - kind: related
    to: arrows-impossibility-theorem
    note: >-
      Two theorems about turning many opinions into one decision. Arrow rules out
      a fair aggregation rule even with perfectly honest voters; Lamport rules
      out any rule at all once enough voters lie.
  - kind: contrasts-with
    to: cap-theorem
    note: >-
      Byzantine fault tolerance assumes adversaries but a working network; CAP
      assumes an honest network that may be cut in two. Systems that need both
      guarantees must pay for them separately.
references:
  - source: lamport-shostak-pease-1982-byzantine
    role: primary-source
    locator: "§4, §6"
    note: The impossibility for three generals, the general 3f+1 bound, and both the OM and SM algorithms.
  - source: pease-shostak-lamport-1980-agreement
    role: paper
    note: The original technical result, two years before the memorable retelling.
  - source: castro-liskov-1999-pbft
    role: paper
    note: The algorithm that made Byzantine agreement cheap enough to deploy.
  - source: kleppmann-2017-ddia
    role: book
    locator: "Chapter 8"
    note: Where Byzantine assumptions are and are not worth paying for in ordinary systems.
furtherReading:
  - title: "Bitcoin: A Peer-to-Peer Electronic Cash System"
    url: https://bitcoin.org/bitcoin.pdf
    note: Nakamoto's 2008 paper, which sidesteps the classical bound by replacing a known roster of generals with proof of work.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Three armies are camped around a city, one on each side. Each is led by a
general. They can only talk by sending messengers around the city walls, and the
messengers always get through.

Tonight they must all do the same thing. If all three attack, they win. If all
three retreat, they live. If two attack and one stays home, the two are
slaughtered.

Two of these generals are loyal. One is a traitor, and nobody knows which.

Here is what a traitor can do. It is not that he refuses to speak. It is much
nastier than that. He tells **General A** that he is attacking, and in the very
same hour he tells **General B** that he is retreating.

Now think about what General A sees. She votes attack. The traitor tells her
attack. General B, being honest, tells her retreat. Two votes for attack, one
for retreat.

General B sees the mirror image. He votes retreat, the traitor tells him
retreat, and General A honestly says attack. Two votes for retreat, one for
attack.

Both generals were honest. Both counted carefully. Both did the sensible thing.
A attacks. B stays home. A's army is destroyed.

And now try to fix it. Have them compare notes — A tells B "the third general
told me attack", B tells A "he told me retreat". They now know a liar is in the
room. Neither can work out which of the other two it is.

## Understand

The Two Generals' Problem is about messages that get lost. This one grants you a
perfect channel: every message is delivered, promptly, unaltered. The difficulty
moves inside the participants.

A **Byzantine fault** is the worst thing a component can do. Not crash — crashing
is honest, and easy to handle. A Byzantine component keeps running and behaves
arbitrarily: it sends contradictory information to different peers, lies about
what it received, delays selectively, or does whatever a clever adversary who
knows your protocol would do. The name comes from Lamport's fable, but the
concept covers everything from a cosmic ray flipping a bit in a sensor to a
compromised server operated by an attacker.

The question is: **can the honest participants still reach a common decision?**

### The answer

Yes, but only if there are enough of them.

> With plain unsigned messages, agreement in the presence of $f$ traitors
> requires more than $3f$ generals. Three generals cannot handle one traitor.
> Four can.

That is the 3f+1 bound, and it is the central fact of the field. To survive one
liar you need four participants; two liars, seven; three liars, ten. You are
paying roughly three honest participants for every dishonest one you want to
tolerate, and the reason is worth understanding, because it is not a matter of
counting votes.

### Why three is not enough

The intuition is a symmetry argument, and it is the whole result in miniature.

Take the three-general scenario from above, where the traitor tells different
stories to A and B. Now take a *different* scenario: the commander is the
traitor, sending "attack" to A and "retreat" to B, while the third general is
loyal and faithfully reports what he was told.

From General A's position, these two situations produce *exactly the same
incoming messages*. Identical. There is no observation A can make, no extra
round of questioning, no cleverness, that distinguishes them — but the two
situations require A to behave differently to satisfy the specification. Since A
cannot tell them apart, A cannot always be right.

The general bound comes from the same argument scaled up. Split the participants
into three groups of $f$ and show that a system of $3f$ can simulate a system of
three, so if three cannot do it with one traitor, $3f$ cannot do it with $f$.

### Why signatures change everything

Now give every general a pen and an unforgeable signature, and require every
message to be signed and every relayed message to carry the whole chain of
signatures.

The traitor's power collapses. If he tells A "attack" and B "retreat", he has
written and signed two contradictory orders. A forwards her signed copy to B, B
forwards his to A, and now both hold proof, in the traitor's own hand, that he
lied. A liar who can be *caught* is no longer a liar who can divide.

With signed messages, agreement with $f$ traitors is achievable with as few as
$f + 2$ generals. The bound drops from roughly $3f$ to roughly $f$. The entire
gap between the two bounds is the cost of not being able to prove what somebody
said.

This is one of the most consequential facts in distributed systems, and it is
why cryptography is not merely a security feature bolted onto a protocol. It
changes what the protocol can achieve at all.

### What the theorem does and does not require

The classical result assumes a **synchronous** system: there is a known upper
bound on message delivery time, so silence is informative. A general who says
nothing by the deadline is detected as faulty and treated as having voted a
default. Remove that assumption and the problem gets harder in a completely
different direction — which is the FLP result of 1985.

It also assumes you know who the participants are. A fixed roster of generals is
what makes "more than two-thirds" a meaningful ratio. Open, permissionless
systems where anyone can join have to reconstruct that guarantee from something
else, which is the problem Bitcoin was designed to solve.

## Examples

**Four generals, one traitor: the fix works.** Commander $C$ sends an order to
lieutenants $L_1$, $L_2$, $L_3$. Each lieutenant then tells the other two what
he received. Each lieutenant now has three values — one direct, two relayed — and
takes the majority.

Case one: the commander is loyal and sends "attack". $L_1$ and $L_2$ are loyal;
$L_3$ is the traitor and relays "retreat". $L_1$ holds {attack (direct), attack
(from $L_2$), retreat (from $L_3$)} and takes attack. $L_2$ likewise. Both loyal
lieutenants obey the loyal commander.

Case two: the commander is the traitor and sends "attack" to $L_1$, "retreat" to
$L_2$, "attack" to $L_3$. $L_1$ holds {attack, retreat, attack} → attack. $L_2$
holds {retreat, attack, attack} → attack. $L_3$ holds {attack, attack, retreat}
→ attack. All three loyal lieutenants agree, on a value that does not matter,
because the commander was the traitor and no promise was made about honouring
his order.

Both requirements hold. The third lieutenant is what breaks the symmetry that
defeated three generals.

**How Byzantine faults look in real hardware.** These are documented cases, not
hypotheticals.

| Fault | What made it Byzantine |
| --- | --- |
| A stuck sensor reading a plausible-but-wrong altitude | It does not fail silently; it confidently reports a value other sensors contradict. |
| A network card with a failing transceiver | Corrupts some packets and not others, so different receivers see different data from one send. |
| A partially failed disk controller | Returns correct data to some reads and stale data to others. |
| A compromised server in a replicated cluster | Behaves correctly to auditors and incorrectly to peers, by design. |
| A cosmic-ray bit flip in an unprotected register | Turns a correct value into a wrong one after every checksum has passed. |

The last one is why aerospace cares. At altitude, single-event upsets from
cosmic radiation are frequent enough to design for, and a flipped bit in a
processor that continues running is precisely a Byzantine fault.

**Why "just take a majority vote" is not the answer.** Voting works when
everyone sees the same inputs. The whole difficulty here is that a Byzantine
participant can make sure they do not. The extra rounds of message relaying in
the algorithms below exist for exactly one purpose: to make the honest
participants' views of the world converge before any vote is taken.

## Explore

**Is the fable a good one?** Lamport wrote later, with some amusement, that he
had learned from the Two Generals' Problem that a memorable story does more for a
result's transmission than the result's own merits. The 1980 paper, with the
same theorem under the dry title "Reaching Agreement in the Presence of Faults",
was read by specialists. The 1982 paper, with generals and traitors, is a
classic. He also recorded that he chose Byzantium partly so that no living
nation would take offence — an earlier draft used Albanian generals, which was
felt to be pushing it.

There is a real cost to the framing, though. "Byzantine" suggests malice, and
that has led generations of engineers to conclude the problem does not apply to
them because their servers are not attackers. Most Byzantine faults in practice
are not malicious at all. They are hardware degrading in ways that produce
confident wrong answers.

**Is Byzantine fault tolerance worth its price?** Serious disagreement here, and
it comes down to a threat model.

The sceptical position, argued at length by Martin Kleppmann among others, is
that within a single organisation's data centre the assumptions are wrong in both
directions. You do not really have arbitrary adversaries, and if you did, an
attacker who compromises one machine can usually compromise several, defeating
the $f$-out-of-$3f+1$ assumption anyway. Meanwhile the everyday causes of
corruption — bad RAM, bad cables, bad disks — are handled far more cheaply by
checksums, ECC memory and TLS than by a consensus protocol running three times
as many replicas. On this view, crash fault tolerance plus good hygiene is the
right engineering point, and BFT is expensive theatre.

The opposing position holds in exactly two settings. First, where participants
are controlled by mutually distrusting parties — blockchains, cross-organisation
ledgers, federated systems — the adversary is real by construction. Second, where
the cost of a wrong answer is a crash of the physical kind, and the fault sources
are environmental rather than adversarial. Aircraft and spacecraft engineers
built Byzantine-tolerant systems long before anyone thought about attackers,
because a radiation-corrupted flight computer that keeps talking is the exact
fault model.

**The bound is tight, and that is a real theorem.** It is worth appreciating that
$3f+1$ is not a safety margin someone chose. Lamport, Shostak and Pease proved
both directions: below the bound no algorithm exists, and at the bound an
algorithm does. Similarly, the $f+1$ round complexity of deterministic Byzantine
agreement is a proved lower bound, due to Danny Dolev and Rüdiger Reischuk and
others. These are not engineering rules of thumb.

**Why signatures do not make the problem go away.** Signed messages reduce the
participant bound dramatically, but they are not free. They assume a public-key
infrastructure that itself must be agreed on, they cost computation on every
message, and they do not address a traitor who simply stops sending, which is
where the synchrony assumption re-enters. Practical systems such as PBFT use
cryptography heavily and still run at $3f+1$ replicas, because they operate in a
partially synchronous model where a silent participant cannot be reliably
distinguished from a slow one.

## Deep Dive

### The problem, stated

A commanding general must send an order to $n-1$ lieutenant generals such that:

- **IC1 (agreement).** All loyal lieutenants obey the same order.
- **IC2 (validity).** If the commanding general is loyal, then every loyal
  lieutenant obeys the order he sends.

IC2 is what stops the trivial solution. Without it, "always retreat" satisfies
IC1.

The equivalent symmetric form is **interactive consistency**: $n$ generals each
hold a private value, and each must compute the same vector of $n$ values, whose
$i$-th entry is general $i$'s actual value whenever general $i$ is loyal. The two
formulations reduce to each other by running $n$ instances of the commander
problem in parallel.

The model is synchronous: every message sent is delivered within a known bound,
the receiver knows who sent it, and the absence of a message is detectable.

### Impossibility for $n = 3$, $f = 1$

Assume a solution exists for three generals with one traitor. Construct two
scenarios.

**Scenario α.** The commander $C$ is loyal and sends "attack". Lieutenant $L_2$
is the traitor and tells $L_1$ that $C$ said "retreat".

**Scenario β.** The commander $C$ is the traitor, sending "attack" to $L_1$ and
"retreat" to $L_2$. Lieutenant $L_2$ is loyal and faithfully relays "retreat" to
$L_1$.

$L_1$ receives "attack" from $C$ and "retreat" from $L_2$ in both scenarios. The
message traces at $L_1$ are identical, so $L_1$ takes the same action in both.
In α, IC2 forces $L_1$ to attack, since $C$ is loyal. So $L_1$ attacks in β too.

Now build the mirror pair. **Scenario γ**: $C$ is loyal and sends "retreat";
$L_1$ is the traitor and tells $L_2$ that $C$ said "attack". $L_2$'s trace in γ
is identical to its trace in β. In γ, IC2 forces $L_2$ to retreat. So $L_2$
retreats in β.

In β, $L_1$ attacks and $L_2$ retreats, and both are loyal. IC1 is violated.
$\square$

The proof is an indistinguishability argument again, the same weapon as in the
Two Generals' Problem — but here the two runs differ in *who* is faulty rather
than in *which messages were lost*.

### The general bound

> **Theorem.** With oral (unsigned, unauthenticated) messages, no algorithm
> solves the Byzantine Generals Problem for $f$ traitors unless
> $$n \geq 3f + 1$$

The proof is by simulation. Suppose an algorithm $\mathcal{A}$ solved the problem
for some $n \leq 3f$. Partition the $n$ generals into three non-empty groups,
each of size at most $f$. Build three "super-generals", each simulating one
group. Any one super-general being traitorous corresponds to at most $f$ real
traitors, which $\mathcal{A}$ handles by assumption — so the simulation would
solve the three-general, one-traitor problem. That is impossible, so
$\mathcal{A}$ does not exist. $\square$

Two companion lower bounds complete the picture:

- **Connectivity.** The communication graph must be at least $(2f+1)$-connected.
  Fewer disjoint paths and the traitors can cut the honest generals into pieces
  that cannot corroborate.
- **Rounds.** Any deterministic algorithm needs at least $f+1$ rounds of message
  exchange. This bound holds even with signatures, and even for crash faults —
  it is a fundamental cost of tolerating faults, not of tolerating malice.

### The oral-messages algorithm OM(m)

The algorithm is recursive on the number of traitors to be tolerated.

**OM(0).** The commander sends his value to every lieutenant. Each lieutenant
uses the value received, or a default if nothing arrives.

**OM(m), for $m > 0$.**

1. The commander sends his value to all $n-1$ lieutenants.
2. For each $i$, let $v_i$ be the value lieutenant $i$ received (or the default).
   Lieutenant $i$ now acts as commander in a fresh run of **OM(m−1)**, sending
   $v_i$ to the other $n-2$ lieutenants.
3. For each $i$ and each $j \neq i$, let $v_j$ be the value lieutenant $i$
   received from lieutenant $j$ in step 2, or the default. Lieutenant $i$ takes
   $\mathrm{majority}(v_1, \dots, v_{n-1})$.

The algorithm satisfies IC1 and IC2 for $n > 3m$ traitors, and runs in $m+1$
rounds. Its message complexity is the problem: step 2 spawns $n-1$ recursive
calls, each spawning $n-2$, giving $O(n^{m+1})$ messages. For $m = 1$, $n = 4$
that is a handful; for $m = 3$ it is already thousands. The exponential cost is
why OM(m) is a proof of feasibility rather than a deployable protocol, and why
the practical work since has been about achieving the same guarantees in
polynomial message complexity.

The key to correctness is a lemma: for any $m$ and $k$, if there are more than
$2k + m$ generals and at most $k$ traitors, then OM(m) applied with a loyal
commander yields the commander's value at every loyal lieutenant. The majority
vote in step 3 then works because more than half the values a loyal lieutenant
collects came through loyal paths.

### Signed messages: SM(m)

Now assume:

- A loyal general's signature cannot be forged, and any alteration of a signed
  message is detectable.
- Anyone can verify any general's signature.

The commander signs his order and sends it. A lieutenant who receives a properly
signed chain of order values he has not seen before adds it to his set, appends
his own signature, and relays it. After $m+1$ rounds each lieutenant applies a
fixed deterministic function — typically, if the set contains exactly one value,
obey it; otherwise retreat — to his accumulated set.

> **Theorem.** For any $m$, algorithm SM(m) solves the Byzantine Generals
> Problem in the presence of at most $m$ traitors, for any $n \geq m + 2$.

The reason the $3f+1$ barrier vanishes is that a traitorous commander who signs
two different orders has produced evidence. Both orders end up in every loyal
lieutenant's set, every loyal lieutenant sees a set of size two, and the
tie-break rule gives them all the same answer. The traitor cannot make one loyal
lieutenant's set differ from another's, because any signed value that reaches one
loyal general is relayed to all of them.

What signatures buy, in one sentence: they make lying **transferable**. Without
signatures, "he told me attack" is hearsay that the accused can deny. With
signatures, it is proof.

### The modern refinement: partial synchrony and PBFT

The classical algorithms need synchrony to detect silence. Real networks do not
supply it, and FLP shows that pure asynchrony makes deterministic consensus
impossible. Practical Byzantine systems therefore live in the partially
synchronous model of Dwork, Lynch and Stockmeyer: **safety unconditionally,
liveness once the network settles**.

Castro and Liskov's PBFT (1999) is the canonical construction. It runs $3f+1$
replicas with a designated primary, and each request passes through
pre-prepare, prepare and commit phases, each requiring a quorum of $2f+1$
matching messages. If the primary misbehaves or the network stalls, replicas
time out and run a view change to elect a new primary. Safety never depends on
timing; only progress does. The quorum arithmetic is worth internalising: two
quorums of size $2f+1$ drawn from $3f+1$ replicas must intersect in at least
$f+1$ replicas, and so in at least one honest replica. That intersection is what
prevents two conflicting decisions, and it is the reason the bound is $3f+1$
rather than $2f+1$.

PBFT's descendants — Zyzzyva, Tendermint, HotStuff, and the protocols behind
several production blockchains — improve the message complexity from $O(n^2)$ per
decision toward $O(n)$ using threshold signatures and pipelining, without moving
the fundamental bound.

### The permissionless variant

Nakamoto consensus, as used in Bitcoin, does not fit the classical model at all,
and the difference is instructive. The classical bound counts *identities*, which
presumes you know how many there are. In an open network an adversary can
manufacture identities without limit — the Sybil attack — and the ratio becomes
meaningless. Proof of work replaces the roster of generals with a scarce external
resource, so the threshold becomes "an adversary controlling less than half of the
hash rate", and the guarantee weakens from deterministic finality to a
probability that decays exponentially with confirmation depth. It is a different
theorem under different assumptions, not a violation of this one. Proof-of-stake
systems reintroduce a known validator set and consequently return to
classical-style bounds, typically requiring more than two-thirds of stake to be
honest — the $3f+1$ ratio in another currency.

## History

**1978–80: the engineering problem came first.** At SRI International, a team was
building SIFT — Software Implemented Fault Tolerance — a flight-control computer
for NASA Langley, intended to survive component failures during commercial
flight. The requirement was not academic. Redundant processors reading redundant
sensors had to agree on what the sensors said, and a degraded sensor or processor
does not politely stop. It reports a plausible wrong value, and different
processors reading it can get different plausible wrong values.

**1980.** Marshall Pease, Robert Shostak and Leslie Lamport published "Reaching
Agreement in the Presence of Faults" in the *Journal of the ACM*. It contains the
theorem in full: agreement with unauthenticated messages requires $n > 3f$;
authentication changes the bound. Lamport later credited Shostak with the
three-general impossibility argument and the OM algorithm, and Pease with the
generalisation.

**1982.** The same three authors published "The Byzantine Generals Problem" in
*ACM TOPLAS*. The mathematics is largely the 1980 result, restated with the
fable, the recursive algorithms spelled out, the signed-message variant, and the
connectivity results for incomplete graphs. Lamport has written that he invented
the story specifically to make the result memorable, having watched the earlier
paper attract little attention. He also noted that Byzantium was chosen to avoid
insulting any contemporary country.

**Where the name really points.** The adjective was already in use at SRI for
faults of arbitrary behaviour; the fable supplied the rest. The problem itself
had a precursor in the 1978 work of Wensley and others on SIFT, and the
underlying question — how many redundant components does it take to survive a
component that lies — goes back to von Neumann's 1956 work on synthesising
reliable organisms from unreliable components.

**1980s–90s: theory and aerospace, separately.** Danny Dolev, Rüdiger Reischuk,
Cynthia Dwork, Nancy Lynch and others established the round-complexity and
connectivity lower bounds and the early efficient algorithms. In parallel, the
aerospace community shipped Byzantine-tolerant hardware in the Draper FTMP, the
MAFT architecture, the SAFEbus backplane of the Boeing 777, and the
time-triggered architectures later used in automotive and avionics buses.

**1999.** Miguel Castro and Barbara Liskov's PBFT showed that Byzantine
agreement could run within about 3% of the cost of an unreplicated service for a
real workload, moving the field from feasibility to practice.

**2008 onwards.** Bitcoin brought Byzantine agreement to a general audience,
usually with the theory badly garbled in transmission, and made
"Byzantine fault tolerance" a phrase that appears in venture funding
announcements. The subsequent decade of consensus research — Tendermint,
Algorand, HotStuff — has been the most active period the problem has ever had.

## Why It Matters

**It defined the cost of distrust.** Before 1980, "how much redundancy do I need"
was answered by engineering judgement. After it, there is a number. If you want
to survive $f$ components that may behave arbitrarily, you need more than $3f$
of them, or you need signatures, and there is no third option. That is a design
constraint with a price tag, and it is checkable.

**It separated three kinds of failure that had been muddled together.** Crash
faults (a component stops), omission faults (a component drops some messages) and
Byzantine faults (a component does anything at all) demand different amounts of
redundancy: roughly $f+1$, $2f+1$ and $3f+1$ respectively. Naming the hierarchy
let system designers state their fault model explicitly instead of hoping. Every
serious distributed system specification now begins by saying which of these it
assumes, and that discipline traces directly to this work.

**It made cryptography structural rather than decorative.** The gap between the
unsigned bound and the signed bound is one of the clearest demonstrations
anywhere that cryptographic primitives change what is computationally
achievable, not merely what is confidential. Digital signatures buy you
non-repudiation, and non-repudiation buys you a factor of three in replica count.

**It underwrote replicated state machines.** Lamport's framework — treat a
service as a deterministic state machine, replicate it, and use agreement to
ensure every replica processes the same commands in the same order — is how
fault-tolerant services are built, from Chubby and ZooKeeper through etcd to
every blockchain. Byzantine agreement is the version of that framework that
survives replicas which have been taken over.

## Modern Relevance

**Blockchain consensus.** Every permissioned blockchain — Hyperledger Fabric,
Tendermint/Cosmos, Diem's descendants — runs a direct descendant of PBFT and
sizes its validator set by the $3f+1$ rule. Proof-of-stake systems including
Ethereum's post-2022 consensus layer require more than two-thirds of staked value
to be honest for finality, which is the same ratio arrived at by the same quorum
intersection argument. When you read that a chain "finalises with two-thirds
supermajority", you are reading Lamport, Shostak and Pease.

**Aircraft.** The Boeing 777's flight-control system uses redundant computing
channels with Byzantine-resilient voting, and its SAFEbus backplane was designed
around the fault model explicitly. Engineers at Honeywell and NASA — notably Kevin
Driscoll and colleagues in their 2003 paper "Byzantine Fault Tolerance, from
Theory to Reality" — documented real Byzantine failures observed in flight
hardware, including a bus transmitter whose signal was interpreted as a 1 by some
receivers and a 0 by others. That single anecdote is the best argument for the
field's existence: the failure was not an attacker, it was a marginal voltage
level, and it produced exactly the traitor's behaviour.

**Spacecraft.** The Space Shuttle flew four identical general-purpose computers
running voted, synchronised software plus a fifth running independently written
backup software, a design intended to survive both hardware faults and a common
software error. Deep-space missions with long light-delays and heavy radiation
exposure use similar voting architectures, since a single-event upset producing a
confidently wrong value is the canonical Byzantine fault and nobody can power-cycle
the spacecraft by hand.

**Automotive and industrial control.** FlexRay, the time-triggered protocol used
in drive-by-wire systems, and the TTA family more broadly, incorporate Byzantine
fault containment through bus guardians. As vehicle autonomy increases and more
functions become safety-critical, the assumption that a failed sensor fails
silently becomes untenable, and the design costs rise accordingly.

**Ordinary infrastructure, where it is usually the wrong tool.** Most production
systems — etcd, ZooKeeper, Kafka, PostgreSQL replication, Spanner — deliberately
assume crash faults only, and use Raft or Paxos with $2f+1$ replicas. This is a
considered decision, not an oversight: checksums catch corruption, TLS catches
tampering, and the extra replicas that Byzantine tolerance demands buy protection
against a threat that is not in the model. Knowing the bound is what lets a team
make that trade-off explicitly rather than by accident.

**Federated and multi-party systems.** Where several organisations that do not
trust each other share infrastructure — interbank settlement, certificate
transparency logs, supply-chain provenance — the Byzantine model is the honest one,
because each party genuinely has an incentive to misreport and no party can audit
the others' internals. These deployments are where the theory earns its cost
outside aerospace.
