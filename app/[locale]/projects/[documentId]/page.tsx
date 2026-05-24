"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import { Project } from "@/app/api/projects/types";
import { getProjectById } from "@/app/api/projects/api";

export default function ServiceDetailPage() {
  const params = useParams<{ documentId: string }>();
  const documentId = params?.documentId;
  const locale = useLocale();
  const t = useTranslations("services");

  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!documentId) return;

      try {
        const response = await getProjectById(documentId);
        setProject(response);
      } catch (err) {
        console.error("Failed to load project:", err);
        setError("Failed to load project");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [documentId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-600">Loading...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-zinc-600 mb-4">{error || "Project not found"}</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-accent-yellow hover:text-accent-lime transition-colors"
        >
          <IconArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    );
  }

  const title = locale === "th" ? project.title_th : project.title_en;
  const description =
    locale === "th" ? project.description_th : project.description_en;
  const content = locale === "th" ? project.content_th : project.content_en;
  const tagText = locale === "th" ? project.tag?.tag_th : project.tag?.tag_en;
  const bgColorClass =
    project.tag?.tag_en === "RALLY"
      ? "accent-yellow"
      : project.tag?.tag_en === "ENGINE"
        ? "accent-purple"
        : project.tag?.tag_en === "RACING"
          ? "accent-lime"
          : "accent-yellow";

  return (
    <section className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-28">
      {/* Back Button */}
      <div>
        <Link
          href="/services"
          className="pt-16 md:pt-20 pb-6 flex items-center gap-2 hover:text-accent-purple transition-colors cursor-pointer font-semibold"
        >
          <IconArrowLeft size={16} />
          <p>All Services</p>
        </Link>
        <img
          src={project?.image?.url}
          alt={title}
          className="h-80 sm:100 lg:h-120 w-full object-cover"
        />
      </div>

      <div className="mt-8">
        <div className="flex gap-2 items-center">
          <div
            className={`px-4 py-2 bg-${bgColorClass} text-black text-xs font-bold inline-block`}
          >
            <p>{tagText}</p>
          </div>
          <div className="flex gap-1 items-center">
            <IconCalendar
              size={20}
              className="inline-block mr-1 text-zinc-400"
            />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight my-6">
          {title}
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          {description}
        </p>
      </div>
      <div className="h-px bg-zinc-800 my-10"></div>
      <div
        className="prose prose-zinc max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
