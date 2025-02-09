import { 
    FaHtml5, 
    FaReact 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs,
  SiPostgresql, 
  SiVercel 
} from "react-icons/si";

interface TechIcon {
  icon: JSX.Element;
  name: string;
  color: string;
}

const techStacks: Record<string, TechIcon[]> = {
  "Frontend Basics": [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
  ],
  "JavaScript & TypeScript": [
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
  ],
  "React & Next.js": [
    { icon: <FaReact />, name: "React", color: "text-blue-400" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "" },
  ],
  "Database & Deployment": [
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-400" },
    { icon: <SiVercel />, name: "Vercel", color: "" },
  ],
};

export default function CurrentTechStack() {
  return (
    <div className="space-y-4 xl:space-y-0 flex flex-col xl:flex-row xl:items-center">
      <h3 className="text-xl font-semibold">Current Tech Stack <span className="xl:hidden">:</span></h3>
      <span className="xl:mx-4">
        <span className="hidden xl:inline">|</span>
      </span>
      <div className="flex flex-wrap gap-6">
        {Object.entries(techStacks).map(([category, icons]) => (
          <div key={category} className="flex items-center gap-2">
            {icons.map((tech) => (
              <div key={tech.name} className="group relative">
                <span className={`text-2xl ${tech.color} hover:scale-110 transition-transform`}>
                  {tech.icon}
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }