"use client";
import Recommendations from "@/components/recommendations/Recommendations";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function RecommendationsSection() {
    return (
        <section id="recommendations" className="py-10 max-w-5xl mx-auto">
          {/* Desktop heading and link */}
          <div className="flex sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">LinkedIn Recommendations</h2>
            <Link 
              href="https://www.linkedin.com/in/helbin-rapheal/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer" 
              className="hidden sm:flex text-blue-600 hover:text-purple-600 text-sm underline hover:no-underline hover:underline items-center gap-2"
            >
              <FaLinkedin size={20} />
              View all recommendations
            </Link>
          </div>

          <Recommendations />

          {/* Mobile heading and link */}
          <div className="sm:hidden mt-6">
            <Link 
              href="https://www.linkedin.com/in/helbin-rapheal/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-purple-600 text-sm underline hover:no-underline flex items-center gap-2"
            >
              <FaLinkedin size={18} />
              View all recommendations
            </Link>
          </div>
          
        </section>
    );
}