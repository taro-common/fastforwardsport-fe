import api from "@/lib/api";
import { Contact } from "./types";

export async function getContactInfo() {
  try {
    const { data } = await api.get<{ data?: Contact }>("/api/contact");
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
