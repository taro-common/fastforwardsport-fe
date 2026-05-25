"use client";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Project } from "../api/projects/types";

export default function ProjectItem({ project }: { project: Project }) {
  const locale = useLocale();

  const title =
    locale === "th"
      ? (project.title_th ?? project.title_en ?? project.title_th ?? "Project")
      : (project.title_en ?? project.title_th ?? project.title_en ?? "Project");
  const description =
    locale === "th"
      ? (project.description_th ?? project.description_en)
      : (project.description_en ?? project.description_th);
  const imageUrl = project?.image?.[0]?.url;
  const imageName = project?.image?.[0]?.name || title;
  const tag = project.tag?.tag_en || "PROJECT";

  const getColorByTag = (tag?: string) => {
    if (tag === "RALLY") return "bg-accent-yellow";
    if (tag === "ENGINE") return "bg-accent-purple";
    if (tag === "RACING") return "bg-accent-lime";
    return "bg-accent-yellow";
  };
  return (
    <Link
      href={`/${locale}/projects/${project.documentId}`}
      className="block group overflow-hidden hover:border-accent-yellow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`text-black text-xs font-bold px-3 py-1.5 ${getColorByTag(tag.toUpperCase())}`}
          >
            {tag}
          </span>
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-col justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-accent-purple line-clamp-1">
            {title}
          </h3>
        </div>
        <p className="text-zinc-600 text-sm line-clamp-2">{description}</p>
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
