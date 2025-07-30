"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-green-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo - Desktop */}
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="items-center">
            <div className="relative h-12 w-[200px] sm:h-16 sm:w-[220px]">
              <Image
                src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753778237/logo_2_oxi3zj.png"
                alt="Hiyasha Solar Systems LLP Logo"
                fill
                className="object-contain w-full 500"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm xl:text-lg font-semibold leading-6 transition-all duration-300 hover:text-green-600 hover:scale-110 relative group ${
                pathname === item.href ? "text-green-600" : "text-gray-700"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Quote Button - Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact" className="btn-primary text-sm xl:text-base px-6 py-2.5">
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"></div>
          <div className="fixed inset-0 z-50 flex items-start justify-end">
            <div className="relative w-full max-w-sm bg-white shadow-xl h-screen overflow-y-auto">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                {/* Logo - Mobile */}
                <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                  <div className="relative h-10 w-[160px] sm:h-12 sm:w-[180px]">
                    <Image
                      src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753694564/logo_2_oxi3zj.png"
                      alt="Hiyasha Solar Systems LLP Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                {/* Close Button */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="px-4 sm:px-6 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block rounded-lg px-3 py-3 text-base font-semibold leading-7 hover:bg-gray-50 transition-colors ${
                        pathname === item.href
                          ? "text-green-600 bg-green-50"
                          : "text-gray-900"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Quote Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="w-full block text-center btn-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
