'use client';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState, useRef } from 'react';
import ProjectCard from "./ProjectCard";
import projects from "./data";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function ProjectSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
            behavior: 'smooth'
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
    <ReactLenis root>
      <section className='py-10 max-w-5xl mx-auto'>
        <div className='grid lg:grid-cols-2'>
          <div className='lg:sticky lg:top-0 lg:h-screen flex items-center justify-center'>
            <div className="md:w-full">
              <h2 className="text-3xl font-bold mb-8">My Work</h2>
              <p className="mb-6">
                Here&apos;s an overview of my freelance projects where I&apos;ve provided end-to-end web development solutions. 
                These showcase my expertise in delivering comprehensive services, from logo design to SEO optimization, 
                helping small businesses and startups establish their digital presence.
              </p>
              <p className="mb-6">
                While these projects represent my professional client work, you can explore my personal projects and 
                open-source contributions on my{' '}
                <Link 
                  href="https://github.com/helbing23" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gradient-link underline"
                >
                  GitHub profile
                </Link>
                , where I experiment with new technologies and contribute to the developer community.
              </p>
              <div className="flex flex-wrap gap-4 text-sm pb-10">
                <Link 
                  href="/projects" 
                  className="text-blue-600 hover:text-purple-600 flex items-center group"
                >
                  <span className="underline group-hover:no-underline">
                    View all projects
                  </span>
                  <MdOutlineDoubleArrow className="ml-2" />
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm relative flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors overflow-hidden"
                >
                  Hire Me
                  <div className="absolute inset-0 flex w-full animate-shine-infinite blur-[12px]">
                    <div className="relative h-full w-8 bg-white/30" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className='hidden lg:grid gap-4 px-10 justify-end'>
            {projects.map((project, index) => (
              <ProjectCard 
                key={`desktop-${project.title}-${index}`}
                project={project} 
                className="grid w-80 -skew-x-6" 
              />
            ))}               
          </div>

          {/* Mobile Carousel */}

          <div className="lg:hidden relative overflow-x-auto snap-mandatory">
            <div 
              ref={scrollRef}
              className="flex gap-4 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{
                scrollSnapType: 'x mandatory',
                overflowX: 'scroll',
                scrollBehavior: 'smooth'
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={`mobile-${project.title}-${index}`}
                  className="snap-center flex-none transition-opacity duration-300"
                  style={{
                    width: `calc(90vw - 2rem)`,
                    marginLeft: index === 0 ? '1rem' : 0,
                    marginRight: index === projects.length - 1 ? '1rem' : 0,
                    opacity: currentSlide === index ? 1 : 0.7
                  }}
                >
                  <ProjectCard project={project} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}