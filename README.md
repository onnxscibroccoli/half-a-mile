# Half a Mile

**Status:** Published long-form web application / active editorial project  
**Repository:** `onnxscibroccoli/half-a-mile`  
**Documentation snapshot:** 2026-09-28 23:12 EDT

Half a Mile is a sourced long-form essay and publishing application concerning the Virginia case of Karyann Parkinson and the legal treatment of reasonable childhood independence.

## What it does

The project publishes three primary surfaces: the essay, the cited law, and the supporting sources/record. The application combines editorial content with a React web application and a generated static publication.

The project explicitly says it is not legal advice.

## Repository map

Approximately 137 tracked files are present.

- `src/` — React/TanStack application.
- `src/components/` — article, citation, statute, preview, and site components.
- `src/lib/` — application data, authentication, database, sources, statutes, readiness, and multiplayer code.
- `scripts/` — build, browser smoke, auth invariant, migration, preview, PWA, and static-page tooling.
- `docs/` — static published snapshot.
- `public/` — web/PWA assets.
- `migrations/` — authentication schema.
- deployment configuration in `vercel.json` and Vite/TypeScript configuration.

## Development cycle

**PUBLISHED / ACTIVE MAINTENANCE.**

Recent history documents a live Vercel deployment and a GitHub Pages static publication. Engineering work continues around publishing, browser behavior, authentication, and content.

## Development

```bash
npm install
npm run dev
npm run build
npm run build:pages
```

`npm run build:pages` produces the static publication under `docs/`.

## AI model instructions

For editorial changes, read the source material before modifying claims. Preserve primary legal text and citations, distinguish reporting from argument, and never invent authorities.

For engineering changes, inspect the relevant `src/` and `scripts/` files, run tests, and verify the generated static output when publication behavior changes.

An AI should not silently alter the substance of the published essay while performing unrelated engineering work.

**Bottom line:** a live, source-oriented publishing application with dynamic and static delivery.


## Cross-Repository Knowledge Graph

**GRAPH TAG: `OMNIKALI-KG-2026-09-28`**

This repository participates in the OmniKali cross-project knowledge graph. **Future AI agents MUST read the graph before making cross-repository architectural changes.** It records repository ownership, dependencies, validated evidence, known failure modes, development state, and consolidation rules.

Graph file: [`.omnikali/project-knowledge-graph.md`](.omnikali/project-knowledge-graph.md)

**Agent rule:** do not treat this README or repository name as proof of runtime capability. Verify against tests, acceptance evidence, production contracts, and live behavior. Preserve restore points before risky changes, make the smallest atomic change, record evidence and timestamps, and update the graph whenever architecture, ownership, dependencies, proof, or failure knowledge changes.
