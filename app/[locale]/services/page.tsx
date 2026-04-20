import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type ServiceItem = {
  category: string;
  title: string;
  description: string;
  features: string[];
  color: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export default async function ServicesPage() {
  const t = await getTranslations("services");
  const services = t.raw("items") as ServiceItem[];
  const processSteps = t.raw("process.steps") as ProcessStep[];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          <img
            src="/images/img25.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
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

      {/* Services Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <span
                  className={`inline-block bg-${service.color} text-black text-xs font-bold px-3 py-1.5 rounded-full mb-4`}
                >
                  {service.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-zinc-400"
                    >
                      <svg
                        className="w-5 h-5 text-accent-yellow mr-2 mt-1 shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t("process.title")}{" "}
            <span className="text-accent-yellow">{t("process.highlight")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-zinc-300 mb-10">{t("cta.description")}</p>
          <Link
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
