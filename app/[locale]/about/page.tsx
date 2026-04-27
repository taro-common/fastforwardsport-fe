import Image from "next/image";
import { getTranslations } from "next-intl/server";

type AboutItem = { title: string; description: string; icon: string };
type Milestone = { year: string; achievements: string[] };
type Leader = { name: string; position: string; bio: string };

export default async function AboutPage() {
  const t = await getTranslations("about");
  const missionPillars = t.raw("mission.items") as AboutItem[];
  const milestones = t.raw("milestones") as Milestone[];
  const values = t.raw("values") as AboutItem[];
  const leaders = t.raw("leadershipSection.members") as Leader[];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-accent-purple" />

          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          {/* <Image
            src="/images/img31.jpg"
            alt="Fast Forward Sport Team"
            fill
            className="object-cover"
            priority
          /> */}
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-yellow font-semibold text-xs tracking-[0.2em] uppercase">
            {t("hero.title")} US
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight font-black">
            FAST Forward{" "}
            <span className="text-accent-yellow italic">Sport</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t("overview.title")}{" "}
                <span className="text-accent-purple italic">
                  {t("overview.highlight")}
                </span>
              </h2>
              {(t.raw("overview.paragraphs") as string[]).map((paragraph) => (
                <p key={paragraph} className="text-zinc-400 text-lg mb-4">
                  {paragraph}
                </p>
              ))}
              <div className="bg-zinc-900 border-l-4 border-accent-yellow p-6 rounded-r-xl mt-8">
                <p className="text-white text-xl font-semibold mb-2">
                  &ldquo;{t("overview.quote")}&rdquo;
                </p>
                <p className="text-accent-yellow font-bold mt-4">
                  {t("overview.signature")}
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden">
              <Image
                src="/images/img31.jpg"
                alt="Fast Forward Sport Racing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("vision.title")}{" "}
              <span className="text-accent-purple italic">
                {t("vision.highlight")}
              </span>
            </h2>
            <div className="max-w-4xl mx-auto text-center my-30">
              <p className="text-3xl font-bold text-accent-yellow mb-4">
                &ldquo;{t("vision.statement")}&rdquo;
              </p>
              <p className="text-zinc-300 text-xl leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-12">
              {t("mission.title")}{" "}
              <span className="text-accent-purple italic">
                {t("mission.highlight")}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-400 text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Milestones Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("milestonesSection.title")}{" "}
              <span className="text-accent-purple italic">
                {t("milestonesSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t("milestonesSection.description")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex items-center mb-6">
                  <div className="bg-accent-yellow text-black text-3xl font-bold px-6 py-3 skew-x-[-15deg] origin-top-right">
                    {milestone.year}
                  </div>
                  <div className="flex-1 h-1 bg-accent-yellow ml-4"></div>
                </div>
                <div className="ml-8 space-y-4">
                  {milestone.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-start bg-zinc-900 p-4 border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-accent-yellow mr-4 mt-1 shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="text-white text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-accent-purple">
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("valuesSection.title")}{" "}
              <span className="text-accent-yellow italic">
                {t("valuesSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              {t("valuesSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 p-6 border border-white/30 hover:border-accent-yellow transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Internal Culture Slogan */}
          <div className="mt-16 text-center">
            <button className="inline-block bg-linear-to-r from-accent-yellow to-accent-lime text-black px-12 py-6 rounded-lg">
              <p className="text-2xl font-bold">{t("valuesSection.slogan")}</p>
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* TODO: Change UI */}
      {/* <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("leadershipSection.title")}{" "}
              <span className="text-accent-yellow">
                {t("leadershipSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t("leadershipSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <div className="h-64 bg-linear-to-br from-accent-yellow to-accent-purple"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent-yellow font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-zinc-400 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
