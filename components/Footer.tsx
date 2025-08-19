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
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ],
  quick: [
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info + Quick Links */}
          <div>
            <div className="flex items-center space-x-2 mb-3 group">
              <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 group-hover:text-orange-400 transition-colors duration-300" />
              <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hiyasha Solar Systems LLP
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-3 leading-relaxed">
              Leading the renewable energy revolution with innovative solar
              solutions and exceptional customer service since 2015.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <div className="space-y-1">
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

          {/* Column 2 - Contact Info + Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
            <div className="space-y-2">
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

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Follow Us</h3>
            <div className="flex space-x-3">
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
          </div>

          {/* Column 3 - Google Map Thumbnail */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Our Location</h3>
            <Link
              // href="https://www.google.com/maps/place/Hiyasha+Solar+Systems+LLP/@22.7985409,70.8237983,17z"
              href="https://www.google.com/maps/place/Hiyasha+Solar+Systems+LLP/@22.7985409,70.8237983,17z/data=!4m6!3m5!1s0x39598d9d1e74e5e5:0x17084f2a77f27572!8m2!3d22.7985409!4d70.8263732!16s%2Fg%2F11xmrygr8y?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-40 h-40 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753782029/Screenshot_2025-07-29_150856_vpu003.png"
                  alt="Google Maps - Hiyasha Solar Location"
                  fill
                  className="object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 border-t border-gray-800 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
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
            &copy; {new Date().getFullYear()} Hiyasha Solar Systems LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
