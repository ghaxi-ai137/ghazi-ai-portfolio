import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
export const AboutHero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  const skills = ["AI Specialist", "Agent Development", "Voice AI", "RAG", "ML Engineering"];
  return <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-primary-100/50 dark:from-primary/10 dark:to-primary-900/20 opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-100/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="show">
          <motion.div variants={itemVariants} className="flex-shrink-0 py-[9px]">
            <Avatar className="h-32 w-32 md:h-48 md:w-48 border-4 border-white/90 shadow-xl">
              <AvatarImage alt="Mohammad Ghazi Ul Islam" src="/lovable-uploads/ghazi-profile-professional.png" />
              <AvatarFallback className="text-3xl font-bold bg-primary/20 text-primary">MG</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Mohammad <span className="text-primary">Ghazi</span> Ul Islam
              </h1>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, index) => <motion.div key={skill} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.5 + index * 0.1
              }}>
                    <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30 text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>)}
              </div>
            </motion.div>
            
            <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl" variants={itemVariants}>
              Generative AI Engineer combining a Bachelor of Architecture foundation with deep technical expertise in LLMs. Specializes in building end-to-end, production-ready AI pipelines (Docker, FastAPI) that are as structured and robust as the physical systems I used to design.
            </motion.p>
            
            <motion.div className="flex items-center gap-2 text-primary" variants={itemVariants}>
              <span className="text-sm font-medium flex items-center">
                📧 mohammadghazi.ai137@gmail.com
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium flex items-center">
                📞 +91 9834132494
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>;
};