"use client";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export type Project = {
  documentId?: string;
  title?: string;
  title_en?: string;
  title_th?: string;
  description?: string;
  description_en?: string;
  description_th?: string;
  image?: string | { url?: string; name?: string };
  imageAlt?: string;
  images?: { url?: string; name?: string }[];
  tag?: { tag_en?: string; tag_th?: string };
};

export default function ProjectItem({ project }: { project: Project }) {
  const locale = useLocale();

  const title =
    locale === "th"
      ? (project.title_th ?? project.title_en ?? project.title ?? "Project")
      : (project.title_en ?? project.title_th ?? project.title ?? "Project");
  const description =
    locale === "th"
      ? (project.description_th ??
        project.description_en ??
        project.description)
      : (project.description_en ??
        project.description_th ??
        project.description);
  const singleImage =
    typeof project.image === "object" && project.image !== null
      ? project.image
      : undefined;
  const imageUrl =
    project.images?.[0]?.url ||
    singleImage?.url ||
    (typeof project.image === "string" ? project.image : undefined) ||
    "/images/img18.jpg";
  const imageName = project.images?.[0]?.name || singleImage?.name || title;
  const tag = project.tag?.tag_en || "PROJECT";
  const href = project.documentId
    ? `/projects/${project.documentId}`
    : "/projects";

  const getColorByTag = (tag?: string) => {
    if (tag === "RALLY") return "bg-accent-yellow";
    if (tag === "ENGINE") return "bg-accent-purple";
    if (tag === "RACING") return "bg-accent-lime";
    return "bg-accent-yellow";
  };
  return (
    <Link
      href={href}
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
          <h3 className="text-xl font-bold group-hover:text-accent-purple line-clamp-2">
            {title}
          </h3>
          {/* <p className="text-zinc-500 text-xs">{project.date}</p> */}
        </div>
        <p className="text-zinc-600 text-sm">{description}</p>
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
