"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
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
        {/* Logo */}
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="items-center">
            <div className="relative h-12 w-[200px] sm:h-16 sm:w-[220px]">
              <Image
                src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753778237/logo_2_oxi3zj.png"
                alt="Hiyasha Solar Systems LLP Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none transition-all duration-800 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>

            {/* Icon Morph */}
            <div className="relative flex items-center justify-center w-7 h-7">
              <Menu
                className={`absolute transition-all duration-500 ease-in-out transform ${
                  mobileMenuOpen ? "opacity-0 scale-75 rotate-45" : "opacity-100 scale-100 rotate-0"
                }`}
              />
              <X
                className={`absolute transition-all duration-500 ease-in-out transform ${
                  mobileMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-45"
                }`}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-700"></div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base lg:text-lg xl:text-xl font-semibold leading-6 transition-all duration-300 hover:text-green-600 hover:scale-105 relative group ${
                pathname === item.href ? "text-green-600" : "text-gray-700"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Catalog Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <Link
            href="https://drive.google.com/file/d/1R0aoJpEk-3HjZu2nVoKjPTnvdPjOzeRh/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm xl:text-base px-6 py-2.5"
          >
            View Catalog
          </Link>
          <Link
            href="https://drive.google.com/uc?export=download&id=1R0aoJpEk-3HjZu2nVoKjPTnvdPjOzeRh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm xl:text-base px-6 py-2.5"
          >
            Download PDF
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"></div>
          <div className="fixed inset-0 z-50 flex items-start justify-end">
            <div className="relative w-full max-w-sm bg-white shadow-xl h-screen overflow-y-auto">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
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
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition duration-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="px-4 sm:px-6 py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-lg px-3 py-3 text-lg font-semibold leading-7 hover:bg-gray-50 transition-all duration-300 ${
                      pathname === item.href
                        ? "text-green-600 bg-green-50"
                        : "text-gray-900"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <Link
                    href="https://drive.google.com/file/d/1R0aoJpEk-3HjZu2nVoKjPTnvdPjOzeRh/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center btn-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View Catalog
                  </Link>
                  <Link
                    href="https://drive.google.com/uc?export=download&id=1R0aoJpEk-3HjZu2nVoKjPTnvdPjOzeRh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center btn-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Download PDF
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
