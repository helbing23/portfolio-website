"use client";
import Link from "next/link";
import CurrentTechStack from "@/components/skills/CurrentTechStack";
import { ChangeLog } from "@/components/experiences/ChangeLog";
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
        <section id="about" className="py-16 md:py-24">
            <header>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
            </header>
            <article className="mb-8">
                <p className="mb-6 font-semibold">
                    I&apos;m a CTO you can hire by the day, and a senior engineer your agency can hand work to without babysitting it.
                </p>
                <p className="mb-6">
                    I&apos;m co-founder &amp; CTO at <a href="https://www.therapyway.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-600 transition-colors underline hover:no-underline">@therapyway</a>, where I lead a team of two developers and three interns building the UK&apos;s marketplace and clinic-management suite for independent therapists. Next.js, Supabase, AWS and secure video consultations, from architecture to roadmap. I&apos;m also CTO &amp; Strategic Technology Advisor at Shreyanshs CIC, a non-executive role covering architecture reviews and technical direction.
                </p>
                <CurrentTechStack />
                <p className="my-6">
                    <strong>If you&apos;re a founder:</strong> I work as a fractional CTO (one to three days a week, seed to Series A), technical co-founder, or advisory CTO. I make the architecture decisions that determine whether you scale smoothly or rebuild in year two, and I stay hands-on in the code while doing it. Teams I&apos;ve built systems for have seen 25-30% faster delivery and 25% fewer defects from the component libraries and review practices I put in place.
                </p>
                <p className="mb-6">
                    <strong>If you run an agency:</strong> I take overflow Next.js/TypeScript work, white-label, to the standard your clients paid you for. Marketing sites, multi-tenant SaaS dashboards, plus the awkward jobs: infrastructure rescue (DNS, SES/DKIM/SPF/DMARC, hosting migrations) and WordPress-to-modern-stack rebuilds.
                </p>
                <p className="mb-6">
                    Next.js and TypeScript are my daily tools, but the work doesn&apos;t stop there. With my team I build mobile apps and custom software end to end: Nest.js and Strapi on the backend, Python and FastAPI services, AWS infrastructure with GitHub Actions pipelines. I also help teams set up AI-assisted development workflows.
                </p>
                <p className="mb-6">
                    <strong>Recent work:</strong> the Therapyway marketplace and clinic app, Red CRM (lead and property management for a real estate firm that&apos;s been trading for 40 years), SoloTrader CRM (leads-to-invoice management for independent developers), and Location Square (a services marketplace with structured booking flows).
                </p>
                <Link href="/booking" className="flex items-center text-blue-600 hover:text-purple-600 transition-colors w-fit">
                    <span className="text-sm underline hover:no-underline">
                        Book an intro call
                    </span>
                    <MdOutlineDoubleArrow className="ml-2" />
                </Link>
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
                <Link href="/insights" className="flex items-center text-blue-600 hover:text-purple-600 transition-colors">
                    <span className="text-sm underline hover:no-underline">
                        Click here to explore my Insights
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