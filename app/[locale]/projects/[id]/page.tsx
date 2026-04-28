"use client";
import { Link } from "@/i18n/routing";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconChevronLeft,
} from "@tabler/icons-react";
import Image from "next/image";
import { useParams } from "next/navigation";

type Project = {
  id: string;
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
  color: string;
};

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const projects = [
    {
      id: "1",
      tag: "RALLY",
      title: "WRC Rally1 Hybrid Development",
      date: "2025",
      description:
        "Complete technical support for the Rally1 hybrid program including powertrain development, vehicle dynamics, and event support.",
      image: "/images/img18.jpg",
      color: "bg-accent-yellow",
    },
    {
      id: "2",
      tag: "ENGINE",
      title: "Custom Turbo 2.5L Build",
      date: "2025",
      description:
        "Ground-up engine build with a custom turbocharger system, achieving 650bhp with exceptional reliability.",
      image: "/images/img19.jpg",
      color: "bg-accent-purple",
    },
    {
      id: "3",
      tag: "RACING",
      title: "GT3 Championship Campaign",
      date: "2024",
      description:
        "Full-season race engineering support including setup development, data analysis, and track-side support.",
      image: "/images/img20.jpg",
      color: "bg-accent-lime",
    },
    {
      id: "4",
      tag: "ACADEMY",
      title: "Junior Driver Development",
      date: "2024-2025",
      description:
        "Comprehensive driver development program from karting through to single-seaters.",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
    {
      id: "5",
      tag: "RALLY",
      title: "R5 Rally Car Development",
      date: "2024",
      description:
        "Complete R5 Rally car build including suspension development, engine optimization, and homologation.",
      image: "/images/img22.jpg",
      color: "bg-accent-purple",
    },
    {
      id: "6",
      tag: "SUPPORT",
      title: "Historic Rally Restoration",
      date: "2024",
      description:
        "Full restoration and modernization of a Group B Rally car to FIA Historic specification.",
      image: "/images/img23.jpg",
      color: "bg-accent-lime",
    },
  ] as Project[];

  // Get project by index from path param: /projects/[id]
  const projectIndex = Number.parseInt(id ?? "", 10);
  const project = Number.isNaN(projectIndex)
    ? undefined
    : projects[projectIndex];

  // Get neighboring projects for navigation
  const prevProject = projectIndex > 0 ? projectIndex - 1 : projects.length - 1;
  const nextProject = (projectIndex + 1) % projects.length;

  if (!project) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-zinc-400 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/projects"
            className="inline-block bg-accent-yellow text-black font-bold px-8 py-3 rounded-lg hover:bg-accent-lime transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Hero Section with Project Image */}
      <section className="mx-auto max-w-7xl px-[15%]">
        <button
          className="pt-20 md:pt-24 pb-6 flex items-center gap-2 hover:text-accent-yellow transition-colors cursor-pointer"
          onClick={() => window.history.back()}
        >
          <IconArrowLeft size={16} />
          <p>All Projects</p>
        </button>
        <img src={project.image} alt={project.title} />
      </section>

      <div className="mx-auto max-w-7xl px-[15%] py-16">
        <div className="mb-6 flex items-center gap-4">
          <p
            className={`inline-block ${project.color} text-black text-xs font-bold px-4 py-2`}
          >
            {project.tag}
          </p>
          <p className="text-zinc-400 text-lg font-semibold flex items-center">
            <IconCalendar size={20} className="inline-block mr-1" />
            {project.date}
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          {project.title}
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="h-px bg-zinc-800 my-10"></div>
      </div>

      {/* Project Details */}
      <section className="mx-auto max-w-7xl px-[15%]">
        <p className="leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero cum consequatur recusandae esse excepturi deleniti praesentium
          numquam reiciendis, corrupti nesciunt vero unde nihil asperiores,
          explicabo, officiis nostrum saepe provident.
        </p>
        <p className="leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero cum consequatur recusandae esse excepturi deleniti praesentium
          numquam reiciendis, corrupti nesciunt vero unde nihil asperiores,
          explicabo, officiis nostrum saepe provident.
        </p>
        <p className="leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero cum consequatur recusandae esse excepturi deleniti praesentium
          numquam reiciendis, corrupti nesciunt vero unde nihil asperiores,
          explicabo, officiis nostrum saepe provident.
        </p>
        <p className="leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          libero cum consequatur recusandae esse excepturi deleniti praesentium
          numquam reiciendis, corrupti nesciunt vero unde nihil asperiores,
          explicabo, officiis nostrum saepe provident.
        </p>

        <div className="h-px bg-zinc-800 my-10"></div>
      </section>

      {/* Project Navigation */}
      <section className="mx-auto max-w-7xl px-[15%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Project */}
          <Link
            href={`/projects/${prevProject}`}
            className="group block transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-zinc-400 text-sm mb-2">
              <IconArrowLeft size={16} className="inline-block mr-1" />
              Previous Project
            </p>
            <h6 className=" font-bold text-white group-hover:text-accent-yellow transition-colors mb-2">
              {projects[prevProject].title}
            </h6>
          </Link>

          {/* Next Project */}
          <Link
            href={`/projects/${nextProject}`}
            className="group block transition-all duration-300 hover:-translate-y-1 text-right"
          >
            <p className="text-zinc-400 text-sm mb-2">
              Next Project
              <IconArrowRight size={16} className="inline-block ml-1" />
            </p>
            <h6 className=" font-bold text-white group-hover:text-accent-yellow transition-colors mb-2">
              {projects[nextProject].title}
            </h6>
          </Link>
        </div>
      </section>
    </div>
  );
}
