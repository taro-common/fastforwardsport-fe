import { GalleryItem, Image } from "../our-galleries/types";

export type Service = {
  id: number;
  documentId: string;
  title: string;
  title_en: string;
  title_th: string;
  description_th: string;
  description_en: string;
  content_en: string;
  content_th: string;
  has_action_button: boolean;
  publishedAt?: string;
  image: Image;
  tag: Tag;
};

export type Tag = {
  tag_th: string;
  tag_en: string;
  our_galleries: GalleryItem[];
};

const TAG_COLOR_MAP: Record<string, string> = {
  RALLY: "bg-yellow-500",
  ENGINE: "bg-purple-500",
  RACING: "bg-lime-500",
  CHAMPIONSHIP: "bg-purple-500",
  ACADEMY: "bg-blue-500",
  SUPPORT: "bg-green-500",
  FASTS: "bg-pink-500",
  DISTRIBUTOR: "bg-orange-500",
  MOTORSPORT: "bg-red-500",
};

const TAG_COLORS_FALLBACK = [
  "bg-orange-400",
  "bg-pink-400",
  "bg-teal-400",
  "bg-red-400",
  "bg-indigo-400",
  "bg-cyan-400",
  "bg-emerald-400",
  "bg-violet-500",
  "bg-fuchsia-400",
  "bg-rose-400",
  "bg-sky-400",
  "bg-amber-400",
];

export const getColorByTag = (tag?: string) => {
  if (!tag) return "bg-accent-yellow";
  const upper = tag.replace("-", "").toUpperCase();
  if (TAG_COLOR_MAP[upper]) return TAG_COLOR_MAP[upper];
  let hash = 0;
  for (let i = 0; i < upper.length; i++) {
    hash = (hash * 31 + upper.charCodeAt(i)) >>> 0;
  }
  return TAG_COLORS_FALLBACK[hash % TAG_COLORS_FALLBACK.length];
};
