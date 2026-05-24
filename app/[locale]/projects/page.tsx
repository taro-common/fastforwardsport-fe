"use client";

import { useLocale, useTranslations } from "next-intl";
import ProjectItem from "../../components/ProjectItem";
import ProjectsCarousel from "@/app/components/ProjectsCarousel";
import { useEffect, useState } from "react";
import { listProjects } from "@/app/api/projects/api";
import type { Project } from "@/app/api/projects/types";

type CarouselProject = {
  title: string;
  category: string;
  image: string;
  description: string;
};

type FilterKey =
  | "ALL"
  | "RALLY"
  | "ENGINE"
  | "RACING"
  | "ACADEMY"
  | "CHAMPIONSHIP"
  | "SUPPORT";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const [projects, setProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<CarouselProject[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("ALL");

  const getProjectImageUrl = (project: Project) => {
    const url = project.images?.[0]?.url || project.image?.url;
    if (!url) return "/images/img18.jpg";
    if (url.startsWith("http")) return url;
    const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
    return `${base}${url}`;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await listProjects();
        setProjects(response || []);
        const mappedFeatured = (response || []).map((project) => ({
          title: locale === "en" ? project.title_en : project.title_th,
          category:
            locale === "en"
              ? (project.tag?.tag_en ?? "PROJECT")
              : (project.tag?.tag_th ?? "PROJECT"),
          image: getProjectImageUrl(project),
          description:
            locale === "en" ? project.description_en : project.description_th,
        }));
        setFeaturedProjects(mappedFeatured);
      } catch (error) {
        console.error("Failed to load projects:", error);
        setProjects([]);
        setFeaturedProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchProjects();
  }, [locale]);

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter(
          (project) => project.tag?.tag_en?.toUpperCase() === activeFilter,
        );

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-12 pb-52 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-accent-purple">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src="/project_cover.png"
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-display">
            {t("hero.title")}{" "}
            <span className="text-accent-yellow ">{t("hero.highlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      <h2 className="mt-20 max-w-7xl mx-auto text-4xl font-bold mb-6 px-4 sm:px-6 lg:px-8 font-display">
        {t("featuredProjects.title")}{" "}
        <span className="text-accent-purple">
          {t("featuredProjects.highlight")}
        </span>
      </h2>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {featuredProjects.length > 0 ? (
          <ProjectsCarousel projects={featuredProjects} />
        ) : (
          <div className="h-48 flex items-center justify-center text-zinc-500">
            {isLoading ? "Loading..." : "No featured projects"}
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <section className="mt-8 sticky top-20 z-40 max-w-7xl mx-auto bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`font-semibold pb-2 whitespace-nowrap ${
                activeFilter === "ALL"
                  ? "text-accent-purple border-b-2 border-accent-purple"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("filters.all")}
            </button>
            <button
              onClick={() => setActiveFilter("RALLY")}
              className={`font-semibold pb-2 whitespace-nowrap ${
                activeFilter === "RALLY"
                  ? "text-accent-purple border-b-2 border-accent-purple"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("filters.rally")}
            </button>
            <button
              onClick={() => setActiveFilter("ENGINE")}
              className={`font-semibold pb-2 whitespace-nowrap ${
                activeFilter === "ENGINE"
                  ? "text-accent-purple border-b-2 border-accent-purple"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("filters.engine")}
            </button>
            <button
              onClick={() => setActiveFilter("RACING")}
              className={`font-semibold pb-2 whitespace-nowrap ${
                activeFilter === "RACING"
                  ? "text-accent-purple border-b-2 border-accent-purple"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("filters.racing")}
            </button>
            <button
              onClick={() => setActiveFilter("ACADEMY")}
              className={`font-semibold pb-2 whitespace-nowrap ${
                activeFilter === "ACADEMY"
                  ? "text-accent-purple border-b-2 border-accent-purple"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {t("filters.academy")}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl font-bold   mb-6">All Projects</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <p className="text-zinc-500 col-span-full">Loading...</p>
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectItem key={project.documentId} project={project} />
              ))
            ) : (
              <p className="text-zinc-500 col-span-full">
                No projects available
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
