"use client";
import Link from "next/link";
import CurrentTechStack from "@/app/components/skills/CurrentTechStack";
import { ChangeLog } from "@/app/components/experiences/ChangeLog";
import { JourneyCards } from "./JourneyCards";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function AboutSection() {
    return (
        <section id="about" className="py-10 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-6">
                I&apos;m an Experienced Software Developer, specializing in creating engaging, user-centric web applications. My expertise lies in modern web technologies, including ReactJS, SvelteJS, and Tailwind CSS, along with extensive experience in CMS platforms like Drupal and WordPress.
            </p>
            <CurrentTechStack />
            <p className="my-6">
                I&apos;m exploring new challenges in web development while upskilling myself to become an AI Engineer. My goal is to integrate AI into applications, designing innovative solutions that bridge the gap between cutting-edge technology and user needs.
            </p>
            <h3 className="mb-2">My Journey</h3>
            <p className="mb-3">
                I started my career building responsive websites and optimizing CMS-based solutions for businesses. Over the years, I&apos;ve worked on projects that:
            </p>
            <JourneyCards/>
            {/* <p className="mt-3">
            I have a strong foundation in modern web standards and best practices, honed through experience with tools and frameworks like React, Svelte, TypeScript, and Next.js.
            </p> */}
            <ChangeLog />
            <h3 className="mb-2">Blogs and Insights</h3>
            <p className="mb-2">
                I love sharing my knowledge and insights through blogs, covering topics like web development best practices, AI integration, and career growth in tech.
            </p>
            <Link href="/blogs" className="mb-6 flex items-center group">
                <span className="text-sm underline group-hover:no-underline">
                    Click here to explore my blogs
                </span>
                <MdOutlineDoubleArrow className="ml-2" />
            </Link>
            <h3 className="mb-2">My Personality</h3>
            <p className="mb-2">
                I strive to be approachable, friendly, and open to collaboration. While I find it challenging to self-assess, I took the 16Personalities test to better understand my traits.
            </p>
            <Link href="/" className="mb-6 flex items-center group">
                <span className="text-sm underline group-hover:no-underline">
                    Click here to view my 16Personalities results
                </span>
                <MdOutlineDoubleArrow className="ml-2" />
            </Link>
            <h3 className="mb-2">My Interests</h3>
            <p className="mb-6">
                <b>Beyond coding</b>, I enjoy exploring new tools and technologies, attending workshops, and collaborating on innovative projects. I also like attending events and meetups, especially if they&apos;re after work or on weekends. Additionally, I&apos;m passionate about mental health awareness and have plans to launch a Community Interest Company (CIC) integrating AI to provide global support and resources.
            </p>
            <p className="mb-6">
                <b>When I&apos;m not working</b>, you&apos;ll often find me binge-watching tech content on YouTube or travel to nearby places, whether it&apos;s a weekend getaway or something I plan during my annual leave.
            </p>
        </section>
    );
}
