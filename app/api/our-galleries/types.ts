export type GalleryItem = {
  id: string;
  title_en: string;
  title_th: string;
  image: Image;
};

export type Image = {
  id: string;
  name: string;
  url: string;
};
