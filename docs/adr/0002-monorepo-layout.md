# 2. Monorepo with a uv workspace

Date: 2026-10-13
Status: Accepted

## Context
Receipts has a web app, an API, an ingestion worker, a retrieval library, ML code,
research and infrastructure. Retrieval must be benchmarkable independently of the API.
Benchmark results must be traceable to the exact code that produced them.

## Decision
One repository. Python code lives in a uv workspace with four packages:
`receipts_core` and `receipts_search` (libraries), `api` and `worker` (applications),
sharing one lockfile and a pinned Python version (3.12).
`receipts_search` is a separate package so the API, the LangGraph workflow and the
ReceiptsIR benchmark can all import it without depending on each other.

## Alternatives
- Separate repositories per component: version drift and harder cross-cutting changes.
- One single Python package: retrieval could not be benchmarked without the web layer.

## Consequences
- One history links code, benchmarks and deployments.
- A single lockfile surfaces dependency conflicts immediately.
- If two components ever need incompatible dependencies, they can move to separate
  environments because the API and worker already run as separate containers.
