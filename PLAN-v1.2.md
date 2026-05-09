# DClaw Knowledge — v1.2 Feature Roadmap

> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (outline, bookstack), AI product research (Notion AI, Guru, Tettra, Slab)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Wiki/page CRUD
- [ ] Hierarchical organization
- [ ] Search
- [ ] Basic permissions
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Knowledge Copilot (Answer Engine)
**Description:** AI assistant that answers questions from company wiki, finds relevant docs, and suggests updates. "What's our PTO policy for remote employees?"
- **AI Angle:** RAG over wiki content. Semantic search. Answer generation with source links.
- **Backend:** `/api/v1/ai/knowledge-chat` endpoint. Vector index of all pages.
- **Frontend:** Chat widget in wiki sidebar. Inline Q&A on any page.
- **Files:** `backend/app/services/knowledge_ai.py`, `frontend/src/components/knowledge-copilot.tsx`

#### 2. Smart Wiki Editor
**Description:** Rich text editor with AI assist: auto-complete, summarize, translate, and improve writing.
- **AI Angle:** Inline LLM suggestions. Grammar and clarity improvement.
- **Backend:** `/api/v1/ai/enhance` endpoint.
- **Frontend:** Editor with AI toolbar. Slash commands.
- **Files:** `frontend/src/components/smart-editor.tsx`

#### 3. Semantic Search & Discovery
**Description:** Find relevant content even when keywords don't match. Discover related articles automatically.
- **Backend:** Semantic search with embeddings. Related content recommendation.
- **Frontend:** Search results with relevance scores. "Related articles" sidebar.
- **Files:** `backend/app/services/semantic_search.py`

#### 4. Knowledge Health Dashboard
**Description:** Identify stale content, orphaned pages, missing topics, and knowledge gaps.
- **Backend:** Content freshness analysis. Gap detection.
- **Frontend:** Health score with actionable improvements.
- **Files:** `backend/app/services/health_check.py`

### P1 — Should Have (v1.1–1.2)

#### 5. AI Content Generation
**Description:** Generate wiki pages from outlines, meeting notes, or existing documents.
- **AI Angle:** LLM page generation with structure and formatting.
- **Backend:** `/api/v1/ai/generate-page` endpoint.
- **Frontend:** Page generator wizard.

#### 6. Version History & Diff
**Description:** Full version control for wiki pages. Diff view. Restore previous versions.
- **Backend:** Version store with diff calculation.
- **Frontend:** Timeline view with diff preview.

#### 7. Permissions & Access Control
**Description:** Granular permissions: page-level, collection-level, role-based.
- **Backend:** RBAC engine with inheritance.
- **Frontend:** Permission matrix editor.

#### 8. Integration Hub (Slack, Notion, Confluence)
**Description:** Sync with external tools. Slack bot for Q&A. Notion/Confluence import.
- **Backend:** Import/export adapters. Slack bot handler.
- **Frontend:** Integration settings with sync status.

### P2 — Could Have (v1.3+)

#### 9. AI Knowledge Gap Filler
**Description:** AI identifies missing topics and auto-generates stub pages for human completion.

#### 10. Video-to-Wiki Auto-Transcription
**Description:** Upload training videos. Auto-transcribe, summarize, and create wiki pages.

#### 11. Expert Finder
**Description:** Identify subject matter experts based on their contributions and mentions.

#### 12. Knowledge Graph Visualization
**Description:** Interactive graph of topics, people, and documents with relationship exploration.

---

## Implementation Priority

1. **Week 1–2:** AI Knowledge Copilot (P0.1) + Smart Editor (P0.2)
2. **Week 3–4:** Semantic Search (P0.3) + Health Dashboard (P0.4)
3. **Week 5–6:** AI Content Generation (P1.5) + Version History (P1.6)
4. **Week 7–8:** Permissions (P1.7) + Integration Hub (P1.8)
