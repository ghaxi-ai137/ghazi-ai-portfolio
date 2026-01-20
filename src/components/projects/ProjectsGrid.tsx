
import { ProjectCard } from "@/components/ProjectCard";
import { NoProjectsFound } from "./NoProjectsFound";
import { Project } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
  view: "grid" | "list";
  setFeaturedProject: (title: string | null) => void;
  featuredProject: string | null;
  clearFilters: () => void;
}

export const ProjectsGrid = ({
  projects,
  view,
  setFeaturedProject,
  featuredProject,
  clearFilters,
}: ProjectsGridProps) => {
  if (projects.length === 0) {
    return <NoProjectsFound clearFilters={clearFilters} />;
  }

  return (
    <div className={view === 'grid' 
      ? 'grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[minmax(300px,auto)]' 
      : 'flex flex-col gap-4'
    }>
      {projects.map((project, index) => {
        // Bento Grid Logic
        let spanClass = "md:col-span-2 lg:col-span-2"; // Default
        
        if (index === 0) {
          spanClass = "md:col-span-4 lg:col-span-4 row-span-2"; // Featured / Large
        } else if (index === 1) {
             spanClass = "md:col-span-2 lg:col-span-2";
        }
        
        return (
        <div key={project.title} className={view === 'grid' ? spanClass : 'w-full'}>
          <ProjectCard 
            project={project} 
            index={index} 
            view={view}
            setFeaturedProject={setFeaturedProject}
            isFeatured={false} // We handle size via grid classes now
          />
        </div>
      )})}
    </div>
  );
};
