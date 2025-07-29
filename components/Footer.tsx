import Link from "next/link";
import Image from "next/image";
import {
  Sun,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ],
  quick: [
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Facebook", href: "https://www.facebook.com/hiyasha.solar", icon: Facebook },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/hiyasha-solar/", icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/hiyasha.solar", icon: Instagram },
    { name: "X (Twitter)", href: "https://twitter.com", icon: Twitter },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
              <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 group-hover:text-orange-400 transition-colors duration-300" />
              <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hiyasha Solar Systems LLP
              </span>
            </div>
            {/* <div className="flex lg:flex-1 items-center">
              <Link href="/" className="items-center">
                <div className="relative h-10 w-[200px] sm:h-16 sm:w-[220px]">
                  <Image
                    src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753778237/logo_2_oxi3zj.png"
                    alt="Hiyasha Solar Systems LLP Logo"
                    fill
                    className="object-contain w-full 500"
                    priority
                  />
                </div>
              </Link>
            </div> */}
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              Leading the renewable energy revolution with innovative solar
              solutions and exceptional customer service since 2015.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm text-gray-300 mb-3">
                Stay updated with our solar insights. Subscribe now.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium">
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-green-400 transition-colors duration-300">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 97270 97971</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-400 transition-colors duration-300">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300 break-all">
                  hiyashasolarsystems@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Morabi, Gujarat, India</p>
                  <p>India</p>
                </div>
              </div>
            </div>

            {/* Google Map Thumbnail */}
            <div className="mt-4">
              <Link 
                href="https://maps.google.com/?q=123+Solar+St,+Green+City" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-colors duration-300">
                  <Image
                    src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753782029/Screenshot_2025-07-29_150856_vpu003.png"
                    alt="Google Maps - Hiyasha Solar Systems Location"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay with click indicator */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MapPin className="h-5 w-5 text-black mx-auto mb-1" />
                      <p className="text-xs text-black font-large">Click to view on Google Maps</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-all duration-300 hover:scale-110 group"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {navigation.quick.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-800 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center space-x-4 md:order-2">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-xs leading-5 text-gray-400 md:order-1">
            &copy; {new Date().getFullYear()} Hiyasha Solar Systems LLP. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
