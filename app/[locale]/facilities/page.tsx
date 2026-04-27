import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type FacilitiesItem = {
  title: string;
  description: string;
  image?: string;
  category?: string;
  items?: string[];
  details?: string[];
  icon?: string;
};

type BookingPeriod = {
  quarter: string;
  months: string;
  status: string;
  booked: string;
  color: string;
  width: string;
  textColor: string;
};

export default async function FacilitiesPage() {
  const t = await getTranslations("facilities");
  const workshopGallery = t.raw("workshop.items") as Required<FacilitiesItem>[];
  const equipment = t.raw("equipment") as Required<FacilitiesItem>[];
  const certifications = t.raw("certifications") as string[];
  const capacityInfo = t.raw("capacityInfo") as Required<FacilitiesItem>[];
  const bookingPeriods = t.raw("bookingCalendar.periods") as BookingPeriod[];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-accent-purple">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          {/* <Image
            src="/images/img17.jpg"
            alt="Fast Forward Sport Facilities"
            fill
            className="object-cover"
            priority
          /> */}
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {t("hero.title")}{" "}
            <span className="text-accent-yellow">{t("hero.highlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Workshop Gallery Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("workshop.title")}{" "}
              <span className="text-accent-yellow">
                {t("workshop.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t("workshop.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopGallery.map((item, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Tools Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("equipmentSection.title")}{" "}
              <span className="text-accent-yellow">
                {t("equipmentSection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t("equipmentSection.description")}
            </p>
          </div>

          {/* Equipment Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {equipment.map((category, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-zinc-400"
                    >
                      <svg
                        className="w-5 h-5 text-accent-yellow mr-3 mt-1 shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-linear-to-r from-zinc-900 to-zinc-800 p-8 rounded-2xl border border-zinc-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t("certificationsSection.title")}{" "}
              <span className="text-accent-yellow">
                {t("certificationsSection.highlight")}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-black p-4 rounded-xl border border-accent-yellow/20"
                >
                  <svg
                    className="w-6 h-6 text-accent-yellow mr-3 shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capacity & Availability Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("capacitySection.title")}{" "}
              <span className="text-accent-yellow">
                {t("capacitySection.highlight")}
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              {t("capacitySection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capacityInfo.map((info, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{info.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {info.title}
                </h3>
                <p className="text-zinc-400 text-center mb-6">
                  {info.description}
                </p>
                <div className="space-y-3">
                  {info.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start bg-black p-3 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span className="text-zinc-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Availability Calendar Placeholder */}
          <div className="mt-16 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t("bookingCalendar.title")}{" "}
              <span className="text-accent-yellow">
                {t("bookingCalendar.highlight")}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bookingPeriods.map((period) => (
                <div
                  key={period.quarter}
                  className="bg-black p-6 rounded-xl border border-zinc-700"
                >
                  <div className={`${period.textColor} text-lg font-bold mb-2`}>
                    {period.quarter}
                  </div>
                  <div className="text-white text-2xl font-bold mb-2">
                    {period.months}
                  </div>
                  <div className="text-zinc-400 text-sm mb-4">
                    {period.status}
                  </div>
                  <div
                    className={`${period.color} h-2 rounded-full ${period.width} mb-2`}
                  ></div>
                  <div className="text-zinc-400 text-xs">{period.booked}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("cta.title")}{" "}
              <span className="text-accent-yellow">{t("cta.highlight")}</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10">
              {t("cta.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105 text-center"
            >
              {t("cta.primaryButton")}
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-accent-yellow text-accent-yellow px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-yellow hover:text-black transition-all duration-200 transform hover:scale-105 text-center"
            >
              {t("cta.secondaryButton")}
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <svg
                className="w-8 h-8 text-accent-yellow mx-auto mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div className="text-white font-semibold mb-1">
                {t("contactInfo.phoneLabel")}
              </div>
              <div className="text-zinc-400">+66 XX XXX XXXX</div>
            </div>
            <div>
              <svg
                className="w-8 h-8 text-accent-yellow mx-auto mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div className="text-white font-semibold mb-1">
                {t("contactInfo.emailLabel")}
              </div>
              <div className="text-zinc-400">fastforwardsport@outlook.com</div>
            </div>
            <div>
              <svg
                className="w-8 h-8 text-accent-yellow mx-auto mb-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-white font-semibold mb-1">
                {t("contactInfo.hoursLabel")}
              </div>
              <div className="text-zinc-400">{t("contactInfo.hoursValue")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
