export type GalleryItem = {
  id: string;
  title_en: string;
  title_th: string;
  image: GalleryImage;
};

export type GalleryImage = {
  id: string;
  name: string;
  url: string;
};
