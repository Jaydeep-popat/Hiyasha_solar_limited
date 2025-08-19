"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { 
  CheckCircle, 
  Wrench, 
  Users, 
  Lightbulb, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe, 
  Award, 
  Clock, 
  Phone, 
  Mail,
  ArrowRight,
  Star,
  Leaf,
  Home,
  Building,
  Settings,
  BarChart3,
  FileText,
  
} from "lucide-react"

const services = [
  {
    id: 1,
    name: "Residential Solar Installation",
    description: "Transform your home with clean, renewable solar energy designed for maximum efficiency and savings.",
    detailedDescription: "Our residential solar installation service is designed to make clean energy accessible to every homeowner. We begin with a comprehensive site assessment to evaluate your property's solar potential, considering factors like roof orientation, shading, and local weather patterns. Our certified technicians then design a custom solar system that maximizes your energy production while maintaining the aesthetic appeal of your home. We handle all aspects of the installation process, from obtaining necessary permits to final system commissioning, ensuring a seamless experience from start to finish. With our 25-year warranty and ongoing support, you can enjoy reliable clean energy for decades to come.",
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1754466661/WhatsApp_Image_2025-08-06_at_07.36.47_afa49731_mcnaia.jpg",
    icon: Home,
    features: ["Free site assessment", "Custom system design", "Professional installation", "25-year warranty", "Performance monitoring", "Ongoing support"],
    duration: "2-5 days",
    certification: "NABCEP Certified",
    benefits: [
      "Reduce energy bills by up to 90%",
      "Increase property value by 4%",
      "Government tax benefits and incentives",
      "Environmentally friendly solution",
      "Energy independence",
      "Low maintenance requirements"
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "Comprehensive evaluation of your property's solar potential", icon: BarChart3 },
      { step: 2, title: "System Design", description: "Custom solar solution tailored to your energy needs", icon: Settings },
      { step: 3, title: "Permit & Approval", description: "Handle all paperwork and regulatory requirements", icon: FileText },
      { step: 4, title: "Installation", description: "Professional installation by certified technicians", icon: Wrench },
      { step: 5, title: "Commissioning", description: "System testing and performance verification", icon: CheckCircle }
    ],
    stats: {
      averageSavings: "₹1,99,200/year",
      installationTime: "2-5 days",
      warranty: "25 years",
      efficiency: "21.5%"
    }
  },
  {
    id: 2,
    name: "Commercial Solar Solutions",
    description: "Large-scale solar installations for businesses with maximum ROI and operational efficiency.",
    detailedDescription: "Our commercial solar solutions are designed to meet the unique energy demands of businesses while providing significant cost savings and environmental benefits. We specialize in large-scale installations for offices, warehouses, retail spaces, and industrial facilities. Our team conducts thorough energy audits to understand your current consumption patterns and designs systems that can offset 100% of your energy needs. We work with businesses of all sizes, from small offices to large manufacturing facilities, providing scalable solutions that grow with your business. Our commercial installations include advanced monitoring systems, allowing you to track energy production and consumption in real-time, optimizing your operational efficiency.",
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755571956/com_qyoctq.jpg",
    icon: Building,
    features: ["Energy audit", "Custom design", "Large-scale installation", "Advanced monitoring", "ROI analysis", "Ongoing maintenance"],
    duration: "1-3 weeks",
    certification: "Commercial Specialist",
    benefits: [
      "Significant operational cost reduction",
      "Enhanced corporate sustainability",
      "Improved brand reputation",
      "Tax benefits and incentives",
      "Energy security and independence",
      "Predictable energy costs"
    ],
    process: [
      { step: 1, title: "Energy Audit", description: "Comprehensive analysis of current energy consumption", icon: BarChart3 },
      { step: 2, title: "System Design", description: "Large-scale solar solution optimization", icon: Settings },
      { step: 3, title: "Project Planning", description: "Detailed timeline and resource allocation", icon: FileText },
      { step: 4, title: "Installation", description: "Professional large-scale installation", icon: Wrench },
      { step: 5, title: "Commissioning", description: "System testing and staff training", icon: CheckCircle }
    ],
    stats: {
      averageSavings: "₹12,45,000/year",
      installationTime: "1-3 weeks",
      warranty: "30 years",
      efficiency: "22.1%"
    }
  },
  {
    id: 3,
    name: "Solar System Maintenance",
    description: "Comprehensive maintenance services to ensure your solar system operates at peak efficiency.",
    detailedDescription: "Regular maintenance is crucial for optimal solar system performance and longevity. Our comprehensive maintenance program includes regular cleaning, performance monitoring, component inspection, and preventive maintenance to maximize your system's efficiency and lifespan. We use advanced monitoring technology to track your system's performance in real-time, identifying potential issues before they become problems. Our maintenance team includes certified technicians who are trained to work with all major solar equipment brands. We provide detailed maintenance reports with recommendations for system optimization, ensuring your investment continues to deliver maximum returns. With our proactive maintenance approach, you can enjoy worry-free solar energy for decades.",
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755571913/designing-commercial-solar-installation_zrpfes.jpg",
    icon: Settings,
    features: ["Regular cleaning", "Performance monitoring", "Component inspection", "Preventive maintenance", "Detailed reporting", "Emergency support"],
    duration: "2-4 hours",
    certification: "O&M Certified",
    benefits: [
      "Maintain peak system efficiency",
      "Extend system lifespan",
      "Prevent costly repairs",
      "Peace of mind",
      "Performance optimization",
      "Warranty protection"
    ],
    process: [
      { step: 1, title: "System Inspection", description: "Comprehensive component and performance check", icon: BarChart3 },
      { step: 2, title: "Panel Cleaning", description: "Professional cleaning for optimal light absorption", icon: Settings },
      { step: 3, title: "Performance Analysis", description: "Detailed efficiency and output analysis", icon: BarChart3 },
      { step: 4, title: "Component Check", description: "Inverter, wiring, and mounting inspection", icon: Wrench },
      { step: 5, title: "Report & Recommendations", description: "Detailed report with improvement suggestions", icon: FileText }
    ],
    stats: {
      installationTime: "2-4 times/year",
      responseTime: "24 hours",
      warranty: "10 years",
      efficiency: "Maintains 95%+"
    }
  },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Reduce Energy Bills",
    description: "Save up to 90% on your electricity bills with our efficient solar solutions.",
    stats: "90% savings",
    color: "text-green-600"
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Certified technicians ensure safe and efficient installation of your solar system.",
    stats: "100% certified",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer support and monitoring for peace of mind.",
    stats: "24/7 available",
    color: "text-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Smart Technology",
    description: "Advanced monitoring and optimization technology for maximum efficiency.",
    stats: "Smart monitoring",
    color: "text-orange-600"
  },
]


const testimonials = [
  {
    name: "Pravin Vadhaiya",
    role: "Homeowner",
    content: "SolarTech Solutions turned our rooftop into a powerhouse of clean energy. Our electricity bills have gone down by almost 80%, and we feel proud to contribute to a greener India.",
    rating: 5,
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755572430/WhatsApp_Image_2025-08-19_at_08.19.28_97cc58fd_fkwqk5.jpg",
    savings: "₹1,95,000/year"
  },
  {
    name: "BhadreshBhai Mathasuliya",
    role: "Small Business Owner",
    content: "Installing their commercial solar system was the best business decision I’ve made. The savings are huge, and their after-sales service is truly exceptional. They guided us through every step.",
    rating: 5,
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755572429/WhatsApp_Image_2025-08-19_at_08.29.11_bf79255c_otjoq0.jpg",
    savings: "₹12,50,000/year"
  },
  {
    name: "GauriBen Kanani",
    role: "Environmental Volunteer",
    content: "Finally found a solar company that’s as passionate about sustainability as I am. Their team ensured everything was done with care for both the environment and our needs.",
    rating: 5,
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755572731/WhatsApp_Image_2025-08-19_at_08.35.02_30abdf97_s1an1v.jpg",
    savings: "₹1,45,000/year"
  },
]
const stats = [
  { number: "5000+", label: "Installations", icon: Zap },
  { number: "98%", label: "Customer Satisfaction", icon: Star },
  { number: "25+", label: "Years Experience", icon: Award },
  { number: "50MW+", label: "Power Installed", icon: TrendingUp },
]

export default function ServicesPage() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Comprehensive solar solutions from consultation to installation and ongoing maintenance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Certified Installers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">25-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Cards - removed as per request */}

      {/* Detailed Services Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`lg:pr-8 lg:pt-4 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="lg:max-w-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                        {service.certification}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">{service.name}</h2>
                    <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mb-8">{service.detailedDescription}</p>
                    
                    {/* Service Stats (price-related details removed) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-blue-600">{service.stats.installationTime}</div>
                        <div className="text-xs text-gray-600">Installation</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-purple-600">{service.stats.warranty}</div>
                        <div className="text-xs text-gray-600">Warranty</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 text-center">
                        <div className="text-lg font-bold text-orange-600">{service.stats.efficiency}</div>
                        <div className="text-xs text-gray-600">Efficiency</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 group">
                            <CheckCircle className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Leaf className="h-5 w-5 text-green-600" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Process Steps Overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
                    <h4 className="font-semibold text-gray-900 mb-3">Process Steps</h4>
                    <div className="space-y-2">
                      {service.process.slice(0, 3).map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <div className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {step.step}
                          </div>
                          <span className="text-gray-600">{step.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex flex-col bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <dt className="flex items-center gap-x-3 text-sm sm:text-base font-semibold leading-7 text-gray-900 mb-3">
                    <div className={`p-2 rounded-lg ${hoveredBenefit === index ? 'bg-green-100' : 'bg-gray-100'} transition-colors duration-300`}>
                      <benefit.icon className={`h-5 w-5 sm:h-6 sm:w-6 flex-none ${benefit.color} ${hoveredBenefit === index ? 'scale-110' : ''} transition-transform duration-300`} aria-hidden="true" />
                    </div>
                    {benefit.title}
                  </dt>
                  <dd className="flex flex-auto flex-col text-sm sm:text-base leading-7 text-gray-600">
                    <p className="flex-auto mb-3">{benefit.description}</p>
                    <div className="text-lg font-bold text-green-600">{benefit.stats}</div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Real feedback from satisfied customers who have made the switch to solar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic mb-3">"{testimonial.content}"</p>
                <div className="text-sm font-semibold text-green-600">
                  Saves {testimonial.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Ready to Go Solar?</h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90">
              Contact us today for a free consultation and discover how much you can save with solar energy.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/contact"
                className="text-white border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Contact Us
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link 
                  href="tel:+919727097971"
                  aria-label="Call 9727097971"
                  className="text-sm"
                >
                  +91 97270 97971
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hiyashasolarsystems@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  hiyashasolarsystems@gmail.com
                </Link>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
