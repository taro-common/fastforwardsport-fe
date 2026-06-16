import Link from "next/link";
import React from "react";
import { getColorByTag, Service } from "../api/services/types";
import { useLocale } from "next-intl";

export default function ServiceItem({
  service,
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
          {service.tag && (
            <span
              className={`text-black text-xs font-bold px-3 py-1.5 ${getColorByTag(service.tag.tag_en.toUpperCase())} mb-3`}
            >
              {locale === "th" ? service.tag.tag_th : service.tag.tag_en}
            </span>
          )}
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-col justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-accent-purple line-clamp-2">
            {service.title}
          </h3>
        </div>
        <p className="text-accent-purple text-sm font-semibold mt-4 flex items-center">
          {locale === "th" ? "อ่านเพิ่มเติม" : "Read More"}{" "}
          <span className="ml-2 group-hover:ml-3 transition-all duration-300">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
