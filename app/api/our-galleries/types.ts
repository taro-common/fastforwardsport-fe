import { Tag } from "../services/types";

export type GalleryItem = {
  id: string;
  title_en: string;
  title_th: string;
  image: Image;
  tag: Tag;
};

export type Image = {
  id: string;
  name: string;
  url: string;
};
