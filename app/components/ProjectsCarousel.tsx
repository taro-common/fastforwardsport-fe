"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
};

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const t = useTranslations("home");
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState<number>(0);

  const nextFeaturedProject = () => {
    setFeaturedProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevFeaturedProject = () => {
    setFeaturedProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length,
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${featuredProjectIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full shrink-0">
                <div className="group relative overflow-hidden h-96 md:h-120 cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-accent-yellow text-black text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prevFeaturedProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          type="button"
          onClick={nextFeaturedProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setFeaturedProjectIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                featuredProjectIndex === index
                  ? "w-8 bg-accent-yellow"
                  : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block bg-accent-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200"
        >
          {t("featuredProjectsSection.viewAll")}
        </Link>
      </div> */}
    </div>
  );
}
