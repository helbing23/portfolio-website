"use client";
import Recommendations from "@/app/components/recommendations/Recommendations";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function RecommendationsSection() {
    return (
        <section id="recommendations" className="py-10 max-w-5xl mx-auto">
          {/* Desktop heading and link */}
          <div className="hidden sm:flex sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">LinkedIn Recommendations</h2>
            <Link 
              href="https://www.linkedin.com/in/helbin-rapheal/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm underline hover:no-underline hover:underline flex items-center gap-2"
            >
              <FaLinkedin size={20} />
              View all recommendations
            </Link>
          </div>

          {/* Mobile heading */}
          <h2 className="text-3xl font-bold mb-8 sm:hidden">LinkedIn Recommendations</h2>
          
          <Recommendations />
        </section>
    );
}
