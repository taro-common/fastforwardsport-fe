import { Image } from "../our-galleries/types";
import { Tag } from "../services/types";

export type Project = {
  id: number;
  documentId: string;
  title_en: string;
  title_th: string;
  description_en: string;
  description_th: string;
  content_en: string;
  content_th: string;
  tag?: Tag;
  image?: Image[];
  publishedAt: string;
};
