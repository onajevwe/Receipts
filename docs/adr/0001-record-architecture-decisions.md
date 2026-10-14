# 1. Record architecture decisions

Date: 2026-10-13
Status: Accepted

## Context
Receipts is a long-lived product built by a small team that is learning as it builds.
Decisions made now must be understandable and defensible later.

## Decision
We record every significant architectural decision as a short ADR in `docs/adr/`,
numbered in order, using the sections Context, Decision, Alternatives and Consequences.

## Alternatives
- Decisions only in chat or meeting notes: easily lost.
- One large design document: hard to keep current; buries individual decisions.

## Consequences
- Each decision has a permanent, reviewable record linked to the code that implements it.
- Superseded decisions are marked as such, not deleted, so the history stays honest.
