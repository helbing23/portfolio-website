import { Project } from "@/types/project";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
    project: Project;
    className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
    return (
        <div 
            tabIndex={0} 
            className={`flex flex-col h-[400px] rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gradient-gray border border-white-100/[0.2] ${className}`}
        >
            <div className="relative w-full h-48">
                <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            <div className="flex flex-col flex-grow">
                <h3 className="text-sm dark:text-gray-200 font-semibold my-2">{project.title}</h3>
                <p className="text-gray-400 dark:text-gray-300 text-xs flex-grow">{project.description}</p>
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies?.map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full text-xs">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                                className="gradient-button px-3 py-1 rounded-md text-xs">View</a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                className="gradient-button px-3 py-1 rounded-md text-xs text-gray-500 hover:text-gray-700">GitHub</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;