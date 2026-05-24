import Link from "next/link";
import React from "react";
import { Service } from "../api/services/types";
import { useLocale } from "next-intl";

export default function ServiceItem({
  service,
  color,
}: {
  service: Service;
  color: string;
}) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}/services/${service.documentId}`}
      className="block group overflow-hidden hover:border-accent-yellow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image.url}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`text-black text-xs font-bold px-3 py-1.5 bg-${color}`}
          >
            {service.tag.tag_en}
          </span>
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-col justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-accent-purple line-clamp-2">
            {service.title}
          </h3>
          <p className="text-zinc-500 text-xs">{service.tag.tag_en}</p>
        </div>
        {/* <p className="text-zinc-600 text-sm">{service.description}</p> */}
        <p className="text-accent-purple text-sm font-semibold mt-4 flex items-center">
          Read More{" "}
          <span className="ml-2 group-hover:ml-3 transition-all duration-300">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
