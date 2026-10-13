# RECEIPTS.

### Nigeria's public record, connected.

**An AI-native political intelligence and investigative journalism platform for Nigeria.**

*Every headline has a history. Every promise has a record. Follow the evidence.*

---

## The Idea

What did a politician actually promise? What did they say five years ago? What happened after they took office? And where can you find the original evidence?

Answering these questions shouldn't require searching through years of newspaper archives, government PDFs, television interviews, campaign speeches, and social-media posts.

Yet much of Nigeria's political history exists across exactly those fragmented sources.

**Receipts is being built to connect them.**

Receipts is a multimodal, AI-powered political intelligence platform that brings together public statements, campaign commitments, government records, independent journalism, and historical evidence into one searchable, explorable public record.

It is designed to help Nigerians investigate political claims, understand public officials' records, follow developing stories, and make sense of the relationships between people, policies, promises, and outcomes.

The 2027 Nigerian election cycle is an important initial focus. The larger ambition is to build a lasting public-interest research platform for Nigeria.

## What We're Building

### 01 / The Record

**The people. The promises. The public record.**

Explore evidence-backed dossiers on Nigerian public officials, presidential candidates, governors, legislators, and other political actors.

Each dossier is designed to connect:

- Offices held and political timelines
- Campaign manifestos and public commitments
- Speeches, interviews, and official statements
- Government policies and documented actions
- Budgets, legislation, and public projects
- Available implementation and outcome evidence
- Investigations and related reporting

Receipts distinguishes between what was promised, announced, budgeted, released, spent, implemented, and independently documented.

### 02 / Ask Receipts

**Ask a question. Follow the sources.**

An AI research assistant for exploring Nigerian public affairs.

Ask what a politician said about a particular issue, how their public statements evolved, or which records relate to a policy commitment.

The system is designed to retrieve relevant primary and secondary evidence, generate grounded explanations, and link users directly to the underlying sources.

Every substantive answer should be traceable to evidence. When records are incomplete, the system should say so.

### 03 / The Check

**Everybody has claims. We find the receipts.**

Investigate political statements, viral posts, interview excerpts, screenshots, and news claims.

Receipts aims to identify the original statement, retrieve relevant records, distinguish independent corroboration from repeated reporting, and explain what the available evidence establishes.

### 04 / The Brief

**Nigeria, beyond the headline.**

A mobile-first editorial experience covering important developments in Nigerian politics, government, the economy, public services, and society.

Each story connects today's news to relevant historical context, public officials, documents, and previous reporting.

### 05 / The Files

**Investigations built on evidence.**

Long-form, source-backed investigative journalism combining original documents, timelines, data analysis, public statements, and transparent research methodology.

### 06 / The Web

**Nothing happens in isolation.**

An interactive knowledge graph connecting politicians, institutions, policies, promises, budgets, public projects, statements, events, and investigations.

Explore not only what happened, but how different parts of the public record relate to one another.

### 07 / Play Receipts

**Read the claim. Examine the evidence. Make your case.**

Interactive investigations based on real Nigerian political records.

Players examine authentic sources, reconstruct timelines, identify missing context, and practice evidence-based reasoning.

The objective is not to score politicians or tell people how to vote. It is to make careful political research accessible and engaging.

### 08 / Election 2027

A dedicated election intelligence hub connecting candidate records, published policy positions, campaign commitments, election reporting, claim verification, and official voter information.

---

## The Intelligence Behind Receipts

At the heart of the platform is the **Receipts Evidence Engine**: a multimodal ingestion, retrieval, and evidence-linking system.

Unlike a conventional news aggregator, Receipts is designed to search beyond published articles.

Its intended sources include:

| Source | Evidence extracted |
|---|---|
| Official social-media posts | Statements, dates, authorship, linked media |
| Speeches and press conferences | Claims, commitments, timestamps |
| Television and online interviews | Transcripts, speakers, relevant passages |
| Government documents | Policies, announcements, reports |
| Budgets and public expenditure records | Allocations, releases, expenditure, projects |
| Campaign manifestos | Commitments and policy proposals |
| Legislative and election records | Proceedings, official notices, candidate information |
| Independent journalism | Context, scrutiny, corroboration, investigations |

Source access depends on permissions, licensing, availability, and platform restrictions.

### System Architecture

```text
             HISTORICAL ARCHIVES
                     +
            NEWLY PUBLISHED SOURCES
                     |
                     v
              SOURCE CONNECTORS
                     |
                     v
          DURABLE INGESTION PIPELINE
          /          |           \
         v           v            v
      Documents    Audio/Video   Social Posts
         |           |            |
         +-----------+------------+
                     |
                     v
           MULTIMODAL EXTRACTION
       Transcription / Parsing / OCR
       Entities / Claims / Timestamps
                     |
                     v
          VERSIONED EVIDENCE STORE
                     |
          +----------+----------+
          |                     |
          v                     v
     SEARCH INDEX          EVIDENCE GRAPH
   BM25 / Embeddings      Entity Relationships
          |                     |
          +----------+----------+
                     |
                     v
             QUERY UNDERSTANDING
                     |
                     v
          HYBRID RETRIEVAL + RERANKING
                     |
                     v
           GROUNDED AI SYNTHESIS
                     |
                     v
        CITED ANSWERS / DOSSIERS /
       TIMELINES / CLAIM CHECKS /
          INTERACTIVE STORIES
```

### Research and Engineering Challenges

**Multimodal retrieval:** How can one search system retrieve relevant evidence from text documents, social posts, interview transcripts, and recorded speeches?

**Temporal reasoning:** How can the system distinguish what a politician said during a campaign from what they said or did years later?

**Entity resolution:** How can references such as names, titles, abbreviations, and aliases be connected without incorrectly merging different people?

**Source provenance:** How can the system identify original statements and avoid counting multiple reports of the same source as independent confirmation?

**Neural ranking:** How do lexical, dense, hybrid, and reranking approaches compare on Nigerian political research queries?

**Grounded generation:** How can an AI assistant synthesize evidence while minimizing unsupported statements and preserving verifiable citations?

**Incremental indexing:** How can newly published material become searchable without rebuilding the entire historical corpus?

---

## Proposed Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Backend | Python, FastAPI, Pydantic |
| Data | PostgreSQL, pgvector |
| Search | BM25, dense retrieval, hybrid ranking |
| Machine Learning | PyTorch, Hugging Face, Sentence Transformers |
| Multimodal Processing | Speech recognition, document parsing, OCR |
| Graph | Relational evidence graph; Neo4j under evaluation |
| Background Processing | Redis-backed workers |
| Infrastructure | Docker, CI/CD, automated testing, observability |

The architecture will evolve based on implementation needs and measured performance.

## Search and ML Evaluation

Receipts is intended to support reproducible experiments, not just AI-generated demonstrations.

Planned evaluations include:

| Component | Metrics |
|---|---|
| Retrieval | Recall@K, MRR, nDCG@10 |
| Ranking | Relevance improvement, p50/p95 latency |
| Entity extraction | Precision, recall, F1 |
| Speech processing | Word error rate, speaker attribution accuracy |
| Evidence grounding | Citation correctness, unsupported-claim rate |
| Ingestion | Success rate, duplicate rate, indexing lag |
| Reliability | Availability, failure recovery, cost per query |

A key research objective is to develop a human-labeled benchmark of Nigerian political information retrieval queries and their supporting evidence.

Results will be published only after experiments have been run and validated.

## Product Design

Receipts combines the visual language of contemporary investigative journalism with interactive data exploration.

Design principles:

- Editorial typography and newspaper-inspired layouts
- Warm archival ivory, charcoal, vermilion, and restrained brass
- Sharp edges and square interactive controls
- Source-first interfaces
- Mobile-first navigation and reading
- Accessible, responsive document viewers
- Interactive timelines and connected-story visualizations
- Recognizable, shareable evidence cards

Nigerian identity comes from the subject matter, editorial voice, and public-record experience—not simply the use of national colors.

## Trust, Neutrality, and Editorial Integrity

Receipts is designed to inform, not persuade users toward political candidates or parties.

Core principles:

1. **Evidence before conclusions.** Claims must be supported by inspectable sources.
2. **Primary sources matter.** Original statements and documents should be accessible whenever possible.
3. **Statements are not proof.** An official statement is evidence of what was said, not automatic confirmation that its claims are true.
4. **Context matters.** Dates, responsibilities, historical conditions, and limitations must be preserved.
5. **Uncertainty is explicit.** Missing evidence should never be replaced with invented certainty.
6. **Corrections are visible.** Published findings should support transparent corrections and revisions.
7. **AI is accountable.** Generated analysis must be distinguishable from editorially reviewed reporting.
8. **Political independence.** Receipts does not endorse candidates or produce overall politician rankings.

## Development Roadmap

**Foundation**
- Mobile-first design system
- Application architecture
- Evidence data model
- Testing and deployment

**Evidence Engine**
- Source registry
- Historical and incremental ingestion
- Multimodal extraction
- Provenance-aware storage

**Search & AI**
- Lexical and neural retrieval
- Hybrid ranking and evaluation
- Query understanding
- Citation-grounded Ask Receipts

**Political Intelligence**
- Source-backed politician dossiers
- Statement timelines
- Promise extraction and evidence linking
- Candidate comparisons

**Public Experience**
- The Brief
- The Files
- The Check
- The Web
- Play Receipts
- Election 2027

These milestones describe development priorities, not reductions to the final product vision.

## Project Status

**Active development — pre-release.**

Receipts is being built toward public deployment. Features described above represent the intended product unless explicitly documented as implemented.

Implementation progress, benchmarks, and deployment links will be added as they become available.

## Research & Technical Writing

Receipts will also serve as a practical research environment for studying:

- Multimodal political information retrieval
- Source-aware retrieval-augmented generation
- Temporal claim and promise extraction
- Evidence provenance and deduplication
- Nigerian political NLP and entity resolution
- Search relevance and latency trade-offs

Technical experiments, engineering write-ups, and reproducible benchmarks will be published as the project develops.

## Contributing

Contribution guidelines and the initial issue backlog will be published as the codebase matures.

Researchers, engineers, journalists, and civic-technology contributors interested in trustworthy public-information systems are welcome to follow the project.

## License

License to be determined. Source code, datasets, third-party content, and editorial material may require different licensing arrangements.

---

**RECEIPTS.**

*The news. The promises. The people. The evidence connecting it all.*
