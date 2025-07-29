import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Wrench, Users, Lightbulb } from "lucide-react"

const services = [
  {
    name: "Solar Installation",
    description:
      "Professional installation of residential and commercial solar panel systems with certified technicians.",
    image: "/images/img.png",
    features: ["Free site assessment", "Professional installation", "System commissioning", "25-year warranty"],
  },
  {
    name: "System Maintenance",
    description: "Comprehensive maintenance services to ensure your solar system operates at peak efficiency.",
    image: "/images/img_2.png",
    features: ["Regular cleaning", "Performance monitoring", "Component inspection", "Preventive maintenance"],
  },
  {
    name: "Solar Consultation",
    description: "Expert consultation services to help you design the perfect solar solution for your needs.",
    image: "/images/img_3.png",
    features: ["Energy audit", "Custom design", "Financial analysis", "Permit assistance"],
  },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Reduce Energy Bills",
    description: "Save up to 90% on your electricity bills with our efficient solar solutions.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Certified technicians ensure safe and efficient installation of your solar system.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer support and monitoring for peace of mind.",
  },
  {
    icon: Lightbulb,
    title: "Smart Technology",
    description: "Advanced monitoring and optimization technology for maximum efficiency.",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive solar solutions from consultation to installation and ongoing maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`lg:pr-8 lg:pt-4 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="lg:max-w-lg">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">{service.name}</h2>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">{service.description}</p>
                    <dl className="mt-8 sm:mt-10 max-w-xl space-y-3 sm:space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <CheckCircle className="absolute left-1 top-1 h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                            {feature}
                          </dt>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-8 sm:mt-10">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={600}
                  height={400}
                  className={`w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Why Choose Solar Energy?</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Discover the many benefits of switching to clean, renewable solar energy.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-sm sm:text-base font-semibold leading-7 text-gray-900">
                    <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-none text-green-600" aria-hidden="true" />
                    {benefit.title}
                  </dt>
                  <dd className="mt-3 sm:mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Ready to Go Solar?</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Contact us today for a free consultation and discover how much you can save with solar energy.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Get Free Quote
              </Link>
              <Link
                href="/products"
                className="text-base sm:text-lg font-semibold leading-6 text-gray-700 hover:text-green-600 transition-colors duration-300 group"
              >
                View Products
                <span
                  aria-hidden="true"
                  className="inline-block group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
