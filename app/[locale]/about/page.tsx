import { getTranslations } from "next-intl/server";
import IconItem from "@/app/components/IconItem";
import {
  IconChartLine,
  IconFlag,
  IconHeartHandshake,
  IconSeedling,
  IconSettings,
  IconShieldCheckFilled,
  IconUser,
} from "@tabler/icons-react";

type AboutItem = { title: string; description: string; icon: React.ReactNode };
type Milestone = { year: string; achievements: string[] };
type Leader = {
  name: string;
  position: string;
  background: string;
  photo: string;
};

export default async function AboutPage() {
  const t = await getTranslations("about");
  const missionPillars = [
    {
      title: "Motorsport Ecosystem Development",
      description:
        "Establish a comprehensive ecosystem through national and international events",
      icon: <IconFlag />,
    },
    {
      title: "Technology & Innovation Leadership",
      description:
        "Develop Thailand's premier R&D center for automotive and motorsport innovation",
      icon: <IconSettings />,
    },
    {
      title: "Human Resource Development",
      description:
        "Cultivate high-potential talent through continuous learning and innovation",
      icon: <IconUser />,
    },
    {
      title: "Business Expansion & Revenue Growth",
      description:
        "Diversify revenue through branded products and innovative solutions",
      icon: <IconChartLine />,
    },
    {
      title: "Sustainability Commitment",
      description: "Implement eco-friendly technologies across operations",
      icon: <IconSeedling />,
    },
    {
      title: "Communication & Relationship Building",
      description:
        "Foster transparent, inspiring communication with stakeholders",
      icon: <IconHeartHandshake />,
    },
  ] as AboutItem[];
  const milestones = t.raw("milestones") as Milestone[];
  const values = t.raw("values") as AboutItem[];
  const leaders = [
    {
      name: "Chanthathit Pensuk",
      position: "CEO - Business Strategy & Partnerships",
      background:
        "Former Product Development Manager at Toyota Customizing Development (TCD Asia). Visionary leader building Thailand's motorsport ecosystem",
    },
    {
      name: "Pongkasem Jitkasem",
      position: "Director - Motorsport",
      background:
        "WRC Co-driver Champion, International & Domestic Rally Champion. Brings world-class competition expertise",
    },
    {
      name: "Mana Pornsiricherd",
      position: "Director - Driver Academy & Evaluation",
      background:
        "Darka Rally Driver, International & Domestic Rally Champion. Leads talent development programs",
    },
    {
      name: "Wataru Sugii",
      position: "Technical Product Development",
      background:
        "Former HKS Top Management, TCD Asia Motorsport Advisor. Technical excellence and innovation leader",
    },
  ] as Leader[];

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
              <div className="bg-zinc-900 border-l-4 border-accent-yellow p-6 rounded-r-lg mt-8">
                <p className="text-white text-xl font-semibold mb-2">
                  &ldquo;{t("overview.quote")}&rdquo;
                </p>
                <p className="text-accent-yellow font-bold mt-4">
                  {t("overview.signature")}
                </p>
              </div>
            </div>
            <img
              src="/images/img31.jpg"
              alt="Fast Forward Sport Racing"
              className="w-full h-60 md:h-96 object-cover object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="pb-20 bg-black">
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
                  <IconItem icon={pillar.icon} />
                  <h4 className="text-lg font-bold text-white my-3">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-400 text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("leadershipSection.title")}{" "}
              <span className="text-accent-purple italic">
                {t("leadershipSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t("leadershipSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-zinc-900 p-4 border border-zinc-800 hover:border-accent-yellow transition-all duration-300 gap-4"
              >
                <img
                  src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg"
                  alt={leader.name}
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <p className="text-white font-bold text-center">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-accent-yellow text-sm font-semibold text-center">
                    {leader.position}
                  </p>
                  <p className="text-xs mt-2 text-center text-zinc-400">
                    {leader.background}
                  </p>
                </div>
              </div>
            ))}
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
                  <div className="bg-accent-yellow text-black text-2xl font-bold px-6 py-3 -skew-x-15!">
                    {milestone.year}
                  </div>
                  <div className="flex-1 h-1 bg-accent-yellow ml-4"></div>
                </div>
                <div className="ml-8 space-y-4">
                  {milestone.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-center bg-zinc-900 p-4 border border-zinc-800 hover:border-accent-yellow transition-all duration-300 gap-4"
                    >
                      <IconShieldCheckFilled className="text-accent-yellow" />
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
    </div>
  );
}
