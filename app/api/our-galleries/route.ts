import api from "@/lib/api";
import { GalleryItem } from "./types";

export async function listGalleryImages() {
  try {
    const { data } = await api.get<{ data?: GalleryItem[] }>(
      "/api/our-galleries?populate=*",
    );
    return data.data || [];
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
