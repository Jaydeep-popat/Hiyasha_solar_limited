"use client"

import Link from "next/link"
import { FileText, CheckCircle, AlertTriangle, Shield, Users, Gavel } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Please read these terms carefully before using our services.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services provided by Hiyasha Solar Systems LLP ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service").
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Hiyasha Solar Systems LLP provides solar energy solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Solar panel installation and maintenance</li>
                <li>Solar system design and consultation</li>
                <li>Energy storage solutions</li>
                <li>Solar monitoring and optimization services</li>
                <li>Commercial and residential solar solutions</li>
                <li>Technical support and customer service</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information when requesting services</li>
                <li>Maintain the security of your account and information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay for services as agreed upon</li>
                <li>Provide access to your property for installation and maintenance</li>
              </ul>
            </div>

            {/* Service Agreements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Agreements</h2>
              <p className="text-gray-600 mb-4">
                When you engage our services, additional terms and conditions may apply:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li><strong>Installation Services:</strong> Specific terms will be outlined in your installation contract</li>
                <li><strong>Maintenance Services:</strong> Service level agreements will be provided separately</li>
                <li><strong>Warranty Terms:</strong> Product and workmanship warranties are detailed in your contract</li>
                <li><strong>Payment Terms:</strong> Payment schedules and methods will be specified</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Billing</h2>
              <p className="text-gray-600 mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>All prices are quoted in Indian Rupees (₹) unless otherwise specified</li>
                <li>Payment schedules will be outlined in your service agreement</li>
                <li>Late payments may result in additional charges or service suspension</li>
                <li>Refunds are subject to our refund policy and service agreement terms</li>
                <li>We accept various payment methods including bank transfers and digital payments</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Hiyasha Solar Systems LLP and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our express written consent.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
              <p className="text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations</h2>
              <p className="text-gray-600 mb-4">
                <strong>Service Availability:</strong> We strive to provide reliable services but cannot guarantee uninterrupted availability. Services may be temporarily unavailable due to maintenance, technical issues, or other factors.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Solar Performance:</strong> Actual solar energy production may vary based on weather conditions, system design, installation quality, and other factors beyond our control.
              </p>
              <p className="text-gray-600">
                <strong>Third-Party Services:</strong> We may use third-party services and products. We are not responsible for the performance or reliability of these third-party services.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Hiyasha Solar Systems LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted through the Service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600">
                You agree to defend, indemnify, and hold harmless Hiyasha Solar Systems LLP and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-600">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Hiyasha Solar Systems LLP</strong></p>
                <p className="text-gray-600 mb-2">Email: hiyashasolarsystems@gmail.com</p>
                <p className="text-gray-600 mb-2">Phone: +91 97270 97971</p>
                <p className="text-gray-600">Address: Morabi, Gujarat, India</p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
