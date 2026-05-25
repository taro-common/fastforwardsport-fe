import { useLocale } from "next-intl";
import { Service } from "../api/services/types";
import {
  IconPackage,
  IconSettings,
  IconTool,
  IconTrophy,
} from "@tabler/icons-react";
import React from "react";

const icons = [IconPackage, IconSettings, IconTool, IconTrophy];

export default function BusinessUnitCard({
  unit,
  setHoveredTopic,
  index,
}: {
  unit: Service;
  setHoveredTopic: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}) {
  const locale = useLocale();
  const tag = locale === "en" ? unit.tag.tag_en : unit.tag.tag_th;
  const description =
    locale === "en" ? unit.description_en : unit.description_th;
  return (
    <div
      className="p-2 h-32 group relative z-0 flex overflow-visible rounded-md border border-zinc-200 bg-white transition-all duration-300 hover:scale-x-110 hover:origin-top-left hover:z-50 cursor-pointer"
      onMouseEnter={() => setHoveredTopic(unit.id)}
    >
      <div className="flex items-center">
        <div className="p-4 text-zinc-400 group-hover:text-accent-purple transition-colors duration-200">
          {React.createElement(icons[index % icons.length], {
            className: "w-6 h-6",
          })}
        </div>
        <div className="flex flex-col p-4">
          {/* Tag badge */}
          <span className="inline-flex w-fit text-xs font-bold tracking-wide text-accent-purple">
            {tag}
          </span>

          {/* Content */}
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-bold leading-snug transition-colors duration-200">
              {unit.title}
            </h3>

            <p className="text-zinc-600 text-sm leading-relaxed flex-1">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden group-hover:block pointer-events-none absolute inset-y-0 right-0 w-1 bg-accent-purple opacity-0 transition-opacity duration-200 group-hover:opacity-100 rounded-full" />
    </div>
  );
}
