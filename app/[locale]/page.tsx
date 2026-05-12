"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import BusinessUnitCard from "../components/BusinessUnitCard";
import { IconShieldCheckFilled } from "@tabler/icons-react";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function Home() {
  const t = useTranslations("home");
  const achievements = [
    {
      title: "Thailand Rally Championship 2024 & 2025 Champion",
      description: "Overall & Royal Cup Winner",
    },
    {
      title: "TRRC 2025 Round 1 Champion",
      description: "Thailand Regional Rally Championship",
    },
    {
      title: "XCR Sprint Cup Hokkaido 2025",
      description: "Podium Finish",
    },
    {
      title: "Asia Cross Country Rally (AXCR)",
      description: "Multiple Podiums",
    },
    {
      title: "Rally Hokkaido Japan",
      description: "International Recognition",
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

  const galleryMessageImages = [
    { alt: "Rally Car in Action" },
    { alt: "Engine Tuning Session" },
    { alt: "Team Celebrating Victory" },
    { alt: "Driver Training at Rally Academy" },
    { alt: "Technical Workshop with Partners" },
    { alt: "Car Setup for Circuit Racing" },
    { alt: "Rally Car Jumping over Terrain" },
    { alt: "Data Analysis in Engineering Lab" },
    { alt: "Team Strategizing in Garage" },
  ];

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
                <div className="absolute inset-0 bg-white/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-zinc-900 mx-auto mb-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                    </svg>
                    <span className="text-zinc-900 text-sm font-semibold">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((unit, index) => (
              <BusinessUnitCard key={index} unit={unit} />
            ))}
          </div>
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

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 border border-zinc-200 hover:border-accent-yellow transition-all duration-300 gap-4"
              >
                <IconShieldCheckFilled className="text-accent-yellow" />
                <p className="text-zinc-900 text-lg">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="pt-20 bg-zinc-50">
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

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
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

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-white/96 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-zinc-800 bg-white/90 border border-zinc-200 rounded-full p-2 hover:text-accent-yellow transition-colors duration-200 z-60"
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
            className="absolute left-4 text-zinc-800 bg-white/90 border border-zinc-200 rounded-full p-2 hover:text-accent-yellow transition-colors duration-200 z-60"
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
            className="absolute right-4 text-zinc-800 bg-white/90 border border-zinc-200 rounded-full p-2 hover:text-accent-yellow transition-colors duration-200 z-60"
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
            <div className="bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm border border-zinc-200">
              <p className="  text-sm font-semibold mb-1">
                {galleryImages[lightboxIndex].alt}
              </p>
              <p className="text-zinc-600 text-xs">
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
