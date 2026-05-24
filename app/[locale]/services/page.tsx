"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Service } from "@/app/api/services/types";
import { listServices } from "@/app/api/services/api";
import ServiceItem from "@/app/components/ServiceItem";

export default function ServicesPage() {
  const t = useTranslations("services");

  const [services, setServices] = useState<Service[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await listServices();
      setServices(response);
      setIsLoading(false);
    };

    fetchServices();
  }, []);
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-12 pb-52 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-accent-purple">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src="/service_cover.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-display">
            {t("hero.title")}{" "}
            <span className="text-accent-yellow ">{t("hero.highlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 max-w-3xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl font-bold   mb-6">All Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-zinc-600">Loading...</p>
              </div>
            ) : services && services.length > 0 ? (
              services.map((service) => {
                const bgColorClass =
                  service.title === "RALLY"
                    ? "accent-yellow"
                    : service.title === "ENGINE"
                      ? "accent-purple"
                      : service.title === "RACING"
                        ? "accent-lime"
                        : "accent-yellow";
                return (
                  <ServiceItem
                    key={service.documentId}
                    service={service}
                    color={bgColorClass}
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-zinc-600">No services available</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
