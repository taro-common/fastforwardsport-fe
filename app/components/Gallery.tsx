"use client";

import {
  IconChevronLeft,
  IconChevronRight,
  IconX,
  IconZoom,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GalleryItem } from "../api/our-galleries/types";
import { useLocale } from "next-intl";

export default function Gallery({
  galleryImages,
}: {
  galleryImages: GalleryItem[];
}) {
  const locale = useLocale();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

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

  const openLightbox = (src: string) => {
    const index = galleryImages.findIndex((item) => item.image.url === src);
    setLightboxIndex(index);
    setLightboxImage(src);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(galleryImages[newIndex].image.url);
  };

  const prevImage = () => {
    const newIndex =
      (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(galleryImages[newIndex].image.url);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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

  const title =
    locale === "th"
      ? galleryImages[lightboxIndex]?.title_th
      : galleryImages[lightboxIndex]?.title_en;

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[180px]">
        {galleryImages.slice(0, 9).map((item, index) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden cursor-pointer min-h-45 ${
              galleryLayoutClasses[index] ?? "col-span-1 row-span-1"
            }`}
            onClick={() => openLightbox(item.image.url)}
          >
            <img
              src={item.image.url}
              alt={item.image.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
              <div className="text-center">
                <IconZoom className="text-white w-12 h-12 font-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {lightboxImage &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-100 bg-black/96 backdrop-blur-xs flex flex-col items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-zinc-800 bg-white/90 border border-zinc-200 rounded-full p-2 hover:text-accent-purple transition-colors duration-200 z-110"
              onClick={closeLightbox}
            >
              <IconX className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 text-zinc-800 bg-white/90 border border-zinc-200 rounded-full p-2 hover:text-accent-purple transition-colors duration-200 z-110"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <IconChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 text-zinc-800 bg-white/90 border border-zinc-200 rounded-full p-2 hover:text-accent-purple transition-colors duration-200 z-110"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <IconChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl z-105 overflow-hidden">
              {/* Image */}
              <img
                src={lightboxImage}
                alt={galleryImages[lightboxIndex].image.url}
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Info */}
            {title && (
              <div className="mt-6 text-center z-110">
                <div className="bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm border border-zinc-200">
                  <p className="text-sm font-semibold">{title}</p>
                </div>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
