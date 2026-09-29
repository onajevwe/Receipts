# Receipts

Receipts is a political accountability platform for tracing public claims and promises back to evidence.

It searches across news, parliamentary records, and other public documents to connect what politicians say with related actions and outcomes. The system uses retrieval, NLP, and multi-agent workflows to find relevant evidence and return the sources alongside its response.

The idea behind Receipts is pretty simple: if a claim can be checked against the public record, finding that record shouldn't take hours of searching.

## How it works

A query goes through a retrieval pipeline that identifies the people, topics, and claims involved, searches the relevant sources, ranks the evidence, and uses that evidence to construct a response.

```text
Query
  |
  v
Query + Entity Analysis
  |
  v
Agent Orchestrator
  |
  +---- Parliamentary Records
  +---- News
  +---- Public Documents
  |
  v
Retrieval + Evidence Ranking
  |
  v
Claim / Action Matching
  |
  v
Response + Sources
```

The model is not intended to be the source of truth. Its job is to help find and organize the underlying evidence.

## Features

- Search political claims and promises across multiple sources
- Trace claims to related actions, votes, policies, and outcomes
- Retrieve semantically related evidence even when wording differs
- Classify political claims using a BERT-based model
- Coordinate source-specific retrieval through LangGraph
- Rank evidence before passing context to the generation pipeline
- Preserve source information throughout the retrieval process
- Trace and evaluate model behaviour with Langfuse

## Architecture

Receipts is split into four main parts:

**Data pipeline**

Collects, cleans, and processes news articles, parliamentary records, and other public documents before indexing them for retrieval.

**Retrieval**

Searches the indexed corpus for evidence relevant to a query. Different retrieval paths can be used depending on the type of source being searched.

**Agent workflow**

LangGraph coordinates the retrieval and reasoning steps, including deciding which sources to search and combining evidence returned by different parts of the system.

**API and interface**

FastAPI exposes the backend services and the React frontend provides the user-facing search and evidence interface.

## Current Results

The current dataset contains more than 50,000 news and parliamentary records.

The BERT-based claim classifier achieved an F1 score of 0.88 during evaluation.

The system has also been tested with more than 100 beta users, with retrieval and backend operations running at roughly 200 ms for the measured pipeline.

## Tech Stack

**ML/NLP:** PyTorch, Transformers, BERT, sentence embeddings

**AI:** LangGraph, LangChain, RAG, MCP, Langfuse

**Backend:** Python, FastAPI

**Frontend:** React, TypeScript

**Infrastructure:** AWS, Docker

## Repository Structure

```text
receipts/
├── backend/
│   ├── api/
│   ├── agents/
│   ├── retrieval/
│   ├── models/
│   └── services/
├── frontend/
├── data/
│   ├── ingestion/
│   └── processing/
├── evaluation/
├── tests/
├── docs/
└── README.md
```

## Evaluation

I evaluate the system at different points in the pipeline instead of only looking at the final generated response.

This includes:

- classification F1
- retrieval relevance
- evidence ranking
- source coverage
- response grounding
- latency
- failure cases

The goal is to understand where the system succeeds or fails before information reaches the final response.

## Why I built it

Political information is public, but that doesn't necessarily make it easy to investigate.

A single claim can involve campaign promises, parliamentary proceedings, news coverage, voting records, and events spread across several years. I wanted to explore whether retrieval and language models could make that information easier to navigate while still keeping the original evidence visible.

Receipts is built around that constraint. The system can help search and organize the record, but the user should always be able to inspect the evidence behind its answer.

## Status

Receipts is currently under development. I'm working on expanding the source coverage, improving retrieval evaluation, and making claim-to-action matching more reliable.
