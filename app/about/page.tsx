import {
  Award,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const milestones = [
  {
    year: "Foundation",
    title: "Company Established",
    description:
      "Hiyasha Solar Systems was founded with a vision to lead India's renewable energy sector through innovative solar solutions.",
    icon: "🌱",
    achievements: ["Team of technocrats", "EPC expertise", "Sustainable focus"],
  },
  {
    year: "Vision Set",
    title: "20 MW Annual Target",
    description:
      "Set ambitious goal to deliver 20 MW of solar power installations annually, promoting clean energy across India.",
    icon: "🎯",
    achievements: [
      "Annual capacity target",
      "Clean energy promotion",
      "National impact",
    ],
  },
  {
    year: "Client Growth",
    title: "30+ Valuable Clients",
    description:
      "Successfully served diverse clientele including healthcare, manufacturing, education, and industrial sectors.",
    icon: "🤝",
    achievements: [
      "Healthcare sector",
      "Manufacturing clients",
      "Educational institutions",
    ],
  },
  {
    year: "Service Expansion",
    title: "Comprehensive Solutions",
    description:
      "Expanded services to include residential rooftop, industrial rooftop, and ground mount solar systems.",
    icon: "⚡",
    achievements: [
      "Residential solutions",
      "Industrial rooftops",
      "Ground mount systems",
    ],
  },
  {
    year: "Today",
    title: "Leading Solar EPC",
    description:
      "Established as a trusted leader in solar EPC solutions with excellence in engineering and sustainability.",
    icon: "🏆",
    achievements: ["EPC excellence", "Engineering quality", "Carbon reduction"],
  },
];

const stats = [
  { number: "20 MW", label: "Annual Installation Target", icon: Zap },
  { number: "30+", label: "Valuable Clients", icon: Users },
  { number: "98%", label: "EPC Excellence", icon: Star },
  { number: "24/7", label: "Customer Support", icon: Award },
];

const values = [
  {
    title: "Customized Solutions",
    description:
      "Tailored solar solutions for unique energy requirements, ensuring efficiency and cost savings.",
    icon: Globe,
  },
  {
    title: "High-Quality Products",
    description:
      "Partnerships with top-tier manufacturers, guaranteeing durability, high performance, and excellent warranties.",
    icon: Shield,
  },
  {
    title: "Comprehensive Support",
    description:
      "End-to-end support from consultation to installation, with a dedicated customer service team.",
    icon: CheckCircle,
  },
  {
    title: "Affordable & Transparent",
    description:
      "Competitive pricing with no hidden fees and clear cost breakdowns for all projects.",
    icon: TrendingUp,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              About <span className="gradient-text">Hiyasha Solar Systems</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Leading India's renewable energy sector with innovative solar
              solutions and a team of experienced technocrats dedicated to
              sustainable solar EPC solutions.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Award Winning
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Certified Installers
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  10,000+ Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                About Us
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Leading India's Renewable Energy Sector
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Hiyasha Solar Systems takes an innovative approach to leading
                India's renewable energy sectors. Our team of technocrats is
                dedicated to delivering sustainable solar EPC solutions with
                excellence in engineering and a commitment to reducing carbon
                footprints.
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                We specialize in comprehensive solar solutions including
                residential rooftop, industrial rooftop, and ground mount
                systems, serving diverse sectors from healthcare to
                manufacturing.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Certified Installers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    25-Year Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-green-900 to-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">🎯</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
                OUR VISION
              </h2>
              <p className="text-lg sm:text-xl leading-8 text-white text-center">
                To deliver{" "}
                <span className="text-yellow-400 font-bold">
                  20 MW of solar power
                </span>{" "}
                installations annually, promoting clean energy and fostering a
                greener planet. Our team of technocrats is committed to leading
                India's renewable energy transformation.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">⚡</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
                OUR MISSION
              </h2>
              <p className="text-lg sm:text-xl leading-8 text-white text-center">
                To provide sustainable solar EPC solutions with excellence in
                engineering, reducing carbon footprints and creating a cleaner
                tomorrow. We are passionate about positive environmental impact
                and innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
