"use client";

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
import Image from "next/image";
import { useEffect, useState } from "react";
import { MileStone } from "@/app/api/milestones/types";
import { useLocale, useTranslations } from "use-intl";
import { listMilestones } from "@/app/api/milestones/api";
import { Link } from "@/i18n/routing";

type AboutItem = { title: string; description: string; icon: React.ReactNode };
type ValueItem = { title: string; description: string };

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  const [milestones, setMilestones] = useState<MileStone[]>([]);

  const missionIcons = [
    <IconFlag key="flag" />,
    <IconSettings key="settings" />,
    <IconUser key="user" />,
    <IconChartLine key="chart" />,
    <IconSeedling key="seedling" />,
    <IconHeartHandshake key="heart" />,
  ];

  const missionPillars = (
    t.raw("mission.items") as { title: string; description: string }[]
  ).map((item, i) => ({
    ...item,
    icon: missionIcons[i] ?? <IconFlag />,
  })) as AboutItem[];

  const values = t.raw("values") as ValueItem[];

  const getMilestoneImageUrl = (url?: string) => {
    if (!url) return null;
    if (url.startsWith("http")) return url;
    const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
    return `${base}${url}`;
  };

  useEffect(() => {
    const fetchMileStones = async () => {
      const response = await listMilestones();
      setMilestones(response || []);
    };

    void fetchMileStones();
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-12 pb-52 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/about_cover.jpg"
            alt="Fast Forward Sport Team"
            layout="fill"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-yellow font-semibold text-xs tracking-[0.2em] uppercase">
            {t("hero.title")}
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight font-black font-display">
            FAST Forward <span className="text-accent-yellow ">Sport</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6 font-display">
                {t("overview.title")}{" "}
                <span className="text-accent-purple  ">
                  {t("overview.highlight")}
                </span>
              </h2>
              {(t.raw("overview.paragraphs") as string[]).map((paragraph) => (
                <p key={paragraph} className="text-zinc-600 text-lg mb-4">
                  {paragraph}
                </p>
              ))}
              <div className="border-l-4 border-accent-purple bg-zinc-50 p-6 rounded-r-lg mt-8">
                <p className="text-zinc-900 text-xl font-semibold mb-2">
                  &ldquo;{t("overview.quote")}&rdquo;
                </p>
                <p className="text-accent-purple font-bold mt-4">
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
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display">
              {t("vision.title")}{" "}
              <span className="text-accent-purple">
                {t("vision.highlight")}
              </span>
            </h2>
            <div className="max-w-4xl mx-auto text-center my-30">
              <p className="text-3xl font-bold mb-4">
                &ldquo;{t("vision.statement")}&rdquo;
              </p>
              <p className="text-zinc-700 text-xl leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-zinc-900 mb-12 font-display">
              {t("mission.title")}{" "}
              <span className="text-accent-purple  ">
                {t("mission.highlight")}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-6 border border-zinc-200 bg-white rounded-xl shadow-xs hover:shadow-md hover:border-accent-yellow transition-all duration-300"
                >
                  <IconItem icon={pillar.icon} />
                  <h4 className="text-lg font-bold text-zinc-900 my-3">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-600 text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Milestones Section */}
      {/* TODO: fetch API */}
      <section className="py-20" id="MILESTONES">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 font-display">
              {t("milestonesSection.title")}{" "}
              <span className="text-accent-purple  ">
                {t("milestonesSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              {t("milestonesSection.description")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {milestones.length > 0 ? (
              Object.entries(
                milestones.reduce(
                  (acc, milestone) => {
                    const year = milestone.year;
                    if (!acc[year]) acc[year] = [];
                    acc[year].push(milestone);
                    return acc;
                  },
                  {} as Record<string, MileStone[]>,
                ),
              )
                .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
                .map(([year, yearMilestones]) => (
                  <div key={year}>
                    {/* Year Header */}
                    <div className="flex items-center mb-6">
                      <div className="bg-accent-yellow text-black text-2xl font-bold px-6 py-3 -skew-x-15!">
                        {year}
                      </div>
                      <div className="flex-1 h-1 bg-accent-yellow ml-4"></div>
                    </div>

                    {/* Milestones for this year */}
                    <div className="ml-8 flex flex-col gap-4">
                      {yearMilestones.map((milestone, idx) => {
                        const title =
                          locale === "th"
                            ? milestone.title_th
                            : milestone.title_en;
                        const description =
                          locale === "th"
                            ? milestone.description_th
                            : milestone.description_en;
                        const imageUrl = getMilestoneImageUrl(
                          milestone.image?.url,
                        );

                        return (
                          <Link
                            key={`${year}-${idx}`}
                            href={`/milestones/${milestone.documentId}`}
                          >
                            <div className="group border border-zinc-200 bg-white rounded-2xl p-4 hover:border-accent-yellow transition-all duration-300">
                              <div className="flex gap-4 items-start">
                                <IconShieldCheckFilled className="text-accent-yellow shrink-0 mt-1" />

                                <div className="flex-1 min-w-0">
                                  <h3 className="text-zinc-900 text-lg font-bold mb-2">
                                    {title}
                                  </h3>
                                  <p className="text-zinc-600 text-sm leading-relaxed">
                                    {description}
                                  </p>
                                </div>

                                <div className="hidden md:block overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 transition-all duration-500 ease-out w-0 opacity-0 group-hover:w-48 group-hover:opacity-100">
                                  {imageUrl ? (
                                    <img
                                      src={imageUrl}
                                      alt={title}
                                      className="h-28 w-48 object-cover"
                                    />
                                  ) : (
                                    <div className="h-28 w-48" />
                                  )}
                                </div>
                              </div>

                              {imageUrl && (
                                <div className="md:hidden mt-3 overflow-hidden rounded-xl border border-zinc-200">
                                  <img
                                    src={imageUrl}
                                    alt={title}
                                    className="h-32 w-full object-cover"
                                  />
                                </div>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-zinc-500">No milestones available</p>
            )}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-20 bg-zinc-50">
        <div className="absolute inset-0 bg-linear-to-br from-white via-white to-purple-100/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 font-display">
              {t("valuesSection.title")}{" "}
              <span className="text-accent-purple">
                {t("valuesSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-700 max-w-2xl">
              {t("valuesSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 border border-zinc-200 rounded-xl shadow-xs hover:shadow-md hover:border-accent-yellow transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-zinc-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Internal Culture Slogan */}
          <div className="mt-16 text-center">
            <button className="inline-block bg-linear-to-r from-accent-yellow to-accent-lime text-black px-12 py-6 rounded-lg">
              <Link href="/contact">
                <p className="text-2xl font-bold">
                  {t("valuesSection.slogan")}
                </p>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
