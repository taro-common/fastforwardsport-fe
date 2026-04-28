"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";

type Project = {
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
  color: string;
};

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/projects/${(index ?? 0) + 1}`}
      className="block group overflow-hidden hover:border-accent-yellow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`${project.color} text-black text-xs font-bold px-3 py-1.5`}
          >
            {project.tag}
          </span>
        </div>
      </div>
      <div className="py-4">
        <div className="flex flex-col justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-purple">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-xs">{project.date}</p>
        </div>
        <p className="text-zinc-400 text-sm">{project.description}</p>
        <p className="text-accent-yellow text-sm font-semibold mt-4 flex items-center">
          Read More{" "}
          <span className="ml-2 group-hover:ml-3 transition-all duration-300">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
