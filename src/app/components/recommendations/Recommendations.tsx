'use client';

import { useEffect, useState } from 'react';
import { RiUserVoiceFill } from 'react-icons/ri';

interface Recommendation {
  name: string;
  role: string;
  text: string;
  linkedinUrl: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Sohan Sabnis",
    role: "Sr Project Manager",
    text: "Helbin is an exceptional developer who brings both technical expertise and creative problem-solving to every project. His work on our frontend applications demonstrated his deep understanding of React and modern web technologies.",
    linkedinUrl: "https://www.linkedin.com/in/sohan-sabnis-mca-csm%C2%AE-safe%C2%AE-700308104/"
  },
  {
    name: "Anup Dhareshwar",
    role: "Software Consultant",
    text: "Having worked with Helbin, I realised he is a smart worker. He is innovative in his thinking and is never shy from trying out of the box solution. As an individual is a very quirky and a jolly person to hang out or be around with. Definitely is a great Team Player !",
    linkedinUrl: "https://www.linkedin.com/in/anup-dhareshwar-7a662230/"
  },
  {
    name: "Rocky Alex Dmello",
    role: "Sr Software Developer",
    text: "I had the pleasure of working with Helbin on a WordPress and Drupal project. As a frontend specialist, he is a fast learner who consistently delivers precise and excellent work. His ability to quickly grasp new concepts and technologies made a significant impact on project's success.",
    linkedinUrl: "https://www.linkedin.com/in/rocky-dmello/"
  }
];

const truncateText = (text: string, limit: number = 300) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + '...';
};

const Recommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recommendations.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {recommendations.map((recommendation, index) => (
          <div 
            key={index} 
            className={`rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gradient-gray border border-white-100/[0.2] ${
              index === 1 ? 'shadow-xl' : 'hover:shadow-xl'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                <RiUserVoiceFill size={18} color="#6B7280" />
              </div>
              <div>
                <h3 className="font-semibold gradient-text text-sm">
                  <a 
                    href={recommendation.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {recommendation.name}
                  </a>
                </h3>
                <p className="text-gray-600 text-xs">{recommendation.role}</p>
              </div>
            </div>
            <p className="text-neutral-600 text-xs dark:text-neutral-300">{truncateText(recommendation.text)}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative flex h-[100px]">
        {recommendations.map((recommendation, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-500 rounded-xl hover:shadow-xl shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                <RiUserVoiceFill size={16} color="#6B7280" />
              </div>
              <div>
                <h3 className="font-semibold gradient-text text-sm">
                  <a 
                    href={recommendation.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {recommendation.name}
                  </a>
                </h3>
                <p className="text-gray-600 text-xs">{recommendation.role}</p>
              </div>
            </div>
            <p className="text-neutral-600 text-xs dark:text-neutral-300">{truncateText(recommendation.text)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommendations;