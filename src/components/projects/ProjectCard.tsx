// ProjectCard.tsx
import { Project } from "@/types/project";
import Link from "next/link";
import React from "react";
import AnimatedProjectPreview from "./AnimatedProjectPreview";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div 
      tabIndex={0}
      className={`flex flex-col h-[400px] rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-white-100/[0.2] ${className}`}
    >
      <div className="relative w-full h-48">
        <AnimatedProjectPreview
          staticImage={project.imageUrl}
          animatedGif={project.previewGif}
          alt={project.title}
          className="rounded-xl"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm dark:text-gray-200 font-semibold my-2">
          {project.title}
        </h3>
        <p className="text-gray-400 dark:text-gray-300 text-xs flex-grow mb-1">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button px-3 py-1 rounded-md text-xs"
              >
                View
              </Link>
            )}
            {project.githubUrl && (
              <Link 
                href={project.githubUrl}  
                target="_blank" 
                rel="noopener noreferrer"
                className="gradient-button px-3 py-1 rounded-md text-xs text-gray-500 hover:text-gray-700"
              >
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;