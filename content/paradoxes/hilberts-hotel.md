---
title: Hilbert's Grand Hotel
slug: hilberts-hotel
alternateNames:
  - The Infinite Hotel
  - Hilbert's Hotel
  - Hilbert's paradox of the Grand Hotel
summary: >-
  A hotel with infinitely many rooms, every one occupied, can still take in a
  new guest — and a coachload, and infinitely many coachloads. Being full stops
  meaning what it means everywhere else.
era: twentieth-century
date: 1924 (lectures), 1947 (popularised)
year: 1924
origin: >-
  From David Hilbert's Göttingen lectures on the infinite of 1924–25, and
  carried to a general readership by George Gamow's One Two Three... Infinity in
  1947.
people:
  - david-hilbert
  - george-gamow
  - georg-cantor
domains:
  - mathematics
  - philosophy
types:
  - infinity
nature: counterintuitive-result
difficulty: beginner
status: resolved
concepts:
  - Countable infinity
  - One-to-one correspondence
  - Cardinal arithmetic
  - Dedekind-infinite set
  - Actual infinity
relationships:
  - kind: influences
    to: banach-tarski-paradox
    note: >-
      The hotel is not just an analogy there — it is a step in the proof. The
      countably many awkward fixed points are swept out of the way by rotating
      everything along one notch, which is exactly the night manager's move.
  - kind: contrasts-with
    to: zenos-dichotomy
    note: >-
      Zeno's runner must complete infinitely many tasks in a finite time. The
      night manager has infinitely many rooms and all the time he needs; the
      difficulty has moved from the clock to the counting.
references:
  - source: hilbert-1926-uber-das-unendliche
    role: primary-source
    note: >-
      The published address from the same period. The hotel itself belongs to the
      lecture course rather than this text, and the difference is worth noting.
  - source: gamow-one-two-three-infinity
    role: book
    locator: Chapter I
    note: The retelling that made the hotel famous, complete with Gamow's own drawings.
  - source: cantor-1891-diagonal
    role: paper
    note: The theorem behind the one coach the hotel cannot accommodate.
  - source: sep-infinity
    role: encyclopedia
    note: On the dispute over whether an actual infinity of objects could exist.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

There is a hotel at the end of a very long road, and it has infinitely many
rooms. Room 1, Room 2, Room 3, and on and on, with no last room anywhere.

Tonight the hotel is completely full. Every single room has a guest in it. There
is not one empty bed in the entire building.

At two in the morning, the doorbell rings.

A traveller is standing outside in the rain, soaked through, asking whether there
is any chance at all of a room.

The night manager looks up from her desk. She does not check the register,
because she does not need to — she knows the hotel is full. She does not
apologise, and she does not send the traveller away.

She smiles, picks up the microphone that reaches every room in the building, and
says:

> **"Good morning, everybody. Would each of you please pack up, step into the
> corridor, and move into the room with the number one higher than the one you
> are in now. Thank you. Goodnight."**

And she hands the traveller the key to Room 1.

Nobody has been thrown out. Everybody still has a room to themselves. The hotel
is still full.

There is a coach pulling up outside with infinitely many passengers on it, and
she is not worried about that either.

## Understand

The trick is real, and here is why it works.

When you say a hotel with a hundred rooms is full, you mean the guests have used
up all the rooms, and that any new guest would have to share. "Full" and "no room
for one more" are the same statement.

In an infinite hotel they come apart.

Every guest does have their own room, so the hotel is full in the honest sense of
the word. But the manager's announcement moves the guest in Room 1 to Room 2, the
guest in Room 2 to Room 3, and in general the guest in any room to the next room
along. Ask two questions about that instruction:

- **Does anyone end up without a room?** No. Whatever room you were in, there is
  a room one higher, because the numbering never stops.
- **Does anyone end up sharing?** No. Two different rooms have two different
  successors, so no two guests are sent to the same place.

Every guest still has a private room, and Room 1 is now empty. The hotel was
full, and there was room for one more, and both of these things are true at
once.

This is not a sleight of hand and there is no contradiction in it. It is a
genuine property of infinite collections, and it can be turned into a definition:
**a collection is infinite exactly when it can be matched up, item for item, with
part of itself.** Galileo noticed the same phenomenon with square numbers in
1638; Richard Dedekind made it the official definition in 1888. The hotel is that
fact acted out by people carrying suitcases.

### The bigger arrivals

**A coach with infinitely many passengers.** One shift will not do — there is no
room far enough down the corridor to open up infinitely many spaces at the front.
So the manager asks everybody to move to the room with **double** their number.
The guest in Room 1 goes to Room 2, Room 2 to Room 4, Room 3 to Room 6. Everyone
lands somewhere, nobody shares, and every odd-numbered room is now empty. There
are infinitely many odd rooms, so the coach empties out into them: first
passenger to Room 1, second to Room 3, third to Room 5.

**Infinitely many coaches, each with infinitely many passengers.** Now there are
Coach 1, Coach 2, Coach 3 and so on with no last coach, and every one of them is
infinitely long. This still works, and the reason it works is worth sitting with.

Nobody can be served by going through Coach 1 first, because Coach 1 never ends
and Coach 2 would wait forever. Instead the manager serves them in **waves**. In
the first wave, she takes the first passenger from the first coach. In the
second wave, she takes the second passenger from the first coach and the first
passenger from the second coach. In the third wave, the third from the first
coach, the second from the second, and the first from the third. And so on.

Every wave is finite, so every wave finishes. And any passenger you can name —
say the seventeenth person on Coach Four — is served in a definite wave, the
twentieth. Nobody waits forever. The manager doubles everyone's room number as
before to free up the odd rooms, and hands out those odd keys wave by wave.

That zig-zag through the waves is one of the most useful ideas in mathematics.
It shows that infinitely many infinite lists, stacked together, still make just
one list.

### The coach that gets turned away

The hotel is not omnipotent, and this is the part that most retellings leave
out.

A coach arrives at dawn. It is not longer than the others in any ordinary sense,
but its passengers are labelled differently: there is exactly one passenger for
every possible endless sequence of the letters A and B. Passenger AAAAAA…,
passenger ABABAB…, passenger ABBAABB…, one for every string that could ever be
written.

The manager cannot do it, and no scheme she invents will help. Suppose she claims
to have found one. Look at the passenger she put in Room 1 and note their first
letter; the passenger in Room 2 and note their second letter; Room 3, third
letter. Now write down a new string that differs from Room 1's passenger in
letter one, from Room 2's in letter two, from Room 3's in letter three, forever.
That string labels a real passenger on the coach, and they are not in any room —
because whichever room you check, their label is wrong in that position.

This is Georg Cantor's argument of 1891, and it is the reason the hotel story
matters rather than merely amusing. Some infinities are small enough to be
numbered off room by room, and some are not. The hotel handles the first kind
effortlessly. The second kind will not fit in any hotel with numbered rooms, no
matter how the manager rearranges things.

## Examples

**The single guest.** Everyone moves up one.

| Was in | Moves to |
| --- | --- |
| Room 1 | Room 2 |
| Room 2 | Room 3 |
| Room 100 | Room 101 |
| Room $n$ | Room $n+1$ |

Room 1 is free. No collisions, no evictions.

**Forty new guests.** Everyone moves up forty. Rooms 1 to 40 are free.

**One infinite coach.** Everyone moves to double their number.

| Existing guest in | Moves to | Freeing |
| --- | --- | --- |
| Room 1 | Room 2 | Room 1 |
| Room 2 | Room 4 | Room 3 |
| Room 3 | Room 6 | Room 5 |
| Room $n$ | Room $2n$ | all odd rooms |

**Infinitely many infinite coaches.** The wave schedule, with coach across and
seat down. Each entry is the wave in which that passenger is served.

| | Coach 1 | Coach 2 | Coach 3 | Coach 4 |
| --- | --- | --- | --- | --- |
| **Seat 1** | 1 | 2 | 3 | 4 |
| **Seat 2** | 2 | 3 | 4 | 5 |
| **Seat 3** | 3 | 4 | 5 | 6 |
| **Seat 4** | 4 | 5 | 6 | 7 |

Wave 4 handles four people. Wave 100 handles a hundred. Every passenger has a
finite wave number, so everybody gets a key.

**Guests leaving is stranger than guests arriving.** Suppose every guest in an
odd room checks out. Infinitely many people have left, and the hotel is still
infinite and can be renumbered back to full occupancy. Now suppose instead that
every guest except the first three checks out. Again infinitely many people have
left — and this time only three remain.

Both times, "infinitely many guests left an infinitely full hotel". The answers
are *still infinite* and *exactly three*. This is why **subtraction is not
allowed** in the arithmetic of infinite quantities: the question "infinity minus
infinity" has no single answer, so it has no answer at all. Adding works fine.
Taking away does not.

## Explore

**Is it actually a paradox?** In the strict sense, no, and the site's
classification says so: nothing contradictory is derived. Every step is
consistent, and the arithmetic of countable sets is as solid as arithmetic gets.
What the hotel really demonstrates is that a word from finite experience —
"full" — carries a second meaning that quietly falls off when you go infinite.
The paradox is in the vocabulary, not the mathematics.

**The metaphysical argument.** The hotel does serious work outside mathematics.
Philosophers who deny that an *actual* infinity of things could exist in the
physical world — most prominently William Lane Craig, in defending the kalām
cosmological argument — use Hilbert's hotel as their central exhibit. The
argument runs: if an actual infinite could be instantiated in reality, a hotel
like this could exist; a hotel like this is absurd; therefore no actual infinite
can be instantiated; therefore the past cannot be infinite; therefore the
universe began.

**The reply.** Critics, including Graham Oppy and Wes Morriston, generally accept
the mathematics and reject the second premise. "Absurd", they argue, has been
smuggled in: the hotel is *unfamiliar*, and it violates expectations formed
entirely on finite collections, but nothing about it is incoherent. Every
supposed absurdity in the story turns out to be a place where a finite intuition
was applied outside its range. Whether that reply succeeds is a live
philosophical dispute; the mathematics is not in dispute by either side.

**Could it be built?** Not in this universe, and for reasons that have nothing to
do with the paradox. An infinite hotel would contain infinite mass in a region
where general relativity would have collapsed it long before, and the corridors
would be longer than any signal could traverse. The interesting question is
whether physical impossibility tells you anything about metaphysical
possibility. Most participants agree it does not settle it either way.

**Where the story is usually told badly.** Two failures are common. The first is
stopping before the coach that gets turned away, which leaves the impression that
infinity absorbs anything — the opposite of Cantor's actual result. The second is
"infinity minus infinity", which retellings sometimes present as a further
marvel rather than as an operation that is simply undefined.

## History

**Before Hilbert.** The mathematics predates the story entirely. Galileo stated
the underlying phenomenon in 1638, Bolzano catalogued it in 1851, Dedekind turned
it into the definition of an infinite set in 1888, and Cantor built the theory of
cardinal numbers in the 1870s and 1880s. By 1900 all of the mathematics in the
hotel was standard.

**1924–25.** Hilbert lectured on the infinite at Göttingen. The hotel appears in
these lectures as an illustration for a general audience. Hilbert never published
it: the lecture notes circulated informally, and the material was only made
widely available much later, in the Springer edition of Hilbert's lectures on the
foundations of arithmetic and logic edited by William Ewald and Wilfried Sieg
(2013).

**4 June 1925.** Hilbert delivered the address "Über das Unendliche" in Münster,
in memory of Weierstrass. The published version appeared in *Mathematische
Annalen* in 1926 and is the source of his famous line that "no one shall expel us
from the paradise that Cantor has created". **The hotel is not in it.** The paper
argues that the infinite is nowhere realised in physical nature and that its role
in mathematics is that of an ideal element — an argument of a piece with the
hotel, but not the story itself.

**1947.** George Gamow published *One Two Three... Infinity*. Its opening chapter
retells the hotel, and Gamow attributes it — with a straight face — to "the
unpublished, and even never written, but widely circulating volume: *The Complete
Collection of Hilbert Stories*". The book was a bestseller, went through
countless printings, and is why the hotel is known to people who have never heard
of Hilbert. Almost every subsequent retelling descends from Gamow's, not from
Hilbert's lectures.

**Since.** The hotel is now the standard first example of countable infinity in
essentially every textbook, popular treatment and classroom that touches the
subject.

## Why It Matters

**It makes an abstract definition concrete.** "A set is infinite when it can be
put in one-to-one correspondence with a proper subset of itself" is a sentence
most people cannot hold in their heads. "The hotel is full, and there is still a
room" is a sentence nobody forgets. The two say the same thing. Very few pieces
of mathematical exposition achieve that.

**It isolates exactly one false intuition.** The hotel does not ask you to
abandon logic or accept anything on faith. It identifies a single assumption —
that "full" implies "no room for another" — shows where that assumption came
from, and shows precisely where it stops applying. That is what a good
counterexample does.

**It is load-bearing in real proofs.** The shift is not only a teaching device.
Absorbing a countable exceptional set by rotating everything along one place is a
standard move in analysis, in measure theory, and most famously in the
Banach–Tarski construction, where a countable set of awkward fixed points on the
sphere is removed by exactly the manager's manoeuvre.

**It sets up the result that matters more.** The hotel's real payload is the
coach it cannot take. Having watched infinity swallow arrival after arrival, a
reader is properly astonished when something finally does not fit — which is the
right emotional preparation for Cantor's theorem, and a far better one than
meeting the diagonal argument cold.

## Modern Relevance

**Dovetailing.** The wave schedule for infinitely many infinite coaches is a
real algorithm, and computer scientists call it dovetailing. To run infinitely
many non-terminating computations "at once", give each a slice of time in the
wave pattern: every computation makes progress, and any particular step of any
particular computation is reached after finitely long. It is how a search over an
infinite space of programs is organised, and how the enumerability of the
recursively enumerable sets is established.

**Pairing functions.** Turning a pair of numbers into a single number, and back,
is the coach-and-seat scheme in code. The Cantor pairing function does it in
closed form, and variants appear wherever a two-dimensional index must be
flattened into one — sparse matrix storage, hash key composition, serialising
nested structures.

**Lazy and infinite data structures.** Functional languages allow lists with no
end. Prepending an element to an infinite list is the single-guest shift, and it
costs nothing, for the same reason.

**Gödel numbering.** Assigning a unique number to every formula, proof or
program relies on the fact that finite strings over a finite alphabet form a
countable set and so can be checked into the hotel. Gödel's and Turing's theorems
both begin with that check-in.

**Teaching.** The hotel remains the most effective introduction to countability
anywhere, and appears in curricula from primary school enrichment to first-year
university analysis — usually still in something close to Gamow's telling.
