import api from "@/lib/api";
import { Partner } from "./types";

export async function listPartner() {
  try {
    const { data } = await api.get<{ data?: Partner }>(
      `/api/partner?populate[images][fields]=url`,
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
