import React, { useState } from "react";
import Image from "next/image";
import BusinessUnitCard from "./BusinessUnitCard";

export default function BusinessUnitSection() {
  const services = [
    {
      id: 1,
      tag: "MOTORSPORT",
      title: "The Business Engine",
      date: "2024-2025",
      description:
        "Championship racing team, product testing lab, brand credibility platform",
      image: "/bu1.jpg",
      color: "bg-accent-yellow",
    },
    {
      id: 2,
      tag: "FAST-S",
      title: "Motorsport Engineering Garage",
      date: "2024-2025",
      description:
        "Professional service center, product installation, customer experience hub",
      image: "/bu2.jpg",
      color: "bg-accent-yellow",
    },
    {
      id: 3,
      tag: "Engineering & R&D",
      title: "Collaborate with Manufacturer",
      date: "2024-2025",
      description: "Vehicle development, data analysis, technical innovation",
      image: "/bu3.jpg",
      color: "bg-accent-yellow",
    },
    {
      id: 4,
      tag: "DISTRIBUTOR",
      title: "Premium Products",
      date: "2024-2025",
      description:
        "Official distribution of Powerbrake, Sabelt, WURTH, FF SPORT merchandise",
      image: "/bu4.jpg",
      color: "bg-accent-yellow",
    },
  ];

  const [hoveredTopic, setHoveredTopic] = useState(1);
  const activeUnit =
    services.find((service) => service.id === hoveredTopic) ?? services[0];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 items-stretch overflow-visible"
      onMouseLeave={() => setHoveredTopic(1)}
    >
      <div className="relative z-20 w-full flex flex-col gap-2 overflow-visible self-stretch">
        {services.map((unit, index) => (
          <BusinessUnitCard
            key={index}
            unit={unit}
            setHoveredTopic={setHoveredTopic}
          />
        ))}
      </div>
      <div className="relative z-10 w-full h-full min-h-full overflow-hidden bg-zinc-100 self-stretch">
        <Image
          src={activeUnit.image}
          alt={activeUnit.title}
          layout="fill"
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority={activeUnit.id === 1}
        />
      </div>
    </div>
  );
}
