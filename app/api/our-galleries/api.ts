import api from "@/lib/api";
import { GalleryItem } from "./types";
import { Tag } from "../services/types";

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

export async function listImageTags() {
  try {
    const { data } = await api.get<{ data?: Tag[] }>(
      `/api/our-gallery-tags?filters[our_galleries][id][$notNull]=true&populate[our_galleries][populate][image][fields][0]=url`,
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
