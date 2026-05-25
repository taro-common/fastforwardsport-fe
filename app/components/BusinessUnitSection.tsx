import React, { useEffect, useState } from "react";
import BusinessUnitCard from "./BusinessUnitCard";
import { Service } from "../api/services/types";
import { listServices } from "../api/services/api";

export default function BusinessUnitSection() {
  const [services, setServices] = useState<Service[] | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await listServices();
      setServices(response);
    };

    fetchServices();
  }, []);

  const [hoveredTopic, setHoveredTopic] = useState(1);
  const activeUnit =
    services?.find((service) => service.id === hoveredTopic) ?? services?.[0];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 items-stretch overflow-visible"
      onMouseLeave={() => setHoveredTopic(1)}
    >
      <div className="relative z-20 w-full flex flex-col gap-2 overflow-visible self-stretch">
        {services?.slice(0, 4).map((unit, index) => (
          <BusinessUnitCard
            key={index}
            unit={unit}
            setHoveredTopic={setHoveredTopic}
            index={index}
          />
        ))}
      </div>
      <div className="relative z-10 w-full h-full min-h-full overflow-hidden bg-zinc-100 self-stretch">
        <img
          src={activeUnit?.image.url}
          alt={activeUnit?.image.name || ""}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
