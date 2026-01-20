# SOP: "Project Architect" - Portfolio Transformation Protocol

**Objective:** Transform the existing `ghazi-ai-portfolio` codebase (originally Hussam's) into a distinct, high-impact portfolio for **Mohammad Ghazi Ul Islam**.
**Core Constraint:** Do not simply "find and replace" names. The portfolio must reflect Ghazi's specific brand as a **Production-Grade Generative AI Engineer** with a background in **Architecture**.

## Phase 1: Asset & Configuration Setup

*Context: Establish the physical assets before code modification.*

1. **Resume Placement:**
* **Action:** Locate `my-assets/MOHAMMAD-GHAZI-UL-ISLAM-Gen AI.pdf`.
* **Move & Rename:** Move it to `public/resume.pdf` (overwrite the existing file).


2. **Image Placement:**
* **Action:** Locate `my-assets/My-photo-1.jpeg`.
* **Move:** Move it to `public/lovable-uploads/ghazi-profile.jpg`.


3. **Metadata Update:**
* **File:** `index.html`
* **Action:** Change `<title>` tag to `Ghazi - GenAI Engineer`.
* **Action:** Update meta description to "Portfolio of Mohammad Ghazi Ul Islam | Generative AI & Production Engineering."



## Phase 2: Structural & Navigation Changes

*Context: Remove features that Ghazi does not currently have content for (Blogs).*

1. **Deactivate Blog Route:**
* **File:** `src/App.tsx`
* **Action:** Comment out or remove the `<Route path="/blog"... />` and `<Route path="/blog/:slug"... />` lines.


2. **Clean Navigation:**
* **File:** `src/components/Navigation.tsx`
* **Action:** Remove the "Blog" link from the `navItems` array to prevent users from clicking a dead link.



## Phase 3: Content Transformation (The "Production" Persona)

### A. Homepage Hero (`src/components/home/HomepageHero.tsx`)

**Goal:** Shift focus from "Research/Agentic" to "Engineering/Deployment."

* **Update `words` array:**
* Replace "Agent Developer" -> "GenAI Engineer"
* Replace "Voice AI Engineer" -> "Production AI Systems"
* Replace "ML Researcher" -> "Model Orchestration"
* Keep "AI Specialist" or change to "Full Stack AI".



### B. About Section (`src/components/about/AboutHero.tsx`)

**Goal:** Narrative Bridge (Architecture → AI).

* **Image Source:** Update `AvatarImage` `src` to `"/lovable-uploads/ghazi-profile.jpg"`.
* **Name:** Change to "Mohammad **Ghazi** Ul Islam".
* **Bio Rewrite Instruction:**
* *Drafting Guideline:* "Generative AI Engineer combining a Bachelor of Architecture foundation with deep technical expertise in LLMs. Specializes in building end-to-end, production-ready AI pipelines (Docker, FastAPI) that are as structured and robust as the physical systems I used to design."


* **Contact Info:**
* Email: `mohammadghazi.ai137@gmail.com`
* Phone: `+91 9834132494`



### C. Project Portfolio (`src/components/projects/useProjectsData.ts`)

**Goal:** Highlight "How it works" (Infrastructure) over "What it thinks" (Reasoning).

* **Action:** Delete *all* existing entries in the `projects` array and replace with these three specific entries derived from Ghazi's Resume.

**Project 1: AI Voice Assistant / Speech Bot**

* **Tags:** `FastAPI`, `Docker`, `Streamlit`, `Speech-to-Text`.
* **Description:** "A low-latency, real-time voice processing pipeline. Unlike standard chatbots, this system handles continuous audio streams with optimized buffering for natural interruption handling."
* **Key Differentiator (vs. Hussam):** Mention **Docker containerization** and **latency optimization** in the `technicalDetails`.

**Project 2: RAG System (Document Q&A)**

* **Tags:** `LangChain`, `Pinecone`, `LlamaIndex`, `RAG`.
* **Description:** "Production-style RAG pipeline focusing on retrieval accuracy. Implemented chunking strategies and factual grounding to strictly minimize hallucinations in enterprise data contexts."
* **Key Metric:** "Reduced hallucinations via strict evaluation metrics."

**Project 3: GrainSight AI (Shared Project - Ghazi's Angle)**

* **Tags:** `Google ADK`, `Gemini`, `Computer Vision`.
* **Description:** "Grain quality assessment system deployed on edge devices. Focused on the integration of visual models with mobile hardware for field usage."

## Phase 4: Final Polish

1. **Footer (`src/components/common/Footer.tsx`):**
* Update Social Links (LinkedIn/GitHub) to Ghazi's URLs (from resume).
* Update Copyright name.


2. **Resume Download Button (`src/components/about/AboutHero.tsx` or similar):**
* Ensure the "Download Resume" button points to the new `/resume.pdf` location.
