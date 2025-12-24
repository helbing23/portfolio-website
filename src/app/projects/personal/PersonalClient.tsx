"use client";

import { useEffect, useState, useRef } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/project-data";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function PersonalClient() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Project categories
    const personalProjects = projects.filter(project => project.category === "Personal");

    // Constants
    const SLIDE_INTERVAL = 5000;
    const SLIDE_WIDTH = 320 + 16; // width + gap

    // Auto-scroll functionality
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (!isDragging) {
            intervalId = setInterval(() => {
                const nextSlide = (currentSlide + 1) % projects.length;
                setCurrentSlide(nextSlide);
                if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                        left: nextSlide * SLIDE_WIDTH,
                        behavior: "smooth"
                    });
                }
            }, SLIDE_INTERVAL);
        }
        return () => clearInterval(intervalId);
    }, [currentSlide, isDragging, SLIDE_WIDTH]);

    // Touch handlers
    const handleTouchStart = () => {
        setIsDragging(true);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <section className="py-20 px-4 max-w-5xl mx-auto">

            {/* Personal Section */}
            <div>
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
                    <p className="mb-6">
                        These are my personal projects, including this portfolio website and other professional development projects
                        that I have done as part of my learning journey.
                    </p>
                </div>
                <div className="hidden lg:grid grid-cols-3 gap-4">
                    {personalProjects.map((project, index) => (
                        <ProjectCard
                            key={`personal-${project.title}-${index}`}
                            project={project}
                            className="w-full"
                        />
                    ))}
                </div>
                <div className="lg:hidden relative overflow-x-auto snap-mandatory">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        style={{
                            scrollSnapType: "x mandatory",
                            overflowX: "scroll",
                            scrollBehavior: "smooth"
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {personalProjects.slice(0, 6).map((project, index) => (
                            <div
                                key={`mobile-personal-${project.title}-${index}`}
                                className="snap-center flex-none transition-opacity duration-300"
                                style={{
                                    width: `calc(90vw - 2rem)`,
                                    marginLeft: index === 0 ? "1rem" : 0,
                                    marginRight: index === 5 ? "1rem" : 0,
                                    opacity: currentSlide === index ? 1 : 0.7
                                }}
                            >
                                <ProjectCard project={project} className="w-full" />
                            </div>
                        ))}
                    </div>
                </div>
                <Link
                    href="/projects"
                    className="mt-6 text-blue-600 hover:text-purple-600 flex items-center group"
                >
                    <MdOutlineDoubleArrow className="mr-2 transform rotate-180" />
                    <span className="underline group-hover:no-underline">
                        Back
                    </span>
                </Link>
            </div>
        </section>
    );
}
