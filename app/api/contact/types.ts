export type Contact = {
  email: string;
  phone: string;
  address_th: string;
  address_en: string;
  google_map_url: string;
  facebook_url: string;
  line_id: string;
  line_url: string;
  instagram_url: string;
  whatsapp_url: string;
  twitter_url: string;
  youtube_url: string;
  tiktok_url: string;
  business_hours_th: string;
  business_hours_en: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
