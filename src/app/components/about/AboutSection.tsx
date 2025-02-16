"use client";
import Link from "next/link";
import CurrentTechStack from "@/app/components/skills/CurrentTechStack";
import { ChangeLog } from "@/app/components/experiences/ChangeLog";
import { JourneyCards } from "./JourneyCards";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useState } from 'react';

export default function AboutSection() {
    const [showChangeLog, setShowChangeLog] = useState(false);

    const handleLinkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowChangeLog(true);
    };

    return (
        <section id="about" className="py-10 max-w-5xl mx-auto">
            <header>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
            </header>
            <article className="mb-8">
                <p className="mb-6">
                    I&apos;m an Experienced Software Developer, specializing in creating engaging, user-centric web applications. My expertise lies in modern web technologies, including ReactJS, SvelteJS, and Tailwind CSS, along with extensive experience in CMS platforms like Drupal and WordPress.
                </p>
                <CurrentTechStack />
                <p className="my-6">
                    I&apos;m exploring new challenges in web development while upskilling myself to become an AI Engineer. My goal is to integrate AI into applications, designing innovative solutions that bridge the gap between cutting-edge technology and user needs.
                </p>
            </article>
            
            <section className="mb-8" aria-label="Professional Journey">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="mb-4">
                    I started my career building responsive websites and optimizing CMS-based solutions for businesses. Over the years, I&apos;ve worked on projects that:
                </p>
                <JourneyCards />
                <div className="mt-4">
                    <Link href="/" className="flex items-center text-blue-600 hover:text-purple-600 transition-colors" onClick={handleLinkClick}>
                        <span className="text-sm underline hover:no-underline">
                            Click here to see my changelog
                        </span>
                        <MdOutlineDoubleArrow className="ml-2" />
                    </Link>
                    {showChangeLog && <ChangeLog />}
                </div>
            </section>

            <section className="mb-8" aria-label="Blog Section">
                <h3 className="text-2xl font-semibold mb-4">Blogs and Insights</h3>
                <p className="mb-4">
                    I love sharing my knowledge and insights through blogs, covering topics like web development best practices, AI integration, and career growth in tech.
                </p>
                <Link href="/blogs" className="flex items-center text-blue-600 hover:text-purple-600 transition-colors">
                    <span className="text-sm underline hover:no-underline">
                        Click here to explore my blogs
                    </span>
                    <MdOutlineDoubleArrow className="ml-2" />
                </Link>
            </section>

            <section className="mb-8" aria-label="Personality">
                <h3 className="text-2xl font-semibold mb-4">My Personality</h3>
                <p className="mb-4">
                    I strive to be approachable, friendly, and open to collaboration. While I find it challenging to self-assess, I took the 16Personalities test to better understand my traits.
                </p>
                <Link href="https://www.16personalities.com/profiles/a194f45c39e69" className="flex items-center text-blue-600 hover:text-purple-600 transition-colors">
                    <span className="text-sm underline hover:no-underline">
                        Click here to view my 16Personalities results
                    </span>
                    <MdOutlineDoubleArrow className="ml-2" />
                </Link>
            </section>

            <section aria-label="Interests Section">
                <h3 className="text-2xl font-semibold mb-4">My Interests</h3>
                <p className="mb-4">
                    <strong>Beyond coding</strong>, I enjoy exploring new tools and technologies, attending workshops, and collaborating on innovative projects. I also like attending events and meetups, especially if they&apos;re after work or on weekends. Additionally, I&apos;m passionate about mental health awareness and have plans to launch a Community Interest Company (CIC) integrating AI to provide global support and resources.
                </p>
                <p>
                    <strong>When I&apos;m not working</strong>, you&apos;ll often find me binge-watching tech content on YouTube or traveling to nearby places, whether it&apos;s a weekend getaway or something I plan during my annual leave.
                </p>
            </section>
        </section>
    );
}