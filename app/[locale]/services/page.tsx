import { Link } from "@/i18n/routing";

export default function ServicesPage() {
  const services = [
    {
      category: "RALLY",
      title: "Rally Preparation & Support",
      description:
        "Complete rally car preparation services from initial build through to championship-level competition support.",
      features: [
        "Full rally car builds and conversions",
        "FIA homologation and technical inspection",
        "Event preparation and servicing",
        "Track-side technical support",
        "Recce and pace note services",
        "Mechanical and electrical systems",
      ],
      color: "accent-yellow",
    },
    {
      category: "ENGINE",
      title: "Engine Development & Tuning",
      description:
        "High-performance engine builds, dyno testing, and calibration services for maximum power and reliability.",
      features: [
        "Custom engine builds and rebuilds",
        "Turbocharger and supercharger systems",
        "Engine mapping and ECU calibration",
        "Dyno testing and development",
        "Performance upgrades and modifications",
        "Reliability testing and validation",
      ],
      color: "accent-purple",
    },
    {
      category: "RACING",
      title: "Circuit Racing Support",
      description:
        "Professional race engineering and technical support for all levels of circuit racing competition.",
      features: [
        "Race car setup and optimization",
        "Data analysis and telemetry",
        "Track-side engineering support",
        "Suspension geometry and setup",
        "Aerodynamic development",
        "Championship technical support",
      ],
      color: "accent-lime",
    },
    {
      category: "ACADEMY",
      title: "Driver Development",
      description:
        "Professional driver coaching and development programs designed to accelerate your racing career.",
      features: [
        "One-on-one driver coaching",
        "Track day instruction",
        "Race craft development",
        "Data analysis training",
        "Physical fitness programs",
        "Mental preparation coaching",
      ],
      color: "accent-yellow",
    },
    {
      category: "SUPPORT",
      title: "Technical Consultancy",
      description:
        "Expert technical advice and consultancy services for all aspects of motorsport engineering.",
      features: [
        "Technical regulations compliance",
        "Project planning and budgeting",
        "Component selection and specification",
        "Safety equipment installation",
        "Vehicle homologation support",
        "Technical training programs",
      ],
      color: "accent-purple",
    },
    {
      category: "FABRICATION",
      title: "Custom Fabrication",
      description:
        "In-house fabrication capabilities for custom components and specialist motorsport equipment.",
      features: [
        "Roll cage design and fabrication",
        "Custom exhaust systems",
        "Fuel system fabrication",
        "Aluminum and steel welding",
        "CNC machining services",
        "Composite component manufacture",
      ],
      color: "accent-lime",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          <img
            src="/images/img25.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            OUR <span className="text-accent-yellow">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            Comprehensive motorsport engineering solutions for competitive
            racing success
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
                        className="w-5 h-5 text-accent-yellow mr-2 mt-1 flex-shrink-0"
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
            OUR <span className="text-accent-yellow">PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                CONSULTATION
              </h3>
              <p className="text-zinc-400">
                Initial discussion to understand your goals and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PLANNING</h3>
              <p className="text-zinc-400">
                Detailed project planning and specification development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">EXECUTION</h3>
              <p className="text-zinc-400">
                Professional implementation with regular progress updates
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SUPPORT</h3>
              <p className="text-zinc-400">
                Ongoing technical support and performance optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Contact us today to discuss your motorsport engineering needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
