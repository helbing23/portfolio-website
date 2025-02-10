import React from "react";
import { Timeline } from "../ui/Timeline";
import experiences from "./experience-data";
import educations from './education-data';
import certifications from "./certification-data";
import { FaMapMarkerAlt } from "react-icons/fa";

const TechStack = ({ technologies }: { technologies: JSX.Element[] }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {technologies.map((tech, index) => (
      <div key={index} className="text-gray-600 hover:text-gray-800 transition-colors">
        {tech}
      </div>
    ))}
  </div>
);

const formatDateRange = (startDate: string, endDate: string): string => {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
  return `${formatter.format(new Date(startDate))} - ${formatter.format(new Date(endDate))}`;
};

export function ChangeLog() {
  const data = [
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="text-lg mb-6">
            &ldquo;Dream big, work hard, and keep learning.&rdquo;
          </p>
          <p className="mb-6 shadow-md bg-gradient-gray dark:bg-black dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
            I&apos;ve been upskilling myself to transition into AI, specifically focusing on Generative AI. Currently learning Python and Prompt Engineering as I work toward expanding my knowledge in machine learning concepts.
          </p>
          {experiences.filter(exp => exp.id === 'company5').map(exp => (
            <div key={exp.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p>
              Joined <a href={exp.link} target="_blank" rel="noopener noreferrer" className="gradient-link">{exp.company}</a> as a 🖋️ {exp.title}
              </p>
              <div className="md:flex items-center gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt size={14} color="#6B7280" />
                  {exp.location}
                </span>
                <p className="text-sm text-gray-600">| 2025 - Present </p>
              </div>
              <p>{exp.companyDesc}</p>
              <TechStack technologies={exp.technologies} />
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "2021 - 2024",
      content: (
        <div>
          {experiences.filter(exp => exp.id === 'company4').map(exp => (
            <div key={exp.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p>
                Thrived as a 🚀 Software Developer at <a href={exp.link} target="_blank" rel="noopener noreferrer" className="gradient-link">{exp.company}</a>
              </p>
              <div className="md:flex items-center gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt size={14} color="#6B7280" />
                  {exp.location}
                </span>
                <p className="text-sm text-gray-600">| {formatDateRange(exp.startDate, exp.endDate)} </p>
              </div>
              <p>{exp.companyDesc}</p>
              <TechStack technologies={exp.technologies} />
            </div>
          ))}
          {certifications.filter(cert => cert.id === 'certification5').map(cert => (
            <div key={cert.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p className="text-sm">{cert.title} at <span className="text-gray-500">{cert.institution}</span></p>
            </div>
          ))}
          {certifications.filter(cert => cert.id === 'certification3').map(cert => (
            <div key={cert.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p className="text-sm">{cert.title} at <span className="text-gray-500">{cert.institution}</span></p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <p className="mb-6 shadow-md bg-gradient-gray dark:bg-black dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
            Embraced freelancing as a 🌐 Full-Stack Developer | 2019 - 2021 <br/>
            Worked with small businesses and startups to deliver end-to-end digital solutions, from web design to SEO and CMS development. Built responsive WordPress sites and provided tailored branding solutions.
          </p>
          {experiences.filter(exp => exp.id === 'company3').map(exp => (
            <div key={exp.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p>
              Excelled as a 👨‍💻 {exp.title} at <a href={exp.link} target="_blank" rel="noopener noreferrer" className="gradient-link">{exp.company}</a>
              </p>
              <div className="md:flex items-center gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt size={14} color="#6B7280" />
                  {exp.location}
                </span>
                <p className="text-sm text-gray-600">| {formatDateRange(exp.startDate, exp.endDate)} </p>
              </div>
              <TechStack technologies={exp.technologies} />
            </div>
          ))}
          {experiences.filter(exp => exp.id === 'company2').map(exp => (
            <div key={exp.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p>
              Started as a 🎨 Contract Web Designer and joined as a 💻 Permanent {exp.title} at <a href={exp.link} target="_blank" rel="noopener noreferrer" className="gradient-link">{exp.company}</a> 
              </p>
              <div className="md:flex items-center gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt size={14} color="#6B7280" />
                  {exp.location}
                </span>
                <p className="text-sm text-gray-600">| {formatDateRange(exp.startDate, exp.endDate)} </p>
              </div>
              <TechStack technologies={exp.technologies} />
            </div>
          ))}
          {certifications.filter(cert => cert.id === 'certification4').map(cert => (
            <div key={cert.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p className="text-sm">{cert.title} at <span className="text-gray-500">{cert.institution}</span></p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "2018 - 2019",
      content: (
        <div>
          <p className="mb-6 shadow-md bg-gradient-gray dark:bg-black dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
            Started my career as a 🎨 Freelance Graphic & Web UI Designer<br/>
            Focused on creating intuitive user experiences and visual designs for web and mobile platforms, gaining hands-on experience with tools like Adobe Creative Suite and Figma.
          </p>
          {experiences.filter(exp => exp.id === 'company1').map(exp => (
            <div key={exp.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p>
                Worked as a 🎧 {exp.title} at <a href={exp.link} target="_blank" rel="noopener noreferrer" className="gradient-link">{exp.company}</a>
              </p>
              <div className="md:flex items-center gap-2">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <FaMapMarkerAlt size={14} color="#6B7280" />
                  {exp.location}
                </span>
                <p className="text-sm text-gray-600">| {formatDateRange(exp.startDate, exp.endDate)} </p>
              </div>
              <TechStack technologies={exp.technologies} />
            </div>
          ))}
          {certifications.filter(cert => cert.id === 'certification2').map(cert => (
            <div key={cert.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p className="text-sm">{cert.title} at <span className="text-gray-500">{cert.institution}</span></p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          {educations.map(education => (
              <div key={education.id} className="mb-6 shadow-md bg-gradient-gray dark:bg-black dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
                <p>
                  Graduated from <a href={education.link} target="_blank" rel="noopener noreferrer" className="gradient-link">{education.institution}</a>, {education.university} as a 📜 {education.title}      
                </p>
                <div className="md:flex items-center gap-2">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FaMapMarkerAlt size={14} color="#6B7280" />
                    {education.location}
                  </span>
                  <p className="text-sm text-gray-600">| {formatDateRange(education.startDate, education.endDate)} </p>
                </div>
                <p>Majored in {education.degree}, where I developed foundational skills in web technologies, collaborated on team projects, and honed a passion for digital innovation through workshops and competitions.</p>
              </div>
          ))}
          {certifications.filter(cert => cert.id === 'certification1').map(cert => (
            <div key={cert.id} className="mb-6 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:border-white/[0.2] border rounded-xl p-4 transition-all scale-100 hover:scale-105">
              <p className="text-sm">{cert.title} at <span className="text-gray-500">{cert.institution}</span></p>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <Timeline data={data} />
  );
}
