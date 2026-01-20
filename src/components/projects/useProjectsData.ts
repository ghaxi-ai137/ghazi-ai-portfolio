import { useState } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  date: string;
  category: string;
  github?: string;
  liveDemo?: string;
  status?: string;
  metrics?: Record<string, string>;
  architecture?: string;
  technicalDetails?: string;
  implementationChallenges?: string;
  isWinner?: boolean;
  winnerDetails?: {
    hackathon: string;
    date: string;
    achievement: string;
    judges?: string[];
    prize?: string;
  };
}

export const useProjectsData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [featuredProject, setFeaturedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "AI Voice Assistant / Speech Bot",
      description: "A low-latency, real-time voice processing pipeline. Unlike standard chatbots, this system handles continuous audio streams with optimized buffering for natural interruption handling.",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=800&q=80&auto=format&fit=crop",
      tech: ["FastAPI", "Docker", "Streamlit", "Speech-to-Text"],
      features: [
        "Real-time voice processing",
        "Optimized buffering",
        "Natural interruption handling",
        "Low latency (<500ms)",
        "Docker containerized",
        "Streamlit interface"
      ],
      date: "2024",
      category: "ai",
      status: "completed",
      metrics: {
        latency: "<500ms response time",
        uptime: "99.9% availability"
      },
      architecture: "Built on FastAPI for high-performance async processing, containerized with Docker for consistent deployment. Uses WebSockets for real-time audio streaming.",
      technicalDetails: "Focus on latency optimization and Docker containerization. Implements a custom buffering strategy to handle interruptions naturally."
    },
    {
      title: "RAG System (Document Q&A)",
      description: "Production-style RAG pipeline focusing on retrieval accuracy. Implemented chunking strategies and factual grounding to strictly minimize hallucinations in enterprise data contexts.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
      tech: ["LangChain", "Pinecone", "LlamaIndex", "RAG"],
      features: [
        "High retrieval accuracy",
        "Advanced chunking strategies",
        "Hallucination minimization",
        "Enterprise data context",
        "Factual grounding checks"
      ],
      date: "2024",
      category: "ai",
      status: "completed",
      metrics: {
        accuracy: "Strict evaluation metrics",
        hallucinationRate: "Significantly reduced"
      },
      architecture: "Utilizes LangChain for orchestration, Pinecone for vector storage, and LlamaIndex for advanced indexing strategies.",
      technicalDetails: "Implemented strict evaluation metrics to reduce hallucinations. Uses hybrid search and re-ranking to improve retrieval quality."
    },
    {
      title: "GrainSight AI",
      description: "Grain quality assessment system deployed on edge devices. Focused on the integration of visual models with mobile hardware for field usage.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop",
      tech: ["Google ADK", "Gemini", "Computer Vision"],
      features: [
        "Edge device deployment",
        "Mobile hardware integration",
        "Real-time quality assessment",
        "Field usage optimization"
      ],
      date: "2024",
      category: "ai",
      status: "completed",
      metrics: {
        efficiency: "Optimized for mobile"
      },
      architecture: "Integrates visual models with mobile hardware using Google ADK.",
      technicalDetails: "Focused on ensuring efficient performance on edge devices while maintaining accuracy using Gemini visual models.",
      isWinner: true,
      winnerDetails: {
        hackathon: "The Better Hack",
        date: "2024",
        achievement: "First Place Winner"
      }
    },
    {
      title: "Sales Intelligence Agent",
      description: "Autonomous multi-agent system that researches leads, scores them based on ICP fit, and drafts personalized outreach emails using real-time web data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      tech: ["CrewAI", "SerperDev", "OpenAI", "LangChain"],
      features: [
        "Automated lead research",
        "Multi-agent collaboration",
        "ICP scoring algorithm",
        "Personalized email drafting",
        "Real-time web scraping"
      ],
      date: "2024",
      category: "agent",
      status: "completed",
      metrics: {
        efficiency: "Automated 80% of research",
        responseRate: "40% increase in replies"
      },
      architecture: "Orchestrated using CrewAI with specialized agents for research, analysis, and writing. Integrates SerperDev for web search and OpenAI for synthesis.",
      technicalDetails: "Focus on preventing agent loops and ensuring reliable structured output for CRM integration."
    },
    {
      title: "Multilingual Voice Translator",
      description: "Real-time speech-to-speech translation system supporting Hindi, English, and Arabic. Features voice cloning to maintain speaker identity across languages.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da9e2dc6?w=800&q=80&auto=format&fit=crop",
      tech: ["Whisper", "ElevenLabs", "WebSockets", "PyTorch"],
      features: [
        "Real-time translation",
        "Voice cloning",
        "Cross-lingual support",
        "Low latency pipeline",
        "WebSocket streaming"
      ],
      date: "2025",
      category: "voice",
      status: "in-progress",
      metrics: {
        latency: "<2s end-to-end",
        accuracy: "95% BLEU score"
      },
      architecture: "Pipeline: Audio Input -> Whisper STT -> Translation LLM -> ElevenLabs TTS -> Audio Output. Connected via WebSockets for full-duplex communication.",
      technicalDetails: "Optimized for concurrency to handle multiple translation streams simultaneously without blocking."
    }
  ];

  const allSkills = Array.from(
    new Set(projects.flatMap(project => project.tech))
  ).sort();

  const filterProjects = (projects: Project[], tab: string, searchTerm: string, selectedSkills: string[]) => {
    return projects.filter(project => {
      const matchesTab = tab === "all" || project.category === tab;
      const matchesSearch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSkills = selectedSkills.length === 0 || 
        selectedSkills.every(skill => project.tech.includes(skill));
      
      return matchesTab && matchesSearch && matchesSkills;
    });
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
  };

  return {
    projects,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    allSkills,
    toggleSkill,
    clearFilters,
    view,
    setView,
    featuredProject,
    setFeaturedProject,
    activeTab,
    setActiveTab,
    filterProjects
  };
};
