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
