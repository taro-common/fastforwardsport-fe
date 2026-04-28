"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import BusinessUnitCard from "../components/BusinessUnitCard";
import { IconShieldCheckFilled } from "@tabler/icons-react";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function Home() {
  const t = useTranslations("home");
  const achievements = t.raw("achievements") as Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  const featuredProjects = t.raw("featuredProjects") as Array<{
    title: string;
    category: string;
    image: string;
    description: string;
  }>;

  const galleryMessageImages = t.raw("gallery.images") as Array<{
    alt: string;
    category: string;
  }>;

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Define galleryImages before openLightbox
  const galleryImages = [
    {
      src: "/images/img1.jpg",
      ...galleryMessageImages[0],
    },
    {
      src: "/images/img2.jpg",
      ...galleryMessageImages[1],
    },
    {
      src: "/images/img3.jpg",
      ...galleryMessageImages[2],
    },
    {
      src: "/images/img10.jpg",
      ...galleryMessageImages[3],
    },
    {
      src: "/images/img11.jpg",
      ...galleryMessageImages[4],
    },
    {
      src: "/images/img15.jpg",
      ...galleryMessageImages[5],
    },
    {
      src: "/images/img20.jpg",
      ...galleryMessageImages[6],
    },
    {
      src: "/images/img22.jpg",
      ...galleryMessageImages[7],
    },
    {
      src: "/images/img17.jpg",
      ...galleryMessageImages[8],
    },
  ];

  const openLightbox = (src: string) => {
    const index = galleryImages.findIndex((img) => img.src === src);
    setLightboxIndex(index);
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(galleryImages[newIndex].src);
  };

  const prevImage = () => {
    const newIndex =
      (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(galleryImages[newIndex].src);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxImage, lightboxIndex]);

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

  const newsArticles = [
    {
      title: "Thailand Rally Championship Victory 2025",
      category: "Motorsport Story",
      image: "/images/img5.jpg",
      date: "March 2025",
    },
    {
      title: "4G63 Engine Development: Technical Deep Dive",
      category: "Engineering Know-how",
      image: "/images/img6.jpg",
      date: "February 2025",
    },
    {
      title: "Rally Hokkaido Japan: International Experience",
      category: "Race Experience",
      image: "/images/img7.jpg",
      date: "January 2025",
    },
  ];

  // galleryImages already defined above at line 38-72

  const galleryLayoutClasses = [
    "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1 lg:col-span-1 lg:row-span-1",
  ];

  const services = [
    {
      tag: "MOTORSPORT",
      title: "The Business Engine",
      date: "2024-2025",
      description:
        "Championship racing team, product testing lab, brand credibility platform",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
    {
      tag: "FAST-S",
      title: "Motorsport Engineering Garage",
      date: "2024-2025",
      description:
        "Professional service center, product installation, customer experience hub",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
    {
      tag: "Engineering & R&D",
      title: "Collaborate with Manufacturer",
      date: "2024-2025",
      description: "Vehicle development, data analysis, technical innovation",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
    {
      tag: "DISTRIBUTOR",
      title: "Premium Products",
      date: "2024-2025",
      description:
        "Official distribution of Powerbrake, Sabelt, WURTH, FF SPORT merchandise",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/70 to-purple-900/50 z-10" />
          <img
            src="/images/img17.jpg"
            alt={t("hero.backgroundAlt")}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 px-4 sm:px-6 lg:px-8 text-left w-full max-w-7xl">
          <h1 className="text-5xl md:text-8xl mb-6 leading-[0.95] font-black tracking-tight">
            <span className="text-white">{t("hero.line1")}</span>
            <br />
            <span className="text-accent-purple italic">{t("hero.line2")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl">
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-accent-purple italic">GALLERY</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t("gallery.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[180px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden cursor-pointer min-h-45 ${
                  galleryLayoutClasses[index] ?? "col-span-1 row-span-1"
                }`}
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-white mx-auto mb-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                    </svg>
                    <span className="text-white text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business Units Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CORE{" "}
              <span className="text-accent-purple italic">BUSINESS UNITS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t("coreBusiness.description")}
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreBusinessUnits.map((unit, index) => (
              <Link
                key={index}
                href={unit.link}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {unit.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-3 group-hover:text-accent-yellow transition-colors">
                  {unit.title}
                </h3>
                <p className="text-xl text-zinc-300 font-bold mb-1">
                  {unit.headline}
                </p>
                <p className="text-zinc-400">{unit.description}</p>
              </Link>
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((unit, index) => (
              <BusinessUnitCard key={index} unit={unit} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              PROVEN{" "}
              <span className="text-accent-purple italic">EXCELLENCE</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t("achievementsSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center bg-zinc-900 p-4 border border-zinc-800 hover:border-accent-yellow transition-all duration-300 gap-4"
              >
                <IconShieldCheckFilled className="text-accent-yellow" />
                <p className="text-white text-lg">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="pt-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FEATURED{" "}
              <span className="text-accent-purple italic">PROJECTS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t("featuredProjectsSection.description")}
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsCarousel projects={featuredProjects} />
      </div>

      {/* Ecosystem & Partners Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              BUILDING THAILAND'S{" "}
              <span className="text-accent-purple italic">
                MOTORSPORT ECOSYSTEM
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mb-12">
              {t("partnersSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="bg-zinc-900 border border-zinc-800 hover:border-accent-yellow transition-all duration-300 flex items-center justify-center min-h-30 w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Blog Feed */}
      {/* <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FAST FORWARD <span className="text-accent-yellow">CHANNEL</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t("newsSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-accent-yellow transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-yellow text-black text-xs font-bold px-3 py-1.5 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-500 text-sm mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-yellow transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-accent-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-accent-lime transition-colors duration-200"
            >
              {t("newsSection.viewAll")}
            </Link>
          </div>
        </div>
      </section> */}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-yellow transition-colors duration-200 z-60"
            onClick={closeLightbox}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 text-white hover:text-accent-yellow transition-colors duration-200 z-60"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <svg
              className="w-12 h-12"
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

          {/* Next Button */}
          <button
            className="absolute right-4 text-white hover:text-accent-yellow transition-colors duration-200 z-60"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <svg
              className="w-12 h-12"
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

          {/* Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <img
              src={lightboxImage}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-black/70 px-6 py-3 rounded-full backdrop-blur-sm">
              <p className="text-white text-sm font-semibold mb-1">
                {galleryImages[lightboxIndex].alt}
              </p>
              <p className="text-zinc-400 text-xs">
                {t("gallery.imageCount", {
                  current: lightboxIndex + 1,
                  total: galleryImages.length,
                })}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA Section */}
      <section className="py-32 bg-linear-to-br from-black via-purple-900/20 to-black relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-yellow/10 skew-x-[-15deg] origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO{" "}
            <span className="text-accent-purple italic">
              EXPERIENCE FAST FORWARD?
            </span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10">{t("cta.description")}</p>
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
