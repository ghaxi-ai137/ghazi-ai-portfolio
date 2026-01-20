
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 0,
      title: "AI Voice Assistant & Speech Bot",
      description: "Real-time voice conversational agent built with FastAPI, Docker, and Streamlit. Features low-latency speech-to-text and text-to-speech pipelines.",
      image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1000",
      tags: ["FastAPI", "Docker", "Voice AI"],
      link: "/projects",
      date: "2025",
      isWinner: false
    },
    {
      id: 1,
      title: "Enterprise RAG System",
      description: "Document Q&A system using LangChain and Pinecone. Handles large-scale document ingestion and retrieval with high accuracy.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
      tags: ["LangChain", "RAG", "Pinecone"],
      link: "/projects",
      date: "2025",
      isWinner: false
    },
    {
      id: 2,
      title: "GrainSight AI - Quality Analysis",
      description: "Computer vision solution for grain quality assessment using Google ADK and Gemini. Deployed on edge devices for real-time analysis.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000",
      tags: ["Hackathon Winner", "Computer Vision", "Edge AI", "Gemini"],
      link: "/projects",
      date: "2025",
      isWinner: true
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="featured-projects"
      className="py-20 md:py-24 px-4 bg-gradient-to-b from-background to-primary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.h2 variants={item} className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Selected Works
            </motion.h2>
            <motion.h3 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
              Production-Grade Projects
            </motion.h3>
            <motion.p variants={item} className="text-muted-foreground">
              End-to-end AI systems built for scale, reliability, and real-world impact.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="outline" className="gap-2">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring" }}
            >
              <Card className={`overflow-hidden h-full border border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${project.isWinner ? 'border-yellow-400/50 ring-1 ring-yellow-400/20' : 'hover:border-primary/50'}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  {project.isWinner && (
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-amber-600 text-white px-3 py-1 flex items-center gap-1 shadow-lg">
                      <Trophy className="h-3 w-3" />
                      <span className="text-xs font-bold">HACKATHON WINNER</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">{project.date}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className={`${project.isWinner && tag === 'Hackathon Winner' ? 'bg-yellow-400/10 text-yellow-700 border-yellow-400/30' : 'bg-primary/5'}`}>
                        {tag === 'Hackathon Winner' && <Trophy className="h-3 w-3 mr-1" />}
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild variant="ghost" size="sm" className={`gap-1 p-0 ${project.isWinner ? 'hover:bg-yellow-400/10 hover:text-yellow-700' : 'hover:bg-primary/10 hover:text-primary'}`}>
                      <Link to={project.link}>
                        Learn More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
