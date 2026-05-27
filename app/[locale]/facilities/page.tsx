"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import Gallery from "@/app/components/Gallery";
import { useEffect, useState } from "react";
import { Contact } from "@/app/api/contact/types";
import { getContactInfo } from "@/app/api/contact/api";
import { useLocale, useTranslations } from "next-intl";
import { GalleryItem } from "@/app/api/our-galleries/types";
import { listGalleryImages, listImageTags } from "@/app/api/our-galleries/api";
import { getColorByTag, Tag } from "@/app/api/services/types";

export default function FacilitiesPage() {
  const t = useTranslations("facilities");
  const locale = useLocale();

  const [contactInfo, setContactInfo] = useState<Contact | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await getContactInfo();
      setContactInfo(response);
    };

    const loadGalleryImages = async () => {
      const response = await listGalleryImages();
      const items = response;

      if (items && items.length > 0) {
        setGalleryImages(items);
      }
    };

    const fetchTags = async () => {
      const response = await listImageTags();
      setTags(response || []);
    };

    loadGalleryImages();

    fetchContactInfo();

    fetchTags();
  }, []);

  const time =
    locale === "en"
      ? contactInfo?.business_hours_en
      : contactInfo?.business_hours_th;

  const other = locale === "en" ? "Other" : "อื่นๆ";

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-12 pb-52 overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 z-0 bg-accent-purple">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src="/facility_cover.jpg"
            alt="Fast Forward Sport Facilities"
            layout="fill"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-display">
            {t("hero.title")}{" "}
            <span className="text-accent-yellow ">{t("hero.highlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 font-display">
              {t("workshop.title")}{" "}
              <span className="text-accent-purple ">
                {t("workshop.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              {t("workshop.description")}
            </p>
          </div>
          {tags.map((tag, index) => {
            const tagName = locale === "en" ? tag.tag_en : tag.tag_th;
            return (
              <div key={index} className="">
                <p
                  className={`text-black text-xs font-bold px-3 py-1.5 ${getColorByTag("WORKSHOP")} w-fit mt-8 mb-4`}
                >
                  {tagName}
                </p>
                <Gallery key={index} galleryImages={tag.our_galleries} />
              </div>
            );
          })}
          <div className="">
            <p
              className={`text-black text-xs font-bold px-3 py-1.5 ${getColorByTag("WORKSHOP")} w-fit mt-8 mb-4`}
            >
              {other}
            </p>
            <Gallery galleryImages={galleryImages.filter((img) => !img.tag)} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display">
              {t("cta.title")}{" "}
              <span className="text-accent-purple ">{t("cta.highlight")}</span>
            </h2>
            <p className="text-xl text-zinc-700 mb-10">
              {t("cta.description")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <svg
                className="w-8 h-8 text-accent-purple mx-auto mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div className="text-zinc-900 font-semibold mb-1">
                {t("contactInfo.phoneLabel")}
              </div>
              <div className="text-zinc-600">{contactInfo?.phone}</div>
            </div>
            <div>
              <svg
                className="w-8 h-8 text-accent-purple mx-auto mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div className="text-zinc-900 font-semibold mb-1">
                {t("contactInfo.emailLabel")}
              </div>
              <div className="text-zinc-600">{contactInfo?.email}</div>
            </div>
            <div>
              <svg
                className="w-8 h-8 text-accent-purple mx-auto mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-zinc-900 font-semibold mb-1">
                {t("contactInfo.hoursLabel")}
              </div>
              <div className="text-zinc-600">{time}</div>
            </div>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-linear-to-r from-accent-yellow to-accent-lime text-black px-12 py-6 rounded-lg font-bold text-2xl hover:bg-accent-lime transition-all duration-200 transform hover:scale-105 text-center"
            >
              {t("cta.primaryButton")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
