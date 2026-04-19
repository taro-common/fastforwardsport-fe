import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function AboutPage() {
  const missionPillars = [
    {
      title: "Motorsport Ecosystem Development",
      description:
        "Establish comprehensive ecosystem through national and international events",
      icon: "🏁",
    },
    {
      title: "Technology & Innovation Leadership",
      description:
        "Develop Thailand's premier R&D center for automotive and motorsport innovations",
      icon: "⚙️",
    },
    {
      title: "Human Resource Development",
      description:
        "Cultivate high-potential talent through continuous learning and innovation",
      icon: "👥",
    },
    {
      title: "Business Expansion & Revenue Growth",
      description:
        "Diversify revenue through branded products and innovative solutions",
      icon: "📈",
    },
    {
      title: "Sustainability Commitment",
      description: "Implement eco-friendly technologies across operations",
      icon: "🌱",
    },
    {
      title: "Communication & Relationship Building",
      description:
        "Foster transparent, inspiring communication with stakeholders",
      icon: "🤝",
    },
  ];

  const milestones = [
    {
      year: "2024",
      achievements: [
        "RAAT Thailand Rally Championship Overall Champion (All 4 Rounds)",
        "AXCR 5th in T1D Class, 10th Overall Category, 23rd Overall",
        "International participation (Rally Hokkaido, Japan)",
      ],
    },
    {
      year: "2025",
      achievements: [
        "RAAT Thailand Rally Championship 2025 Champion",
        "TRRC 2025 Round 1 Champion",
        "XCR Sprint Cup Hokkaido Podium",
      ],
    },
  ];

  const values = [
    {
      title: "Teamwork & Shared Success",
      description: "Collaborative approach to achieving goals",
      icon: "🤝",
    },
    {
      title: "Continuous Development & Learning",
      description: "Commitment to improvement and innovation",
      icon: "📚",
    },
    {
      title: "Honesty & Transparency",
      description: "Open communication with all stakeholders",
      icon: "💎",
    },
    {
      title: "Humility & Respect",
      description: "Valuing diverse perspectives and expertise",
      icon: "🙏",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-purple-900/30 z-10" />
          <Image
            src="/images/img31.jpg"
            alt="Fast Forward Sport Team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            ABOUT <span className="text-accent-yellow">US</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl">
            Building Thailand&apos;s motorsport ecosystem through innovation and
            excellence
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                WHO WE <span className="text-accent-yellow">ARE</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-4">
                Fast Forward Sport is Thailand&apos;s leading motorsport
                engineering company, transforming competitive racing into a
                sustainable business ecosystem.
              </p>
              <p className="text-zinc-400 text-lg mb-4">
                We combine championship-winning performance with innovative
                engineering to create value for customers, partners, and the
                motorsport community.
              </p>
              <div className="bg-zinc-900 border-l-4 border-accent-yellow p-6 rounded-r-xl mt-8">
                <p className="text-white text-xl font-semibold mb-2">
                  &ldquo;We don&apos;t just race — we develop people,
                  technology, and motorsport culture.&rdquo;
                </p>
                <p className="text-accent-yellow font-bold mt-4">
                  Let&apos;s go Forward
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/img31.jpg"
                alt="Fast Forward Sport Racing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OUR <span className="text-accent-yellow">VISION</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-3xl font-bold text-accent-yellow mb-4">
                &ldquo;Expert Technology for Life&rdquo;
              </p>
              <p className="text-zinc-300 text-xl leading-relaxed">
                To become the leading innovator in automotive and motorsport
                technology, driving sustainable advancement, developing
                high-potential personnel, and creating impactful differentiation
                in Thailand&apos;s automotive industry and the global market.
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              MISSION <span className="text-accent-yellow">PILLARS</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-400 text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Milestones Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              TRACK RECORD &{" "}
              <span className="text-accent-yellow">MILESTONES</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Championship victories and international recognition
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex items-center mb-6">
                  <div className="bg-accent-yellow text-black text-3xl font-bold px-6 py-3 rounded-full">
                    {milestone.year}
                  </div>
                  <div className="flex-1 h-1 bg-accent-yellow ml-4"></div>
                </div>
                <div className="ml-8 space-y-4">
                  {milestone.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-start bg-zinc-900 p-4 rounded-lg border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-accent-yellow mr-4 mt-1 shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="text-white text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HOW WE <span className="text-accent-yellow">WORK</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent-yellow transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Internal Culture Slogan */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-linear-to-r from-accent-yellow to-accent-lime text-black px-12 py-6 rounded-lg">
              <p className="text-3xl font-bold">
                &ldquo;Let&apos;s go Forward&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MEET OUR <span className="text-accent-yellow">LEADERSHIP</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Experienced professionals driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership team cards - placeholder for actual team members */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-accent-yellow transition-all duration-300"
              >
                <div className="h-64 bg-linear-to-br from-accent-yellow to-accent-purple"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Leadership Member {item}
                  </h3>
                  <p className="text-accent-yellow font-semibold mb-3">
                    Position Title
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Brief bio and expertise description
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            JOIN US IN{" "}
            <span className="text-accent-yellow">SHAPING THE FUTURE</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Be part of Thailand&apos;s motorsport revolution
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent-lime transition-all duration-200 transform hover:scale-105"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
