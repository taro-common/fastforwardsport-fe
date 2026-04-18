"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

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

  const coreBusinessUnits = [
    {
      title: "RAAT Championship",
      description:
        "Professional rally team competing at the highest level in Thailand and Asia-Pacific region.",
      icon: "🏆",
      link: "/services#rally",
    },
    {
      title: "Fast Forward Racing Academy",
      description:
        "Comprehensive driver development programs from grassroots to professional racing.",
      icon: "🎓",
      link: "/services#academy",
    },
    {
      title: "Fast Forward Engineering",
      description:
        "Advanced motorsport engineering services, R&D, and performance optimization.",
      icon: "⚙️",
      link: "/services#engineering",
    },
    {
      title: "Fast Forward Channel",
      description:
        "Digital content platform sharing motorsport stories, technical knowledge, and lifestyle.",
      icon: "📺",
      link: "/services#media",
    },
  ];

  const achievements = [
    {
      title: "Thailand Rally Championship 2024 & 2025 Champion",
      description: "Overall & Royal Cup Winner",
      icon: "🏆",
    },
    {
      title: "TRRC 2025 Round 1 Champion",
      description: "Thailand Regional Rally Championship",
      icon: "🥇",
    },
    {
      title: "XCR Sprint Cup Hokkaido 2025",
      description: "Podium Finish",
      icon: "🏅",
    },
    {
      title: "Asia Cross Country Rally (AXCR)",
      description: "Multiple Podiums",
      icon: "🌏",
    },
    {
      title: "Rally Hokkaido Japan",
      description: "International Recognition",
      icon: "🇯🇵",
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
    "Toyota Gazoo Racing Thailand",
    "TCD Asia",
    "Powerbrake",
    "WÜRTH",
    "Sabelt",
    "Empire Motor Group",
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

  const galleryImages = [
    {
      src: "/images/img1.jpg",
      alt: "Rally Championship Racing",
      category: "Rally",
    },
    {
      src: "/images/img2.jpg",
      alt: "Engine Development",
      category: "Engineering",
    },
    {
      src: "/images/img3.jpg",
      alt: "Circuit Racing",
      category: "Racing",
    },
    {
      src: "/images/img10.jpg",
      alt: "Race Car Build",
      category: "Workshop",
    },
    {
      src: "/images/img11.jpg",
      alt: "Workshop Floor",
      category: "Facilities",
    },
    {
      src: "/images/img15.jpg",
      alt: "Rally Car Preparation",
      category: "Rally",
    },
    {
      src: "/images/img20.jpg",
      alt: "Track Performance",
      category: "Racing",
    },
    {
      src: "/images/img22.jpg",
      alt: "Technical Development",
      category: "Engineering",
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
            alt="RAAT Championship Racing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-accent-yellow">EXPERT TECHNOLOGY</span>
            <br />
            <span className="text-white">FOR LIFE</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto">
            From Championship Racing to Engineering Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-accent-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
            >
              EXPLORE OUR SERVICES
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

      {/* 4 Core Business Units Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CORE <span className="text-accent-yellow">BUSINESS UNITS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Building Thailand's comprehensive motorsport ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreBusinessUnits.map((unit, index) => (
              <Link
                key={index}
                href={unit.link}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {unit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-yellow transition-colors">
                  {unit.title}
                </h3>
                <p className="text-zinc-400">{unit.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              PROVEN <span className="text-accent-yellow">EXCELLENCE</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Championship victories and international recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FEATURED <span className="text-accent-purple">PROJECTS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Latest builds and engineering achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-accent-yellow text-black text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-accent-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors duration-200"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem & Partners Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              BUILDING THAILAND'S{" "}
              <span className="text-accent-yellow">MOTORSPORT ECOSYSTEM</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
              Strategic partnerships with industry leaders driving innovation
              and growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300 flex items-center justify-center min-h-30"
              >
                <p className="text-white text-center font-semibold text-sm">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Blog Feed */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FAST FORWARD <span className="text-accent-yellow">CHANNEL</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Latest stories, technical insights, and motorsport lifestyle
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
              className="inline-block bg-accent-yellow text-black px-8 py-3 rounded-full font-semibold hover:bg-accent-lime transition-colors duration-200"
            >
              VIEW ALL STORIES
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              OUR <span className="text-accent-yellow">GALLERY</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Behind the scenes of championship-winning performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
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
                <div className="absolute top-3 left-3 bg-accent-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
                  {image.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO{" "}
            <span className="text-accent-yellow">EXPERIENCE FAST FORWARD?</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Join us in building Thailand's motorsport future
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
