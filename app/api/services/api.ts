import api from "@/lib/api";
import { Service } from "./types";

export async function listServices() {
  try {
    const { data } = await api.get<{ data?: Service[] }>(
      "/api/services?populate=*",
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}

export async function getServiceById(documentId: string) {
  try {
    const { data } = await api.get<{ data?: Service }>(
      `/api/services/${documentId}?populate=*`,
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
