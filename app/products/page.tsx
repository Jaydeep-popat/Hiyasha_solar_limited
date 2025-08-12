"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import { Star, Check, Zap, Shield, Settings } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Premium Solar Panel 400W",
    description: "High-efficiency monocrystalline solar panels with 25-year warranty and superior performance.",
    category: "Residential",
    image: "/images/img.png",
    price: "₹24,899",
    rating: 4.8,
    reviews: 124,
    specifications: {
      power: "400W",
      efficiency: "21.5%",
      dimensions: "1765 x 1048 x 35mm",
      weight: "20.5kg",
      warranty: "25 years"
    },
    features: [
      "Monocrystalline silicon cells",
      "Anti-reflective coating",
      "Weather-resistant design",
      "Easy installation",
      "Low-light performance"
    ],
    inStock: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Commercial Solar Panel 500W",
    description: "Industrial-grade solar panels designed for large-scale commercial installations.",
    category: "Commercial",
    image: "/images/img_2.png",
    price: "₹33,199",
    rating: 4.9,
    reviews: 89,
    specifications: {
      power: "500W",
      efficiency: "22.1%",
      dimensions: "1956 x 1134 x 40mm",
      weight: "28.2kg",
      warranty: "30 years"
    },
    features: [
      "High-power output",
      "Industrial durability",
      "Advanced cell technology",
      "Enhanced efficiency",
      "Commercial-grade materials"
    ],
    inStock: true,
    bestSeller: false
  },
  {
    id: 3,
    name: "Smart Inverter Pro",
    description: "Advanced inverter technology with real-time monitoring and optimization capabilities.",
    category: "Residential",
    image: "/images/img_3.png",
    price: "₹1,07,999",
    rating: 4.7,
    reviews: 156,
    specifications: {
      power: "5kW",
      efficiency: "97.5%",
      dimensions: "450 x 300 x 150mm",
      weight: "12kg",
      warranty: "10 years"
    },
    features: [
      "WiFi connectivity",
      "Real-time monitoring",
      "Smart grid integration",
      "Mobile app control",
      "Automatic optimization"
    ],
    inStock: true,
    bestSeller: true
  },
  {
    id: 4,
    name: "Industrial Inverter System",
    description: "High-capacity inverter system for commercial and industrial solar installations.",
    category: "Commercial",
    image: "/images/img.png",
    price: "₹4,14,999",
    rating: 4.6,
    reviews: 67,
    specifications: {
      power: "20kW",
      efficiency: "98.2%",
      dimensions: "800 x 600 x 300mm",
      weight: "45kg",
      warranty: "15 years"
    },
    features: [
      "High-capacity output",
      "Industrial reliability",
      "Advanced cooling system",
      "Multiple MPPT inputs",
      "Remote monitoring"
    ],
    inStock: false,
    bestSeller: false
  },
  {
    id: 5,
    name: "Home Battery Storage 10kWh",
    description: "Lithium-ion battery system for reliable backup power and energy independence.",
    category: "Residential",
    image: "/images/img_2.png",
    price: "₹2,90,499",
    rating: 4.8,
    reviews: 203,
    specifications: {
      capacity: "10kWh",
      voltage: "48V",
      dimensions: "600 x 400 x 200mm",
      weight: "85kg",
      warranty: "10 years"
    },
    features: [
      "Lithium-ion technology",
      "Smart battery management",
      "Backup power capability",
      "Grid independence",
      "Long cycle life"
    ],
    inStock: true,
    bestSeller: true
  },
  {
    id: 6,
    name: "Commercial Battery Bank",
    description: "Large-scale energy storage solution for commercial and industrial applications.",
    category: "Commercial",
    image: "/images/img_3.png",
    price: "₹10,78,999",
    rating: 4.5,
    reviews: 34,
    specifications: {
      capacity: "50kWh",
      voltage: "400V",
      dimensions: "1200 x 800 x 600mm",
      weight: "450kg",
      warranty: "15 years"
    },
    features: [
      "High-capacity storage",
      "Industrial-grade construction",
      "Advanced BMS",
      "Scalable design",
      "Commercial reliability"
    ],
    inStock: true,
    bestSeller: false
  },
  {
    id: 7,
    name: "Solar Monitoring System",
    description: "Real-time monitoring and analytics platform for optimal solar system performance.",
    category: "Residential",
    image: "/images/img.png",
    price: "₹24,899",
    rating: 4.9,
    reviews: 178,
    specifications: {
      connectivity: "WiFi/4G",
      sensors: "Temperature, voltage, current",
      dimensions: "150 x 100 x 50mm",
      weight: "0.5kg",
      warranty: "5 years"
    },
    features: [
      "Real-time monitoring",
      "Performance analytics",
      "Alert system",
      "Mobile app",
      "Cloud storage"
    ],
    inStock: true,
    bestSeller: true
  },
  {
    id: 8,
    name: "EV Charging Station",
    description: "Solar-powered electric vehicle charging station for sustainable transportation.",
    category: "Commercial",
    image: "/images/img_2.png",
    price: "₹2,48,999",
    rating: 4.7,
    reviews: 92,
    specifications: {
      power: "22kW",
      connector: "Type 2",
      dimensions: "400 x 300 x 1500mm",
      weight: "25kg",
      warranty: "8 years"
    },
    features: [
      "Fast charging capability",
      "Solar integration",
      "Smart charging",
      "Payment system",
      "Safety features"
    ],
    inStock: true,
    bestSeller: false
  },
]

const categories = ["All", "Residential", "Commercial"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Rating", "Newest"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Featured")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") return true
    return product.category === selectedCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return parseFloat(a.price.replace("₹", "").replace(",", "")) - parseFloat(b.price.replace("₹", "").replace(",", ""))
      case "Price: High to Low":
        return parseFloat(b.price.replace("₹", "").replace(",", "")) - parseFloat(a.price.replace("₹", "").replace(",", ""))
      case "Rating":
        return b.rating - a.rating
      case "Newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
        fill={i < Math.floor(rating) ? "currentColor" : "none"}
      />
    ))
  }

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
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Zap className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">High Efficiency</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">25-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Settings className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Smart Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters and Sorting */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Category Filter */}
              <div className="flex justify-center sm:justify-start">
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

              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-lg border-gray-300 text-sm focus:border-green-500 focus:ring-green-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 text-center sm:text-left">
              <p className="text-sm text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.bestSeller && (
                      <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Best Seller
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-blue-100 px-2 sm:px-3 py-1 text-xs font-semibold text-green-800 border border-green-200 w-fit">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                                                 <span
                           key={index}
                           className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
                         >
                           <Check className="h-3 w-3" />
                           {feature}
                         </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="btn-primary flex-1 text-sm">
                      Learn More
                    </button>
                    <button className="btn-secondary text-sm px-3">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Products?</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Our solar experts are here to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-base sm:text-lg">
                Get Expert Consultation
              </a>
              <a href="/quote" className="btn-secondary text-base sm:text-lg">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
