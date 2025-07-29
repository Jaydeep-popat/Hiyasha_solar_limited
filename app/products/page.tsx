"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"

const products = [
  {
    name: "Premium Solar Panel 400W",
    description: "High-efficiency monocrystalline solar panels with 25-year warranty and superior performance.",
    category: "Residential",
    image: "/images/img.png",
  },
  {
    name: "Commercial Solar Panel 500W",
    description: "Industrial-grade solar panels designed for large-scale commercial installations.",
    category: "Commercial",
    image: "/images/img_2.png",
  },
  {
    name: "Smart Inverter Pro",
    description: "Advanced inverter technology with real-time monitoring and optimization capabilities.",
    category: "Residential",
    image: "/images/img_3.png",
  },
  {
    name: "Industrial Inverter System",
    description: "High-capacity inverter system for commercial and industrial solar installations.",
    category: "Commercial",
    image: "/images/img.png",
  },
  {
    name: "Home Battery Storage 10kWh",
    description: "Lithium-ion battery system for reliable backup power and energy independence.",
    category: "Residential",
    image: "/images/img_2.png",
  },
  {
    name: "Commercial Battery Bank",
    description: "Large-scale energy storage solution for commercial and industrial applications.",
    category: "Commercial",
    image: "/images/img_3.png",
  },
  {
    name: "Solar Monitoring System",
    description: "Real-time monitoring and analytics platform for optimal solar system performance.",
    category: "Residential",
    image: "/images/img.png",
  },
  {
    name: "EV Charging Station",
    description: "Solar-powered electric vehicle charging station for sustainable transportation.",
    category: "Commercial",
    image: "/images/img_2.png",
  },
]

const categories = ["All", "Residential", "Commercial"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="gradient-text">Solar Products</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Discover our comprehensive range of premium solar products designed for maximum efficiency and
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Products?</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Our solar experts are here to help you find the perfect solution for your needs.
            </p>
            <a href="/contact" className="btn-primary text-base sm:text-lg">
              Get Expert Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
