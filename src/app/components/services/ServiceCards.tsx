import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { FaPalette, FaCode, FaBoxOpen } from "react-icons/fa";

export function ServiceCards() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-auto">
      {services.map((item, i) => (
        <BentoGridItem
          key={i}
          title={<span className="gradient-text">{item.title}</span>}
          description={item.description}
          icon={item.icon}
          className={`bg-gradient-gray ${
            i === 1 ? 'shadow-xl' : 'hover:shadow-xl'
          }`}
        />
      ))}
    </BentoGrid>
  );
}

const services = [
  {
    title: "Design",
    description: "Creating beautiful, intuitive interfaces that engage users and enhance their experience.",
    icon: <FaPalette size={20} />,
  },
  {
    title: "Development",
    description: "Building robust, scalable applications using modern web technologies and best practices.",
    icon: <FaCode size={20} />,
  },
  {
    title: "The Full Package",
    description: "End-to-end solution from concept to deployment, ensuring your project's success.",
    icon: <FaBoxOpen size={20} />,
  },
];
