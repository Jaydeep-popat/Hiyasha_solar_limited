"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"


import { Phone, Mail, MapPin, Clock, Download, Eye, FileText } from "lucide-react"

const faqs = [
  {
    question: "How much can I save with solar panels?",
    answer:
      "Most homeowners save 70-90% on their electricity bills. The exact savings depend on your energy usage, roof size, and local electricity rates.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Our solar panels come with a 25-year warranty and typically last 25-30 years or more with proper maintenance.",
  },
  {
    question: "What happens during cloudy days?",
    answer:
      "Solar panels still generate electricity on cloudy days, though at reduced efficiency. Your system can also store energy in batteries for use when needed.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations are completed in 1-3 days, depending on system size and complexity. Commercial projects may take longer.",
  },
  {
    question: "Are there financing options available?",
    answer:
      "Yes, we offer various financing options including solar loans, leases, and power purchase agreements to make solar accessible to everyone.",
  },
  {
    question: "Do I need permits for solar installation?",
    answer:
      "Yes, permits are required for solar installations. We handle all permit applications and approvals as part of our service.",
  },
]

export default function ContactPage() {

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 sm:py-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753806195/contact_m4ovkj.png"
            alt="Contact us background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 -mt-20 sm:-mt-32">
          <div className="mx-auto max-w-2xl text-center -mt-20">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100 drop-shadow-md">
              Ready to start your solar journey? Get in touch with our experts for a free consultation.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-blue-400 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] max-w-none"></div>
        </div>
      </section>

      {/* Contact Information and Map Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Contact Information</h2>
              <p className="mt-4 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600">
                Reach out to us through any of the following channels.
              </p>

              <dl className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">Phone:</strong>
                    <br />
                    <Link 
                      href="tel:+919727097971"
                      aria-label="Call +91 97270 97971"
                      className="text-green-600 hover:text-green-500"
                    >
                      +91 97270 97971
                    </Link>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">Email:</strong>
                    <br />
                    <Link 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=hiyashasolarsystems@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-500"
                    >
                      hiyashasolarsystems@gmail.com
                    </Link>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">Address:</strong>
                    <br />
                    Morbi
                    <br />
                    Gujarat, India
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">Business Hours:</strong>
                    <br />
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br /> 
                    Sunday: Closed
                  </dd>
                </div>
              </dl>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Find Us</h2>
              <p className="mt-4 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600">
                Visit our location or get directions to our office.
              </p>
              <div className="mt-6 sm:mt-8">
                <Link 
                  href="https://www.google.com/maps/place/Hiyasha+Solar+Systems+LLP/@22.7985409,70.8237983,17z/data=!4m7!3m6!1s0x39598d9d1e74e5e5:0x17084f2a77f27572!4b1!8m2!3d22.7985409!4d70.8263732!16s%2Fg%2F11xmrygr8y?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-300 hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753782029/Screenshot_2025-07-29_150856_vpu003.png"
                      alt="Google Maps - Hiyasha Solar Systems Location"
                      fill
                      className="object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-300 hover:cursor-pointer"
                    />
                    {/* Overlay with click indicator */}
                    <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MapPin className="h-8 w-8 text-black mx-auto mb-2" />
                        <p className="text-sm text-black font-semibold">Click to view on Google Maps</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Explore Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Product Catalog</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600">
              Discover our comprehensive range of solar solutions, from residential panels to commercial installations. 
              Get detailed specifications, pricing, and technical information.
            </p>
            
            {/* Catalog Preview Card */}
            <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 sm:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-full">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Hiyasha Solar Systems - Product Catalog 2024
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg">
                  Comprehensive guide featuring our latest solar panels, inverters, batteries, and complete system solutions. 
                  Perfect for homeowners, businesses, and solar enthusiasts.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* View Catalog Button */}
                  <Link
                    href="https://drive.google.com/file/d/1R0aoJpEk-3HjZu2nVoKjPTnvdPjOzeRh/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Eye className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>View Catalog Online</span>
                  </Link>
                  
                  {/* Download Catalog Button */}
                  <Link
                    href="https://drive.google.com/uc?export=download&id=1R0aoJpEk-3HjZu2nVoKjPTnvdPjOzeRh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Download PDF</span>
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>PDF Format</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>📄</span>
                      <span>Detailed Specs</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>⚡</span>
                      <span>Latest Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-500">
              * The catalog is free to download and contains comprehensive information about our solar solutions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600">
              Get answers to common questions about solar energy and our services.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <dl className="space-y-6 sm:space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
                >
                  <dt className="text-lg sm:text-xl font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-3 text-base sm:text-lg leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
