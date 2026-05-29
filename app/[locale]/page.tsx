"use client";

import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import ProjectsCarousel from "../components/ProjectsCarousel";
import BusinessUnitSection from "../components/BusinessUnitSection";
import Gallery from "../components/Gallery";
import { IconArrowDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Project } from "../api/projects/types";
import { listProjects } from "../api/projects/api";
import { GalleryItem } from "../api/our-galleries/types";
import { listGalleryImages } from "../api/our-galleries/api";
import { Partner } from "../api/partners/types";
import { listPartner } from "../api/partners/api";
import { MileStone } from "../api/milestones/types";
import { listMilestones } from "../api/milestones/api";
import MileStoneItem from "../components/MileStoneItem";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [partner, setPartner] = useState<Partner | null>(null);
  const [mileStones, setMileStones] = useState<MileStone[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await listProjects();
      setProjects(response || []);
    };

    fetchProjects();

    const loadGalleryImages = async () => {
      const response = await listGalleryImages();
      const items = response;

      if (items && items.length > 0) {
        setGalleryImages(items);
      }
    };

    loadGalleryImages();

    const fetchPartner = async () => {
      const response = await listPartner();
      setPartner(response || null);
    };

    fetchPartner();

    const fetchMileStones = async () => {
      const response = await listMilestones();
      setMileStones(response || []);
    };

    fetchMileStones();
  }, [locale]);

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
          <h1 className="text-5xl md:text-8xl/32 mb-6 font-black tracking-tight text-white">
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
          <IconArrowDown size={32} className="text-accent-yellow" />
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

          <Gallery galleryImages={galleryImages} />
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
      {/* TODO: fetch API */}
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

          <div className="flex gap-6 overflow-x-auto">
            {mileStones.map((mileStone, index) => (
              <MileStoneItem key={index} mileStone={mileStone} />
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
        <ProjectsCarousel projects={projects} />
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
            {partner?.images?.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Partner ${index + 1}`}
                className="bg-white border border-zinc-200 transition-all duration-300 w-full aspect-square object-cover"
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
