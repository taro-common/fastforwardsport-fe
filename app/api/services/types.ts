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

export const getColorByTag = (tag?: string) => {
  if (tag === "RALLY") return "bg-accent-yellow";
  if (tag === "ENGINE") return "bg-accent-purple";
  if (tag === "RACING") return "bg-accent-lime";
  if (tag === "CHAMPIONSHIP") return "bg-purple-500";
  if (tag === "ACADEMY") return "bg-blue-500";
  if (tag === "SUPPORT") return "bg-green-500";
  return "bg-accent-yellow";
};
