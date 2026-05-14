"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectItem, { Project } from "../components/ProjectItem";
import BusinessUnitSection from "../components/BusinessUnitSection";
import Gallery from "../components/Gallery";

export default function Home() {
  const t = useTranslations("home");
  const achievements: Project[] = [
    {
      title: "Thailand Rally Championship 2024 & 2025 Champion",
      description: "Overall & Royal Cup Winner",
      image: "/images/img18.jpg",
    },
    {
      title: "TRRC 2025 Round 1 Champion",
      description: "Thailand Regional Rally Championship",
      image: "/images/img19.jpg",
    },
    {
      title: "XCR Sprint Cup Hokkaido 2025",
      description: "Podium Finish",
      image: "/images/img20.jpg",
    },
    {
      title: "Asia Cross Country Rally (AXCR)",
      description: "Multiple Podiums",
      image: "/images/img22.jpg",
    },
    {
      title: "Rally Hokkaido Japan",
      description: "International Recognition",
      image: "/images/img17.jpg",
    },
  ];
  const featuredProjects = [
    {
      title: "Thailand Rally Championship 2024 Build",
      category: "CHAMPIONSHIP",
      image: "/images/img1.jpg",
      description: "Complete rally car build for championship-winning campaign",
    },
    {
      title: "4G63 Engine Development Program",
      category: "ENGINEERING",
      image: "/images/img2.jpg",
      description: "High-performance engine development and optimization",
    },
    {
      title: "Asia Pacific Circuit Series Support",
      category: "RACING",
      image: "/images/img3.jpg",
      description: "Professional race engineering and technical support",
    },
    {
      title: "Rally Academy Graduates 2024",
      category: "ACADEMY",
      image: "/images/img4.jpg",
      description: "Successfully trained drivers progressing to championships",
    },
  ];

  const partners = [
    {
      name: "Toyota Gazoo Racing Thailand",
      logo: "/partner/toyota.png",
    },
    {
      name: "TCD Asia",
      logo: "/partner/tcd.png",
    },
    {
      name: "Powerbrake",
      logo: "/partner/powerbrake.png",
    },
    {
      name: "WÜRTH",
      logo: "/partner/wurth.png",
    },
    {
      name: "Sabelt",
      logo: "/partner/sabelt.jpg",
    },
    {
      name: "Empire Motor Group",
      logo: "/partner/emc.jpg",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src="/images/img17.jpg"
            alt={t("hero.backgroundAlt")}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 px-4 sm:px-6 lg:px-8 text-left w-full max-w-7xl">
          <h1 className="text-5xl md:text-8xl mb-6 font-black tracking-tight text-white font-display">
            <span>{t("hero.line1")}</span>
            <br />
            <span className="text-accent-yellow">{t("hero.line2")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 mb-10 max-w-3xl">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/services"
              className="bg-accent-yellow text-black text-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-6 h-6 text-accent-yellow"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              {t("gallery.title")}{" "}
              <span className="text-accent-purple">
                {t("gallery.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              {t("gallery.description")}
            </p>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Core Business Units Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              {t("coreBusiness.title")}{" "}
              <span className="text-accent-purple">
                {t("coreBusiness.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              {t("coreBusiness.description")}
            </p>
          </div>

          <BusinessUnitSection />
        </div>
      </section>
      {/* Key Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              {t("proven_excellence.title")}{" "}
              <span className="text-accent-purple  ">
                {t("proven_excellence.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              {t("proven_excellence.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
            {achievements.slice(0, 4).map((achievement, index) => (
              <ProjectItem key={index} project={achievement} />
            ))}
          </div>
        </div>
      </section>
      {/* Featured Projects Carousel */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              {t("featuredProjectsSection.title")}{" "}
              <span className="text-accent-purple">
                {t("featuredProjectsSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              {t("featuredProjectsSection.description")}
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsCarousel projects={featuredProjects} />
      </div>
      {/* Ecosystem & Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              {t("partnersSection.title")}{" "}
              <span className="text-accent-purple">
                {t("partnersSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mb-12">
              {t("partnersSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="bg-white border border-zinc-200 transition-all duration-300 flex items-center justify-center min-h-30 w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-32 bg-linear-to-br from-white via-purple-100/35 to-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-yellow/10 skew-x-[-15deg] origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            {t("cta.title")}{" "}
            <span className="text-accent-purple  ">{t("cta.highlight")}</span>
          </h2>
          <p className="text-xl text-zinc-700 mb-10">{t("cta.description")}</p>
          <Link
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
