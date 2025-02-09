'use client';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState, useRef } from 'react';
import ProjectCard from "./ProjectCard";
import projects from "./data";

export default function ProjectSection(): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout>();
    
    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
    
      const calculateSlidePosition = () => {
        const cardWidth = 320; // Width of each card (w-80 = 20rem = 320px)
        const gap = 16; // Gap between cards (gap-4 = 1rem = 16px)
        return (cardWidth + gap) * currentSlide;
      };
    
      const autoScroll = () => {
        const nextSlide = (currentSlide + 1) % projects.length;
        const newScrollPosition = calculateSlidePosition();
        
        scrollContainer.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
    
        setCurrentSlide(nextSlide);
      };
    
      // Clear any existing timer before setting a new one
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    
      timerRef.current = setInterval(autoScroll, 3000);
    
      const handleScroll = () => {
        const cardWidth = 320 + 16; // Card width + gap
        const currentPosition = scrollContainer.scrollLeft;
        const newSlide = Math.round(currentPosition / cardWidth);
        
        if (newSlide !== currentSlide) {
          setCurrentSlide(newSlide);
          
          // Reset the timer when user manually scrolls
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = setInterval(autoScroll, 3000);
          }
        }
      };
    
      scrollContainer.addEventListener('scroll', handleScroll);
    
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }, [currentSlide, projects.length]);

  return (
    <ReactLenis root>
      <section className='py-10 max-w-5xl mx-auto'>
        <div className='grid lg:grid-cols-2'>
            <div className='lg:sticky lg:top-0 lg:h-screen flex items-center justify-center'>
                <div className="md:w-full">
                    <h2 className="text-3xl font-bold mb-8">My Work</h2>
                    <p className="text-lg mb-6">
                        Here's an overview of my freelance projects where I've provided end-to-end web development solutions. 
                        These showcase my expertise in delivering comprehensive services, from logo design to SEO optimization, 
                        helping small businesses and startups establish their digital presence.
                    </p>
                    <p className="text-lg mb-6">
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
                        <a href="/projects" className="flex items-center gap-2 py-2 px-3 text-sm hover:underline">
                        {/* <HiFolder size={20} /> */}
                        View all projects
                        </a>
                        <a href="/contact" className="relative flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors overflow-hidden">
                        {/* <HiUsers size={20} /> */}
                        Hire Me
                        <div className="absolute inset-0 flex w-full animate-shine-infinite blur-[12px]">
                        <div className="relative h-full w-8 bg-white/30"></div>
                        </div>
                        </a>
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