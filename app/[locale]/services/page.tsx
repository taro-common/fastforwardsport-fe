import ProjectItem from "@/app/components/ProjectItem";
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
  const services = [
    {
      tag: "MOTORSPORT",
      title: "The Business Engine",
      date: "2024-2025",
      description:
        "Championship racing team, product testing lab, brand credibility platform",
      image: "/images/img21.jpg",
      color: "bg-accent-yellow",
    },
    {
      tag: "FAST-S",
      title: "Motorsport Engineering Garage",
      date: "2024-2025",
      description:
        "Professional service center, product installation, customer experience hub",
      image: "/images/img21.jpg",
      color: "bg-accent-purple",
    },
    {
      tag: "Engineering & R&D",
      title: "Collaborate with Manufacturer",
      date: "2024-2025",
      description: "Vehicle development, data analysis, technical innovation",
      image: "/images/img21.jpg",
      color: "bg-accent-lime",
    },
    {
      tag: "DISTRIBUTOR",
      title: "Premium Products",
      date: "2024-2025",
      description:
        "Official distribution of Powerbrake, Sabelt, WURTH, FF SPORT merchandise",
      image: "/images/img21.jpg",
      color: "bg-white",
    },
  ];
  const processSteps = t.raw("process.steps") as ProcessStep[];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-accent-purple">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          {/* <img
            src="/images/img25.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {t("hero.title")}{" "}
            <span className="text-accent-yellow italic">
              {t("hero.highlight")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ProjectItem key={index} project={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-20 bg-black">
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
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
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
      </section> */}
    </div>
  );
}
