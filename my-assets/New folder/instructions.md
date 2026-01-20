# SOP: Portfolio Transformation (Hussam -> Ghazi)

**Objective:** Refactor the existing React codebase to reflect Ghazi's "Production AI" persona, using a Bento Grid layout structure.

## Phase 1: Assets & Cleanup
1.  **Resume:** Move `my-assets/MOHAMMAD-GHAZI-UL-ISLAM-Gen AI.pdf` to `public/resume.pdf`.
2.  **Images:** Move `my-assets/My-photo-1.jpeg` to `public/profile.jpg`.
3.  **Blog Removal:**
    * Delete `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx`.
    * Remove "Blog" routes from `App.tsx` and "Blog" links from `Navigation.tsx`.

## Phase 2: Narrative & Copy (Crucial)
**File:** `src/components/home/HomepageHero.tsx` & `AboutHero.tsx`
* **Name:** "Mohammad Ghazi Ul Islam"
* **Role:** "Generative AI Engineer | System Architect"
* **Bio Rewrite:** "Bridging the gap between architectural design and AI infrastructure. I build production-ready, containerized GenAI systems (RAG, Agents) with the same precision I applied to physical structures. Focus: Docker, FastAPI, Latency Optimization."

## Phase 3: Project Data Overhaul
**File:** `src/components/projects/useProjectsData.ts`
* **Action:** DELETE all existing projects. INSERT only these 3:
    1.  **AI Voice Assistant:** Focus on "FastAPI," "WebSockets," and "Latency <500ms."
    2.  **Enterprise RAG Pipeline:** Focus on "Document Chunking," "Vector Database Optimization," and "Hallucination Control."
    3.  **GrainSight AI (Edge Deployment):** Focus on "Mobile Optimization" and "Computer Vision on Edge."

## Phase 4: Visuals (The Bento Grid)
* Refactor the `ProjectsGrid.tsx` to use CSS Grid (`grid-template-columns`) with variable spanning rows/cols for a "Bento" look.
* Apply the Dark Mode Zinc palette from `guidelines.md`.