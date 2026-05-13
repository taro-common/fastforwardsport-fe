import type { Metadata } from "next";
import { Bebas_Neue, Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Fast Forward Sport",
  description: "Motorsport Engineering Excellence",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale || "en"}
      className={`${prompt.variable} ${bebasNeue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
