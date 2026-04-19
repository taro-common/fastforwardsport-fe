import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function FacilitiesPage() {
  const workshopGallery = [
    {
      title: "Main Workshop Floor",
      description:
        "8,000 sq ft climate-controlled workspace with professional equipment",
      image: "/images/img11.jpg",
      category: "Workshop Space",
    },
    {
      title: "Hydraulic Lifting Systems",
      description: "4-post alignment rigs and professional lifting equipment",
      image: "/images/img12.jpg",
      category: "Equipment",
    },
    {
      title: "Engine Dyno Cell",
      description: "1000bhp rolling road with full data acquisition systems",
      image: "/images/img13.jpg",
      category: "Testing",
    },
    {
      title: "Fabrication Bay",
      description: "TIG/MIG welding stations and precision fabrication tools",
      image: "/images/img14.jpg",
      category: "Fabrication",
    },
    {
      title: "Rally Car Build",
      description: "Championship-winning cars under construction",
      image: "/images/img15.jpg",
      category: "Work in Progress",
    },
    {
      title: "Race Car Preparation",
      description: "Pre-event technical preparation and setup",
      image: "/images/img16.jpg",
      category: "Work in Progress",
    },
  ];

  const equipment = [
    {
      category: "Diagnostic & Tuning",
      items: [
        "Bosch Motorsport ECU Programming Suite",
        "Cosworth Data Acquisition Systems",
        "Professional Engine Dynamometer (1000bhp)",
        "Emissions Analysis Equipment",
        "Advanced Telemetry Systems",
      ],
      icon: "⚙️",
    },
    {
      category: "Fabrication & Machining",
      items: [
        "TIG/MIG Welding Stations (FIA Approved)",
        "CNC Milling and Turning Centers",
        "Laser Cutting Services",
        "Composite Workshop Facilities",
        "CAD/CAM Design Suite",
      ],
      icon: "🔧",
    },
    {
      category: "Chassis & Suspension",
      items: [
        "4-Post Alignment Rigs",
        "Corner Weight Scales (0.1kg accuracy)",
        "Suspension Geometry Measurement",
        "Wheel Alignment Systems",
        "Brake Dynamometer Testing",
      ],
      icon: "🏎️",
    },
    {
      category: "Quality & Safety",
      items: [
        "ISO 9001 Certified Workshop",
        "FIA Approved Welding Standards",
        "Professional Inspection Equipment",
        "3D Scanning and Modeling",
        "Comprehensive Tool Calibration",
      ],
      icon: "✓",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "FIA Approved Welding & Fabrication",
    "Motorsport UK Licensed Workshop",
    "Environmental Management Certified",
  ];

  const capacityInfo = [
    {
      title: "Workshop Capacity",
      description: "Simultaneous vehicle capacity and project handling",
      details: [
        "12 Rally/Race car build slots",
        "6 Engine development projects",
        "4 R&D and testing bays",
        "Dedicated storage for 20+ vehicles",
      ],
      icon: "🏭",
    },
    {
      title: "Service Turnaround",
      description: "Typical project timelines and delivery schedules",
      details: [
        "Pre-race preparation: 3-5 days",
        "Engine rebuild: 2-3 weeks",
        "Complete build: 8-12 weeks",
        "Fabrication work: 1-4 weeks",
      ],
      icon: "⏱️",
    },
    {
      title: "Booking Availability",
      description: "Current capacity and scheduling information",
      details: [
        "Accepting projects for Q2 2026",
        "Rush service available",
        "Pre-season preparation slots open",
        "Contact for immediate availability",
      ],
      icon: "📅",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          <Image
            src="/images/img17.jpg"
            alt="Fast Forward Sport Facilities"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            OUR <span className="text-accent-yellow">FACILITIES</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            World-class infrastructure and technical capability for
            championship-winning performance
          </p>
        </div>
      </section>

      {/* Workshop Gallery Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              WORKSHOP <span className="text-accent-yellow">GALLERY</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              State-of-the-art facilities equipped for professional motorsport
              engineering
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
              EQUIPMENT & <span className="text-accent-yellow">TOOLS</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Specialized equipment and certified tools for precision motorsport
              engineering
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
              CERTIFICATIONS &{" "}
              <span className="text-accent-yellow">STANDARDS</span>
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
              CAPACITY &{" "}
              <span className="text-accent-yellow">AVAILABILITY</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Workshop capacity and service delivery information
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
              BOOKING <span className="text-accent-yellow">CALENDAR</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black p-6 rounded-xl border border-zinc-700">
                <div className="text-accent-lime text-lg font-bold mb-2">
                  Q2 2026
                </div>
                <div className="text-white text-2xl font-bold mb-2">
                  April - June
                </div>
                <div className="text-zinc-400 text-sm mb-4">
                  Limited slots available
                </div>
                <div className="bg-accent-lime h-2 rounded-full mb-2"></div>
                <div className="text-zinc-400 text-xs">75% Booked</div>
              </div>
              <div className="bg-black p-6 rounded-xl border border-zinc-700">
                <div className="text-accent-yellow text-lg font-bold mb-2">
                  Q3 2026
                </div>
                <div className="text-white text-2xl font-bold mb-2">
                  July - Sept
                </div>
                <div className="text-zinc-400 text-sm mb-4">
                  Good availability
                </div>
                <div className="bg-accent-yellow h-2 rounded-full w-1/2 mb-2"></div>
                <div className="text-zinc-400 text-xs">50% Booked</div>
              </div>
              <div className="bg-black p-6 rounded-xl border border-zinc-700">
                <div className="text-accent-purple text-lg font-bold mb-2">
                  Q4 2026
                </div>
                <div className="text-white text-2xl font-bold mb-2">
                  Oct - Dec
                </div>
                <div className="text-zinc-400 text-sm mb-4">
                  Wide availability
                </div>
                <div className="bg-accent-purple h-2 rounded-full w-1/4 mb-2"></div>
                <div className="text-zinc-400 text-xs">25% Booked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              EXPERIENCE OUR{" "}
              <span className="text-accent-yellow">FACILITIES</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10">
              Schedule a facility tour or inquire about workshop capacity and
              availability
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105 text-center"
            >
              SCHEDULE FACILITY TOUR
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-accent-yellow text-accent-yellow px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent-yellow hover:text-black transition-all duration-200 transform hover:scale-105 text-center"
            >
              INQUIRE ABOUT CAPACITY
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
              <div className="text-white font-semibold mb-1">Phone</div>
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
              <div className="text-white font-semibold mb-1">Email</div>
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
              <div className="text-white font-semibold mb-1">Hours</div>
              <div className="text-zinc-400">Mon-Fri: 8:00 AM - 6:00 PM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
