import api from "@/lib/api";
import { Contact, ContactFormData } from "./types";

export async function getContactInfo() {
  try {
    const { data } = await api.get<{ data?: Contact }>("/api/contact");
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}

export async function submitContact(requestData: ContactFormData) {
  try {
    const submitFormToken = process.env.NEXT_PUBLIC_SUBMIT_FORM_TOKEN;
    const { data } = await api.post<{ data?: Contact }>(
      "/api/submit-forms",
      {
        data: requestData,
      },
      {
        headers: submitFormToken
          ? { Authorization: `Bearer ${submitFormToken}` }
          : undefined,
      },
    );
    return data.data || null;
  } catch (e) {
    console.log("e: ", e);
    return null;
  }
}
