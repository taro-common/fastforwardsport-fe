import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import ProjectItem from "../../components/ProjectItem";

type Project = {
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
  color: string;
};

type Stat = {
  value: string;
  label: string;
};

export default async function ProjectsPage() {
  const t = await getTranslations("projects");
  const projects = t.raw("items") as Project[];
  const stats = t.raw("stats.items") as Stat[];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          <img
            src="/images/img24.jpg"
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {t("hero.title")}{" "}
            <span className="text-accent-yellow">{t("hero.highlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-zinc-950 border-b border-zinc-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <button className="text-accent-yellow font-semibold border-b-2 border-accent-yellow pb-2 whitespace-nowrap">
              {t("filters.all")}
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              {t("filters.rally")}
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              {t("filters.engine")}
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              {t("filters.racing")}
            </button>
            <button className="text-zinc-400 hover:text-white font-semibold pb-2 whitespace-nowrap">
              {t("filters.academy")}
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
            {t("stats.title")}{" "}
            <span className="text-accent-yellow">{t("stats.highlight")}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl md:text-6xl font-bold text-accent-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}{" "}
            <span className="text-accent-yellow">{t("cta.highlight")}</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10">{t("cta.description")}</p>
          <Link
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
