---
title: The CAP Theorem
slug: cap-theorem
alternateNames:
  - Brewer's Theorem
  - Brewer's Conjecture
  - Consistency, Availability, Partition Tolerance
summary: >-
  Almost everyone states it as "pick two of consistency, availability and
  partition tolerance". That is wrong. Partitions are not a choice, and the real
  trade-off only exists while the network is broken.
hook: >-
  A system spread across several machines can give you consistent answers, or
  always answer at all. The network makes you choose.
era: contemporary
date: 2000 (conjectured), 2002 (proved)
year: 2000
origin: >-
  Proposed by Eric Brewer in a keynote to the ACM Symposium on Principles of
  Distributed Computing in 2000, and proved as a theorem under precise
  definitions by Seth Gilbert and Nancy Lynch in 2002.
people:
  - eric-brewer
  - seth-gilbert
  - nancy-lynch
  - daniel-abadi
domains:
  - computer-science
types:
  - computation
  - knowledge
  - decision-making
nature: impossibility-result
difficulty: advanced
status: resolved
renown: known
concepts:
  - Linearizability
  - Network partition
  - Availability
  - PACELC
  - Eventual consistency
  - Quorum systems
relationships:
  - kind: related
    to: two-generals-problem
    note: >-
      The same blind spot at the bottom of both. A node cannot tell a partitioned
      peer from a slow one, just as a general cannot tell a lost message from a
      late one, and every consequence follows from that single indistinguishability.
  - kind: related
    to: goodharts-law
    note: >-
      A case study in a slogan outrunning its theorem. "Pick two of three" spread
      because it was memorable, was used to justify design decisions it does not
      support, and needed a public correction from its own author twelve years
      later.
references:
  - source: brewer-2000-podc-keynote
    role: primary-source
    note: The keynote where the conjecture was first stated, drawn from Brewer's experience at Inktomi.
  - source: gilbert-lynch-2002-brewers-conjecture
    role: paper
    note: The proof, and the precise definitions that make it true — and narrow.
  - source: brewer-2012-cap-twelve-years
    role: paper
    note: Brewer's own correction of how the conjecture came to be misused.
  - source: abadi-2012-pacelc
    role: paper
    note: PACELC — the trade-off that operates when there is no partition, which is nearly always.
  - source: kleppmann-2017-ddia
    role: book
    locator: "Chapter 9"
    note: The clearest practitioner-facing account of why the theorem is both true and unhelpful as usually cited.
furtherReading:
  - title: A Critique of the CAP Theorem
    url: https://arxiv.org/abs/1509.05393
    note: Kleppmann's argument that the theorem's definitions are too narrow to describe the systems people actually build.
  - title: Please stop calling databases CP or AP
    url: https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html
    note: Why the two-letter classification breaks down on contact with real database behaviour.
  - title: Jepsen
    url: https://jepsen.io/
    note: Kyle Kingsbury's empirical testing of distributed databases under partition, which repeatedly found systems violating the guarantees they advertised.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Two libraries in one town, north and south, share a single collection.

There is exactly one copy of *Charlotte's Web*, and both branches lend it. So the
librarians keep matching notebooks, and every time a book goes out one branch
phones the other so both notebooks stay identical. It works beautifully.

Then a storm brings down the phone line.

A child walks into the north branch and asks for *Charlotte's Web*. The north
librarian looks at her notebook. It says the book is available — but that
notebook was last updated before the storm, and she has no way to check whether
the south branch has lent it out in the meantime.

She has exactly two options, and there is no third.

**She can say no.** "I'm sorry, I can't check the other branch, so I can't lend
anything today." Her notebook stays perfectly trustworthy. The child goes home
empty-handed.

**She can say yes.** The child gets the book. And if the south branch lent it
out an hour ago, the town's records now say two different children have the same
book, and somebody is going to be disappointed later.

Careful now. Notice what she did **not** get to choose.

She did not choose to have a storm. Nobody chose that. The line went down, and
the only decision left was what to do about it.

The famous version of this idea says you must pick two out of three:
trustworthy records, always answering, and coping with broken phone lines. That
is not what the librarian faces. She never had "no storms" on the menu.

## Understand

The CAP theorem is the most cited and most misquoted result in distributed
systems. Getting it right takes three steps: what the three letters actually
mean, what the theorem actually says, and why the popular version is not merely
imprecise but backwards.

### The three properties, precisely

**Consistency (C).** In the theorem this means **linearizability**, and nothing
else. A system is linearizable if it behaves as though there were one single copy
of the data with all operations happening one at a time: once a write completes,
every later read anywhere in the system returns that value or a newer one. It is
a strong, single-object, real-time guarantee.

This is **not** the C in ACID. ACID consistency means a transaction preserves
whatever invariants the application declared — foreign keys, balance non-negativity,
whatever the schema says. That is largely the application's responsibility, and
it has essentially nothing to do with CAP's C. The two letters coinciding is one
of the more expensive accidents of terminology in computing, and it causes real
confusion in real design meetings.

**Availability (A).** Every request sent to a non-failing node receives a
non-error response, eventually. This too is stricter and stranger than the
everyday meaning. There is no latency bound — a response after an hour still
counts as available. And it must hold at *every* non-failing node, including one
stranded on the wrong side of a partition. A system where a majority quorum keeps
serving while a minority refuses is **not** available in CAP's sense, even
though users would call it up.

**Partition tolerance (P).** The system continues to operate when the network
drops arbitrary messages between nodes. In the model this is a statement about
what the network is permitted to do, not about a feature the system has.

### What the theorem says

> In an asynchronous network where messages may be lost, no implementation of a
> read/write register can be both linearizable and available.

Gilbert and Lynch proved it in 2002, and the proof is four sentences long. Split
the nodes into two groups, $G_1$ and $G_2$, with all messages between them
dropped. Write a new value to a node in $G_1$; because the system is available,
that write must complete. Now read from a node in $G_2$; because the system is
available, that read must return a value, and it must return without hearing
anything from $G_1$. It cannot know about the write. So it returns a stale
value, and linearizability is violated. If instead it waits or returns an error,
availability is violated.

That is the whole theorem. It is true, it is narrow, and it is about one register
during one partition.

### Why "pick two of three" is wrong

The slogan treats all three letters as design options on equal footing, as though
an architect sits down and selects two. This misdescribes the situation in a way
that produces bad decisions.

**Partitions are a fact about the world, not a property you select.** Network
cables get cut. Switches fail. A misconfigured BGP announcement blackholes a
region. A garbage-collection pause makes a healthy node indistinguishable from an
unreachable one for twenty seconds. You do not get to decide whether these
happen. You only get to decide how your system behaves when they do.

So "CA" — consistency and availability, sacrificing partition tolerance — is not a
category of distributed system. It is a claim that partitions never occur, which
is false for anything spanning more than one machine. A single-node database is
genuinely CA, because there is no network to partition; the moment you replicate
it, the choice is gone. Systems marketed as CA are, without exception, systems
that have chosen what to do during a partition and have not told you which.

**The trade-off exists only during a partition.** When the network is healthy — which
is the overwhelming majority of the time — a system can and should provide both
strong consistency and high availability. There is no theorem forcing a sacrifice
in normal operation. Brewer said this himself in 2012: the goal should be to
provide all three properties nearly all the time, and to have a deliberate plan
for the rare intervals when you cannot.

The honest statement is therefore conditional:

> **If a partition occurs, you must choose between consistency and availability
> for the duration of that partition. Otherwise you need not choose at all.**

### What that choice looks like in practice

**Choose consistency (often labelled CP).** During a partition, refuse to serve
requests that cannot be answered correctly. A minority side stops accepting
writes; possibly stops accepting reads. The data stays trustworthy and some users
see errors. This is what etcd, ZooKeeper, HBase and Spanner do. The librarian
says no.

**Choose availability (often labelled AP).** During a partition, keep serving from
whatever data each side has, and reconcile afterwards. Everyone gets an answer;
some answers are stale, and concurrent writes on both sides must be merged later
by timestamps, vector clocks, conflict-free data types or application logic.
Cassandra, Riak, DynamoDB in its default configuration and DNS work this way. The
librarian says yes and sorts it out on Monday.

Neither is better. They are answers to a business question — is a wrong answer
worse than no answer? — that has different answers for a bank ledger and for a
shopping cart. Amazon's famous conclusion was that a rejected add-to-cart costs
more than an occasionally resurrected deleted item.

### The third option nobody mentions

You can also **detect the partition and change behaviour explicitly**. Enter a
degraded mode, restrict operations to those that are safe without coordination,
log everything for later reconciliation, and run a recovery procedure when the
network returns. Brewer's 2012 paper argues this is the real engineering
discipline that CAP should have prompted, and that "pick two" obscured it for a
decade. An ATM that will dispense up to a limited amount offline and reconcile
later is doing exactly this — a deliberate, bounded relaxation rather than a
binary surrender.

## Examples

**The same partition, three systems.** A data centre link fails, splitting five
replicas into a group of three and a group of two.

| System | Majority side (3 nodes) | Minority side (2 nodes) | CAP label |
| --- | --- | --- | --- |
| etcd / ZooKeeper (Raft, Zab) | Serves reads and writes; has quorum | Refuses writes, refuses linearizable reads | CP |
| Cassandra at consistency ONE | Serves everything | Serves everything, possibly stale | AP |
| Cassandra at QUORUM | Serves everything | Fails requests | CP-ish |
| DynamoDB, default | Serves everything | Serves everything | AP |
| Single PostgreSQL primary + replicas | Primary serves; replicas may lag | Depends entirely on failover configuration | Depends |

The last two rows make an important point. Cassandra's behaviour is set by a
per-query parameter, so the same cluster is CP for one statement and AP for the
next. A per-system two-letter label cannot express that, which is Kleppmann's
argument for retiring the labels entirely.

**Where the CAP-C and the ACID-C come apart.** A single-node PostgreSQL instance
gives you ACID consistency in full and CAP consistency trivially, because there is
nothing to be inconsistent with. Add a synchronous replica and you keep CAP
consistency at the cost of availability if the replica is unreachable. Add an
asynchronous replica and reads from it are not linearizable — a user can write,
then read their own write from the replica, and not see it — while every ACID
invariant remains perfectly intact on both machines. Two entirely different
properties, one letter.

**A partition you would not call a partition.** A node running a 40-second
stop-the-world garbage collection is, from every other node's perspective,
identical to a partitioned node. When it wakes it has no idea time has passed and
may act on beliefs that are now stale. This is why partition tolerance cannot be
designed away: the model's "arbitrary message loss" covers process pauses, disk
stalls, hypervisor suspension and clock jumps, all of which occur in healthy
data centres every day.

## Explore

**The theorem is true and the slogan is harmful. Both.** Gilbert and Lynch's
result is a correct theorem with a correct proof. The trouble is entirely in the
compression. "Pick two of three" is memorable, fits on a slide, and encodes a
false model of the situation: that partition tolerance is optional, that the
trade-off is permanent rather than partition-scoped, and that systems fall into
three clean categories. Between roughly 2005 and 2012 that slogan was used to
justify abandoning transactions across a large part of the industry, and a good
deal of the NoSQL movement's marketing rested on it.

**Brewer's own correction.** In "CAP Twelve Years Later: How the 'Rules' Have
Changed" (IEEE Computer, 2012), the author of the conjecture wrote that the two-of-three
formulation had always been misleading. His argument has three parts: partitions
are rare, so systems should aim to provide all three properties most of the time;
the choice between C and A is not global but can be made per operation, per data
item, per moment; and the real work is detecting a partition, entering an explicit
partition mode with restricted operations, and running a compensation process
during recovery. It is one of the few cases in computing of an author publicly
correcting a slogan built on their own work, and it deserves to be better known
than the slogan.

**Abadi's PACELC.** Daniel Abadi's 2012 extension makes the point that CAP
describes the rare case and says nothing about the common one:

> **If** there is a **P**artition, trade **A**vailability against
> **C**onsistency; **E**lse, trade **L**atency against **C**onsistency.

The "else" clause is where systems spend more than 99.9% of their lives. Even with
a perfectly healthy network, keeping replicas linearizable means coordinating
before responding, and coordination costs a round trip — across a data centre,
across a continent, or across an ocean. That latency is paid on every single
request, whereas the CAP trade-off is paid only during an outage. Abadi's claim,
which is hard to argue with, is that the latency term explains far more about why
real databases are designed the way they are.

Abadi's own classifications: Dynamo, Cassandra and Riak are PA/EL — they give up
consistency both during partitions and in normal operation, to be fast. VoltDB
and H-Store are PC/EC — consistent always, and willing to pay for it. Yahoo's PNUTS
is PC/EL, an unusual and instructive combination. MongoDB he places at PA/EC.

**The critiques of the formalism.** Kleppmann's 2015 critique argues the
definitions are too narrow to describe real systems: CAP availability ignores
latency entirely, so a system that responds after an hour is "available" while
one that responds in 100 ms with a 0.01% error rate is not; the theorem covers a
single register, not transactions; and the binary AP/CP labelling cannot express
systems whose guarantees vary per operation. He proposes talking about specific
consistency models — linearizable, sequential, causal, read-your-writes — and
specific latency and availability targets, rather than three letters.

The counterpoint, and it is a fair one, is that CAP's job was never to be a
design methodology. It was to kill, permanently, the belief that a distributed
system could be made strongly consistent and fully available with enough
engineering. It did that, and everything since has been refinement.

**The broader consistency landscape.** CAP's C is the strongest point on a
spectrum, and the interesting engineering lives between the extremes.
Linearizability requires coordination and is unavailable under partition.
Sequential and causal consistency are weaker and, importantly, causal consistency
is the **strongest** model that remains available during a partition — a result due
to Mahajan, Alvisi and Dahlin (2011). Below that lie read-your-writes, monotonic
reads, and eventual consistency, which promises only that replicas converge if
writes stop. Choosing a point on this spectrum is a far more useful conversation
than choosing two letters.

## Deep Dive

### The formal statement

Gilbert and Lynch work in the asynchronous network model, with no clocks, where
processes coordinate only by messages that may be lost arbitrarily. The object is
a single read/write register with an initial value $v_0$.

**Atomic (linearizable) consistency.** There is a total order on all operations
such that each operation appears to take effect instantaneously at a point
between its invocation and its response, and each read returns the value of the
most recent preceding write in that order.

**Availability.** Every request received by a non-failing node results in a
response. No time bound is imposed, but the response must eventually come, in
every execution.

**Partition tolerance.** The network is allowed to lose an arbitrary set of
messages sent from one group of nodes to another.

> **Theorem 1.** It is impossible in the asynchronous network model to implement
> a read/write data object that guarantees both availability and atomic
> consistency in all fair executions, including those in which messages are lost.

**Proof.** Partition the nodes into non-empty groups $G_1$ and $G_2$, and let the
network drop every message between them. Consider the execution:

1. Write $v_1 \neq v_0$ at a node in $G_1$. By availability the write returns; by
   assumption its acknowledgement means it has taken effect.
2. Read at a node in $G_2$, after the write has returned. By availability the
   read returns some value.
3. No message has crossed between the groups, so $G_2$'s state is identical to
   what it would be in an execution where the write never happened. The read must
   return $v_0$.

The read returns $v_0$ after a write of $v_1$ completed, so no valid total order
exists. Atomicity is violated. $\square$

The technique is the indistinguishability argument that runs through this entire
family of results: exhibit two executions a node cannot tell apart, and show the
specification demands different behaviour in each.

**Theorem 2**, which is quoted far less often and is arguably more useful,
concerns the partially synchronous model where every node has a clock and message
delay is bounded. The same impossibility holds for atomic consistency with
availability, but a weaker guarantee becomes achievable: a **$t$-eventually
consistent** register, which is atomic during periods when all messages are
delivered, and guarantees that after a partition heals, all nodes converge within
a bounded time. That is a fair description of what well-built AP systems actually
promise, and it shows the theorem is not merely negative.

### Reading the theorem correctly

Three consequences follow from the statement, and each contradicts a common
belief.

**P is a quantifier, not a conjunct.** The theorem's shape is: *for all
executions including partitioned ones, not (C and A)*. Partition tolerance
appears as the scope of the claim, not as a third thing to trade against the
others. Dropping it changes the statement to *for all executions with no message
loss, not (C and A)* — which is false, and trivially so, since a single node
provides both. That is why "CA" is not a design point but a modelling assumption,
and an unsafe one whenever more than one machine is involved.

**The choice is conditional and local.** Nothing in the proof says a system must
behave the same way for every operation, every key, or at every moment. Systems
that expose per-operation consistency levels — Cassandra, DynamoDB, Cosmos DB with
its five documented levels — are exploiting this correctly. The trade-off is made
per request during a partition, not once at design time.

**Availability in CAP is not availability in an SLA.** The theorem's A requires
*every* non-failing node to respond. A quorum system where a majority partition
serves all requests is unavailable by this definition, but would show five nines
on a status page. Conversely a system that always responds after an unbounded
delay is available by the theorem and useless in production. When a vendor says
their CP system is "highly available", both statements can be true, because the
words mean different things.

### PACELC formally

Abadi's formulation:

$$\text{if } (P) \text{ then } (A \text{ or } C) \text{ else } (L \text{ or } C)$$

The "else" branch has a physical floor. To make a write linearizable across
replicas separated by distance $d$, the acknowledging node must communicate with
enough replicas to establish the order, costing at least $2d/c$ where $c$ is the
speed of signal propagation. New York to London is roughly 5,600 km, giving about
37 ms for a single round trip in fibre before any processing. Cross-continental
linearizable writes therefore cost tens of milliseconds, unavoidably, on every
request. That constant, not partitions, is why systems relax consistency.

Google's Spanner is the interesting case here, and it is frequently misdescribed
as beating CAP. It does not. Spanner uses TrueTime — GPS and atomic clocks giving
a bounded uncertainty interval — to make externally consistent transactions
practical globally, and pays for linearizability by *waiting out* the clock
uncertainty on commit, typically a few milliseconds. Under a partition it is CP:
a minority replica set stops serving. Brewer's own 2017 write-up describes it as
"effectively CA" only in the sense that Google's private network makes partitions
rare enough that the CP behaviour almost never triggers. That is an availability
argument about infrastructure, not an exception to the theorem.

### Relation to FLP

CAP and FLP are close relatives and are often confused.

FLP (1985) says that in an asynchronous system with one possible crash fault, no
deterministic protocol guarantees that consensus *terminates*. Safety is
achievable; liveness is not guaranteed.

CAP (2002) says that in an asynchronous system with partitions, no register can
be both linearizable and available. It is about a weaker object than consensus,
under a stronger fault assumption — message loss rather than a single crash.

They share their proof technique, one author, and their root cause: a node cannot
distinguish a peer that is gone from a peer that is slow. FLP is the sharper
theoretical statement; CAP is the one that reached practitioners, largely because
it was phrased in terms of a product decision rather than a protocol property.

### The quorum arithmetic

Most production systems sit on a tunable version of the trade-off. With $N$
replicas, $W$ required for a write and $R$ for a read, the condition

$$R + W > N$$

guarantees that read and write quorums intersect, so a read sees the latest
acknowledged write. Setting $W = N$ and $R = 1$ gives fast reads and writes that
fail if any replica is down. Setting $W = R = \lceil (N+1)/2 \rceil$ gives the
usual majority-quorum behaviour, tolerating a minority partition on either side.
Setting $R + W \leq N$ abandons the overlap and buys availability on both sides
of any partition at the cost of stale reads.

Worth knowing: quorum intersection alone does not deliver linearizability. Without
additional mechanisms — read repair before returning, or a synchronising read
phase — concurrent operations can still be ordered inconsistently, a point
Kleppmann demonstrates in detail. "Quorum reads and writes" is a common shorthand
for "strongly consistent" and it is not quite true.

## History

**Late 1990s.** Eric Brewer was building Inktomi, one of the first large-scale
clustered web services, and encountering the trade-off empirically. Related ideas
were in circulation: Birman and Friedman's work on the tension between consistency
and availability, and Fox and Brewer's 1999 "harvest and yield" framing, which
proposed thinking about graceful degradation — answering with partial results
rather than failing — instead of a binary choice. That earlier framing is arguably
more useful than the one that caught on.

**19 July 2000.** Brewer delivered an invited keynote, "Towards Robust Distributed
Systems", at the ACM Symposium on Principles of Distributed Computing in
Portland. The conjecture appeared on a slide. It was never written up as a paper,
which is part of why the compressed slogan travelled without the surrounding
argument.

**2002.** Seth Gilbert, then a doctoral student, and Nancy Lynch published
"Brewer's Conjecture and the Feasibility of Consistent, Available,
Partition-Tolerant Web Services" in *ACM SIGACT News*. Their contribution was to
choose definitions precise enough to prove something — and in doing so they made
the theorem much narrower than the conjecture had sounded. Their Theorem 2, on
the partially synchronous case, is the part that describes real systems and is
almost never cited.

**2007.** Amazon published the Dynamo paper, describing a production system that
chose availability and eventual consistency for the shopping cart, and explained
the reasoning in commercial terms. Together with Google's Bigtable paper the year
before, it launched the NoSQL movement, and CAP became its standard
justification.

**2008–2011.** The slogan reached maximum circulation and maximum distortion. "CAP
says you can't have ACID at scale" and "we're AP because CAP" became common in
technical discussions. Databases were sorted into a three-way Venn diagram that
appeared in hundreds of conference talks, with a "CA" region that does not
correspond to any distributed system.

**2012.** The February issue of *IEEE Computer* carried both Brewer's "CAP Twelve
Years Later" and Abadi's PACELC paper. Between them they reframed the discussion:
Brewer disowning the two-of-three formulation and arguing for explicit partition
modes, Abadi pointing out that the latency trade-off matters more in practice.

**2015 onwards.** Kleppmann's critique and Kyle Kingsbury's Jepsen testing project
shifted the conversation from labels to measurements. Jepsen's method — partition a
real cluster and check whether the observed history satisfies the advertised
consistency model — repeatedly found production databases violating their own
documented guarantees, which turned out to be a far more productive contribution
than any amount of Venn diagram.

## Why It Matters

**It killed a specific false belief.** Before CAP entered general circulation,
many engineers assumed that a distributed database could be made strongly
consistent and continuously available with sufficient effort, and that any system
failing to do so was underengineered. The theorem establishes that this is not a
matter of effort. That single correction is worth the confusion the slogan
caused.

**It made partition behaviour a design question that must be answered.** Any
replicated system has a behaviour during a partition. Before CAP, that behaviour
was often emergent, undocumented and discovered during an incident. After it, "what
happens when the link between regions fails?" is a question that gets asked in
design reviews, and a system whose author cannot answer it is understood to be
incomplete.

**It is a case study in how results propagate.** The theorem was compressed into
three letters and a Venn diagram, and the compression lost the conditionality that
was the whole content. A decade of architectural decisions were justified by a
misreading, until the original author published a correction. The lesson
generalises well past distributed systems: when a result becomes a slogan, check
whether the slogan still contains the quantifiers.

**It gave the industry a shared vocabulary, imperfect but real.** For all the
damage the two-letter labels did, "is this CP or AP?" is a question that gets an
engineering team to the heart of a design in about ninety seconds. The right
response now is to answer more precisely — which consistency model, at what latency,
degrading how — but the question still opens the right conversation.

## Modern Relevance

**Multi-region cloud architecture.** Any service deployed across regions confronts
this on day one. AWS's DynamoDB global tables use last-writer-wins reconciliation
(AP); its transactional APIs and single-region strong reads are CP. Google Cloud
Spanner and CockroachDB are CP with the partition window kept short by
infrastructure investment. Azure Cosmos DB exposes five named consistency
levels — strong, bounded staleness, session, consistent prefix, eventual — and prices
them differently, which is CAP and PACELC turned into a menu with a bill attached.

**The correct question in a design review.** Not "are we CP or AP?" but: which
operations require linearizability and which tolerate staleness; how stale is
acceptable and for how long; what happens to each operation during a partition;
how are conflicts detected and resolved on heal; and what latency is each
consistency level costing on every ordinary request. Those five questions are
answerable and actionable, which the two-letter label is not.

**Conflict-free replicated data types.** CRDTs are the mature form of the AP
choice: data structures whose concurrent updates merge deterministically, so
divergent replicas converge without coordination and without losing writes.
Collaborative editors, Redis's active-active geo-replication and offline-capable
mobile applications rest on them. They do not evade CAP — they are unavailable for
linearizable operations, by construction — but they make the available side far
less painful by removing the conflict-resolution burden from the application.

**Local-first and offline-capable software.** A phone in a tunnel is a permanently
partitioned node. Applications built to work offline and sync later have chosen
availability explicitly, and the interesting design work is entirely in the
merge semantics. This is a growing category, and its practitioners think in terms
of causal consistency and CRDTs rather than CAP letters.

**Microservices and the saga pattern.** Cross-service business transactions
avoid distributed two-phase commit precisely because it is CP in the worst way: a
partition leaves participants blocked holding locks. Sagas choose availability and
compensating actions, and accept that the system is temporarily inconsistent by
design. Every "eventually consistent" architecture diagram is a CAP decision that
somebody should have made deliberately.

**Where you will still see it stated wrongly.** Interview questions, vendor
comparison tables, and a large fraction of blog posts continue to present the
three-circle Venn diagram with a populated CA region. If you take one thing from
this entry, take this: **there is nothing in that region.** Partitions are weather,
not a menu option, and the only real choice is what your system does when the
storm arrives.
