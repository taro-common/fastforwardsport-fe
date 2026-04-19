import { Link } from "@/i18n/routing";
import ProjectItem from "../../components/ProjectItem";

export default function ProjectsPage() {
  const projects = [
    {
      tag: "RALLY",
      title: "WRC Rally1 Hybrid Development",
      date: "2025",
      description:
        "Complete technical support for Rally1 hybrid program including powertrain development, vehicle dynamics, and event support.",
      image: "/images/img18.jpg",
      color: "bg-accent-yellow",
    },
    {
      tag: "ENGINE",
      title: "Custom Turbo 2.5L Build",
      date: "2025",
      description:
        "Ground-up engine build with custom turbocharger system, achieving 650bhp with exceptional reliability.",
      image: "/images/img19.jpg",
      color: "bg-accent-purple",
    },
    {
      tag: "RACING",
      title: "GT3 Championship Campaign",
      date: "2024",
      description:
        "Full-season race engineering support including setup development, data analysis, and track-side support.",
      image: "/images/img20.jpg",
      color: "bg-accent-lime",
    },
    {
      tag: "ACADEMY",
      title: "Junior Driver Development",
      date: "2024-2025",
      description:
        "Comprehensive driver development program from karting through to single-seaters.",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
    {
      tag: "RALLY",
      title: "R5 Rally Car Development",
      date: "2024",
      description:
        "Complete R5 rally car build including suspension development, engine optimization, and homologation.",
      image: "/images/img22.jpg",
      results: ["FIA homologation", "Championship podium", "Zero DNFs"],
      color: "bg-accent-purple",
    },
    {
      tag: "SUPPORT",
      title: "Historic Rally Restoration",
      date: "2024",
      description:
        "Full restoration and modernization of Group B rally car to FIA Historic specification.",
      image: "/images/img23.jpg",
      results: ["Period-correct build", "FIA HTP papers", "Concours winner"],
      color: "bg-accent-lime",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          <img
            src="/images/img24.jpg"
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            OUR <span className="text-accent-yellow">PROJECTS</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            Showcasing our latest engineering achievements and race-winning
            solutions
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-zinc-950 border-b border-zinc-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <button className="text-accent-yellow font-semibold border-b-2 border-accent-yellow pb-2 whitespace-nowrap">
              ALL PROJECTS
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              RALLY
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              ENGINE
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              RACING
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              ACADEMY
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            PROJECT <span className="text-accent-yellow">STATISTICS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-accent-yellow mb-2">
                200+
              </div>
              <div className="text-zinc-400 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-accent-yellow mb-2">
                50+
              </div>
              <div className="text-zinc-400 text-lg">Championship Wins</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-accent-yellow mb-2">
                98%
              </div>
              <div className="text-zinc-400 text-lg">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-accent-yellow mb-2">
                15
              </div>
              <div className="text-zinc-400 text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            START YOUR <span className="text-accent-yellow">PROJECT TODAY</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Let's discuss how we can help you achieve your motorsport goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
