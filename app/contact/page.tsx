"use client";
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753806195/contact_m4ovkj.png"
            alt="Contact us background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 -mt-20 sm:-mt-32">
          <div className="mx-auto max-w-2xl text-center -mt-20">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100 drop-shadow-md">
              Ready to start your solar journey? Get in touch with our experts
              for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Contact Information
              </h2>
              <p className="mt-4 text-lg sm:text-xl leading-7 text-gray-600">
                Reach out to us through any of the following channels.
              </p>
              <dl className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex gap-x-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">
                      Phone:
                    </strong>
                    <br />
                    <div className="space-y-1">
                      <div>
                        <Link href="tel:+919727097250" className="text-green-600 hover:text-green-500">
                          +91 97270 97250
                        </Link>
                        <span> - Hemalbhai Pethapara</span>
                      </div>
                      <div>
                        <Link href="tel:+918469452145" className="text-green-600 hover:text-green-500">
                          +91 84694 52145
                        </Link>
                        <span> - Girishbhai Pethapara</span>
                      </div>
                      <div>
                        <Link href="tel:+919727097971" className="text-green-600 hover:text-green-500">
                          +91 97270 97971
                        </Link>
                        <span> - Hiyasha Solar Systems</span>
                      </div>
                    </div>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">
                      Email:
                    </strong>
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
                  <MapPin className="h-6 w-6 text-green-600" />
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">
                      Address:
                    </strong>
                    <br />
                    F-46 Capital Market, Ravapar Rd, Ravapar, Morbi, Gujarat
                    363641, India
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <Clock className="h-6 w-6 text-green-600" />
                  <dd className="text-base leading-6 text-gray-600">
                    <strong className="font-semibold text-gray-900">
                      Business Hours:
                    </strong>
                    <br />
                    Mon - Sat: 8:00 AM - 6:30 PM
                    <br />
                    Sunday: Closed
                  </dd>
                </div>
              </dl>
            </div>

            {/* Office Location Map */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Find Us
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Visit our location or get directions to our office.
              </p>
              <div className="mt-6 sm:mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.081920731327!2d70.8237983!3d22.7985409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d9d1e74e5e5%3A0x17084f2a77f27572!2sHiyasha%20Solar%20Systems%20LLP!5e0!3m2!1sen!2sin!4v1703760000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  loading="lazy"
                  allowFullScreen
                  className="rounded-lg shadow-lg border border-gray-300 hover:border-green-500 transition-all"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
