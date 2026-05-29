import api from "@/lib/api";
import { MileStone } from "./types";

export async function listMilestones() {
  try {
    const { data } = await api.get<{ data?: MileStone[] }>(
      "/api/milestones?populate[image][fields]=url",
    );
    return data.data || [];
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}

export async function getMilestoneById(documentId: string) {
  try {
    const { data } = await api.get<{ data?: MileStone }>(
      `/api/milestones/${documentId}?populate=*&fields[0]=title_th&fields[1]=title_en&fields[2]=description_th&fields[3]=description_en&fields[4]=content_th&fields[5]=content_en&fields[6]=publishedAt&fields[7]=year`,
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
