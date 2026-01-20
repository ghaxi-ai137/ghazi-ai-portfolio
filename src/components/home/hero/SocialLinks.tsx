
import { Github, Linkedin, Mail, Smile, Download } from "lucide-react";

interface SocialLinksProps {
  vertical?: boolean;
}

export const SocialLinks = ({ vertical = false }: SocialLinksProps) => (
  <>
    <a 
      href="https://github.com/ghazi-ai137" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
      aria-label="GitHub"
    >
      <Github className="h-5 w-5" />
    </a>
    <a 
      href="https://linkedin.com/in/mohammad-ghazi-ul-islam" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
      aria-label="LinkedIn"
    >
      <Linkedin className="h-5 w-5" />
    </a>
    <a 
      href="mailto:mohammadghazi.ai137@gmail.com"
      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
      aria-label="Email"
    >
      <Mail className="h-5 w-5" />
    </a>
    <a 
      href="https://huggingface.co/ghazi-ai137" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
      aria-label="Hugging Face"
    >
      <Smile className="h-5 w-5" />
    </a>
    <a 
      href="/resume.pdf"
      download
      className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
      aria-label="Download Resume"
    >
      <Download className="h-5 w-5" />
    </a>
  </>
);
