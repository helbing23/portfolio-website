import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

export function JourneyCards() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-auto">
      {services.map((item, i) => (
        <BentoGridItem
          key={i}
          description={item.description}
          className={`bg-gradient-gray items-center ${
            i === 1 ? 'shadow-xl' : 'hover:shadow-xl'
          }`}
        />
      ))}
    </BentoGrid>
  );
}

const services = [
  {
    description: "Improved website performance and speed.",
  },
  {
    description: "Enhanced user engagement and retention.",
  },
  {
    description: "Delivered end-to-end software solutions.",
  },
];
