import { Image } from "../our-galleries/types";

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
};
