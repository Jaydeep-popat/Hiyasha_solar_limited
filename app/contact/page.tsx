"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Ready to start your solar journey? Get in touch with our experts for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Get a Free Quote</h2>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      placeholder="Tell us about your solar needs..."
                    />
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Reach out to us through any of the following channels.
              </p>

              <dl className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">Phone:</strong>
                    <br />
                    +91 97270 97971
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">Email:</strong>
                    <br />
                    hiyashasolarsystems@gmail.com
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
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
                  <dd className="text-sm leading-6 text-gray-600">
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

              {/* Map Placeholder */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm sm:text-base text-gray-500">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Get answers to common questions about solar energy and our services.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <dl className="space-y-6 sm:space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <dt className="text-base sm:text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm sm:text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
