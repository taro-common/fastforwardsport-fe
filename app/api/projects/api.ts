import api from "@/lib/api";
import { Project } from "./types";

export async function listProjects() {
  try {
    const { data } = await api.get<{ data?: Project[] }>(
      "/api/projects?populate[tag][fields]=*&populate[image][fields][0]=url&fields[0]=title_th&fields[1]=title_en&fields[2]=documentId&fields[3]=description_th&fields[4]=description_en",
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
