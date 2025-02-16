'use client';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState, useRef } from 'react';
import ProjectCard from "./ProjectCard";
import projects from "./data";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function ProjectSection(): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const timer = setInterval(() => {
        if (scrollRef.current) {
          const nextSlide = (currentSlide + 1) % projects.length;
          setCurrentSlide(nextSlide);
          
          const slideWidth = 320 + 16; // width of card (w-80 = 320px) + gap (gap-4 = 16px)
          scrollRef.current.scrollTo({
            left: nextSlide * slideWidth,
            behavior: 'smooth'
          });
        }
      }, 3000);

      return () => clearInterval(timer);
    }, [currentSlide]); // Remove projects.length from dependencies

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
                        <a 
                        href="https://github.com/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gradient-link underline"
                        >
                        GitHub profile
                        </a>
                        , where I experiment with new technologies and contribute to the developer community.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm pb-10">
                        <Link href="/projects" className="text-blue-600 hover:text-purple-600 flex items-center group">
                          <span className="underline group-hover:no-underline">
                            View all projects
                          </span>
                          <MdOutlineDoubleArrow className="ml-2" />
                        </Link>
                        <Link href="/contact" className="text-sm relative flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors overflow-hidden">
                        {/* <HiUsers size={20} /> */}
                        Hire Me
                        <div className="absolute inset-0 flex w-full animate-shine-infinite blur-[12px]">
                        <div className="relative h-full w-8 bg-white/30"></div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className='hidden lg:grid gap-4 px-10 justify-end'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} className="grid w-80 -skew-x-6" />
                ))}               
            </div>

            {/* Mobile View - Horizontal Carousel */}
            <div className="lg:hidden relative overflow-x-auto scrollbar-hide">
                <div ref={scrollRef} className="flex gap-4 pb-4 snap-x snap-mandatory scroll-smooth">
                    {projects.map((project, index) => (
                        <div 
                        key={index}
                        className={`snap-center flex-none w-80 transition-opacity duration-500 ${
                            currentSlide === index ? 'opacity-100' : 'opacity-70'
                        }`}
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