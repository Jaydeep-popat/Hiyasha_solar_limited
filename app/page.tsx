"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Zap, 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Leaf,
  DollarSign
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Custom hook for swipe functionality
const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const touchStart = useRef<number | null>(null)
  const touchEnd = useRef<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEnd.current = null
    touchStart.current = e.targetTouches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return
    
    const distance = touchStart.current - touchEnd.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      onSwipeLeft()
    }
    if (isRightSwipe) {
      onSwipeRight()
    }
  }, [onSwipeLeft, onSwipeRight])

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}

const heroImages = [
  {
    src: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1753696615/img_g3vdqn.png",
    alt: "Solar panels on green field with sunset sky",
  },
  {
    src: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1753696612/img_2_u3xbme.png",
    alt: "Aerial view of large solar farm installation",
  },
  {
    src: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1753696609/img_3_y5ulhk.png",
    alt: "Solar panels and wind turbines at golden hour",
  },
]

const featuredProducts = [
  {
    name: "Latest Solar Panel 550Wp to 630wp",
    description: "High-efficiency monocrystalline solar panels with 25-year warranty.",
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1754466660/WhatsApp_Image_2025-08-06_at_07.36.48_21f465ce_cwvawd.jpg",
    price: "₹24,899",
    rating: 4.5,
    features: ["21.5% efficiency", "25-year warranty", "Weather resistant", "Easy installation"]
  },
  {
    name: "Pro Inverters",
    description: "Advanced inverter technology with real-time monitoring capabilities.",
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1754968702/099fea32-c3b0-424d-822a-fc3cc0bb5a8f_nt61ll.jpg",
    price: "₹1,07,999",
    rating: 4.6,
    features: ["WiFi connectivity", "Real-time monitoring", "Smart optimization", "Mobile app"]
  },
  {
    name: "Energy Storage Battery",
    description: "Lithium-ion battery system for reliable backup power storage.",
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1754969723/b2fc97e6-620b-457b-be99-e1a5e92a529d_auozlt.jpg",
    price: "₹2,90,499",
    rating: 4.7,
    features: ["10kWh capacity", "Backup power", "Grid independence", "Long cycle life"]
  },
]

const testimonials = [  
  {
    name: "Pravin Vadhadiya",
    role: "Homeowner",
    content: "SolarTech Solutions turned our rooftop into a powerhouse of clean energy. Our electricity bills have gone down by almost 80%, and we feel proud to contribute to a greener India.",
    rating: 4.3,
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755572430/WhatsApp_Image_2025-08-19_at_08.19.28_97cc58fd_fkwqk5.jpg",
    savings: "₹1,95,000/year"
  },
  {
    name: "BhadreshBhai Mathasuliya",
    role: "Small Business Owner",
    content: "Installing their commercial solar system was the best business decision I’ve made. The savings are huge, and their after-sales service is truly exceptional. They guided us through every step.",
    rating: 4.7,
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755572429/WhatsApp_Image_2025-08-19_at_08.29.11_bf79255c_otjoq0.jpg",
    savings: "₹12,50,000/year"
  },
  {
    name: "GauriBen Kanani",
    role: "Environmental Volunteer",
    content: "Finally found a solar company that’s as passionate about sustainability as I am. Their team ensured everything was done with care for both the environment and our needs.",
    rating: 4.55,
    image: "https://res.cloudinary.com/dpe33dh2p/image/upload/v1755572731/WhatsApp_Image_2025-08-19_at_08.35.02_30abdf97_s1an1v.jpg",
    savings: "₹1,45,000/year"
  },
]


const stats = [
  { number: "400+", label: "Happy Customers", icon: Users },
  { number: "20MW+", label: "Solar Power Installed", icon: Zap },
  { number: "98%", label: "Customer Satisfaction", icon: Star },
  { number: "25+", label: "Years Experience", icon: Award },
]

const benefits = [
  {
    title: "Reduce Energy Bills",
    description: "Save up to 90% on your electricity bills with our efficient solar solutions.",
    icon: DollarSign,
    color: "text-green-600",
    stats: "90% savings"
  },
  {
    title: "Increase Property Value",
    description: "Solar installations can increase your property value by up to 4%.",
    icon: TrendingUp,
    color: "text-blue-600",
    stats: "4% increase"
  },
  {
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and contribute to a cleaner environment.",
    icon: Leaf,
    color: "text-green-600",
    stats: "Zero emissions"
  },
  {
    title: "Tax Benefits",
    description: "Take advantage of government tax benefits and incentives for solar installations.",
    icon: Award,
    color: "text-purple-600",
    stats: "Tax benefits"
  },
]

// Client logos array and constants
const clientLogos = [
  {
    src: "/Picture1.jpg",
    alt: "Client Logo 1"
  },
  {
    src: "/Picture2.jpg",
    alt: "Client Logo 2"
  },
  {
    src: "/Picture3.jpg",
    alt: "Client Logo 3"
  },
  {
    src: "/Picture4.jpg",
    alt: "Client Logo 4"
  },
  {
    src: "/Picture5.jpg",
    alt: "Client Logo 5"
  },
  {
    src: "/Picture6.png",
    alt: "Client Logo 6"
  },
  {
    src: "/Picture7.png",
    alt: "Client Logo 7"
  },
  {
    src: "/Picture8.jpg",
    alt: "Client Logo 8"
  },
  {
    src: "/Picture9.jpg",
    alt: "Client Logo 9"
  },
  {
    src: "/Picture10.jpg",
    alt: "Client Logo 10"
  },
  {
    src: "/Picture11.png",
    alt: "Client Logo 11"
  },
  {
    src: "/Picture12.png",
    alt: "Client Logo 12"
  },
  {
    src: "/Picture13.png",
    alt: "Client Logo 13"
  },
  {
    src: "/Picture14.png",
    alt: "Client Logo 14"
  },
  {
    src: "/Picture15.png",
    alt: "Client Logo 15"
  },
  {
    src: "/Picture16.png",
    alt: "Client Logo 16"
  },
  {
    src: "/Picture17.png",
    alt: "Client Logo 17"
  },
  {
    src: "/Picture18.png",
    alt: "Client Logo 18"
  },
  {
    src: "/Picture19.png",
    alt: "Client Logo 19"
  },
  {
    src: "/Picture20.png",
    alt: "Client Logo 20"
  },
  {
    src: "/Picture21.png",
    alt: "Client Logo 21"
  },
  {
    src: "/Picture22.png",
    alt: "Client Logo 22"
  },
  {
    src: "/Picture23.png",
    alt: "Client Logo 23"
  },
  {
    src: "/Picture24.png",
    alt: "Client Logo 24"
  },
  {
    src: "/Picture25.png",
    alt: "Client Logo 25"
  },
  {
    src: "/Picture26.png",
    alt: "Client Logo 26"
  },
  {
    src: "/Picture27.png",
    alt: "Client Logo 27"
  }
]

const imagesPerPage = 4

const services = [
  {
    name: "Residential Solar",
    description: "Custom solar solutions for homes with professional installation and maintenance.",
    icon: "🏠",
    features: ["Free consultation", "Custom design", "Professional installation", "25-year warranty"]
  },
  {
    name: "Commercial Solar",
    description: "Large-scale solar solutions for businesses with maximum ROI and efficiency.",
    icon: "🏢",
    features: ["Energy audit", "ROI analysis", "Commercial installation", "Ongoing support"]
  },
  {
    name: "Solar Maintenance",
    description: "Comprehensive maintenance services to keep your system running at peak efficiency.",
    icon: "🔧",
    features: ["Regular cleaning", "Performance monitoring", "Component inspection", "Preventive maintenance"]
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [currentClientPage, setCurrentClientPage] = useState(0)
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  // Auto-scroll hero images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll client logos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const maxPage = Math.ceil(clientLogos.length / imagesPerPage) - 1;
      setCurrentClientPage(prev => prev < maxPage ? prev + 1 : 0);
    }, 7000); // Increased to 7 seconds for better viewing experience

    return () => clearInterval(interval);
  }, [])

  // Prevent auto transitions when user interacts with carousel
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  useEffect(() => {
    if (isUserInteracting) {
      const timer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 10000); // Reset after 10 seconds of inactivity
      
      return () => clearTimeout(timer);
    }
  }, [isUserInteracting]);

  // Log client logo information
  useEffect(() => {
    console.log("Total client logo images:", clientLogos.length);
    console.log("Number of pages:", Math.ceil(clientLogos.length / imagesPerPage));
    console.log("Current images:", clientLogos.slice(0, imagesPerPage).map(logo => logo.src));
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Swipe functionality for mobile
  const swipeHandlers = useSwipe(nextTestimonial, prevTestimonial)

  const renderStars = (rating: number) => {
    const starPath = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    return Array.from({ length: 5 }, (_, i) => {
      const fillLevel = Math.max(0, Math.min(1, rating - i))
      const percentage = Math.round(fillLevel * 100)
      return (
        <span key={i} className="relative inline-block h-4 w-4 align-middle">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-300" aria-hidden="true">
            <path d={starPath} fill="currentColor" />
          </svg>
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${percentage}%` }}>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-400" aria-hidden="true">
              <path d={starPath} fill="currentColor" />
            </svg>
          </span>
        </span>
      )
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image Carousel */}
      <section className="relative py-24 sm:py-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-blue-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
              Powering the Future with{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Solar Energy
              </span>
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-gray-100 drop-shadow-md">
              Transform your home or business with clean, renewable solar energy. Join thousands of satisfied customers
              who have made the switch to sustainable power and are saving money while protecting the environment.
            </p>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link href="/about" className="btn-primary text-lg shadow-xl hover:scale-105 transition-transform duration-300">
                About us
              </Link>
              <Link
                href="/services"
                className="text-lg font-semibold leading-6 text-white hover:text-green-400 transition-colors duration-300 group drop-shadow-md"
              >
                Our Services
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Hero Stats */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroImage ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-blue-400 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] max-w-none"></div>
        </div>
      </section>

      {/* Valuable Clients Section with Carousel */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Valuable Clients</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Trusted by leading companies across diverse sectors in India.
            </p>
          </div>

          {/* Client Logo Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ 
                scale: 1.15, 
                x: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
              onClick={() => {
                setIsUserInteracting(true);
                setCurrentClientPage(prev => 
                  prev === 0 ? Math.ceil(clientLogos.length / imagesPerPage) - 1 : prev - 1
                );
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 sm:-translate-x-8 z-10 bg-white rounded-full p-3 shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 group"
              aria-label="Previous clients"
            >
              <motion.div
                whileHover={{ x: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.15, 
                x: 2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
              onClick={() => {
                setIsUserInteracting(true);
                setCurrentClientPage(prev => 
                  prev === Math.ceil(clientLogos.length / imagesPerPage) - 1 ? 0 : prev + 1
                );
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 sm:translate-x-8 z-10 bg-white rounded-full p-3 shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 group"
              aria-label="Next clients"
            >
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
              </motion.div>
            </motion.button>

            {/* Client Logos Grid */}
            <div className="rounded-xl bg-white/50 p-2 sm:p-3 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div 
                  key={currentClientPage}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1
                  }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                >
                  {clientLogos
                    .slice(currentClientPage * imagesPerPage, (currentClientPage + 1) * imagesPerPage)
                    .map((logo, index) => (
                      <motion.div
                        key={`logo-${currentClientPage}-${index}`}
                        initial={{ opacity: 0, y: 30, scale: 0.8, rotateY: -15 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.08,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-xl p-5 sm:p-7 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center justify-center group"
                        style={{ height: '180px', minHeight: '180px' }}
                      >
                        <motion.div 
                          className="relative w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain p-2 group-hover:brightness-110 transition-all duration-300"
                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 18vw"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10 gap-3">
              {Array.from({ length: Math.ceil(clientLogos.length / imagesPerPage) }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsUserInteracting(true);
                    setCurrentClientPage(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300"
                  style={{ width: currentClientPage === index ? '20px' : '12px' }}
                  aria-label={`Go to client page ${index + 1}`}
                >
                  {currentClientPage === index && (
                    <motion.div
                      className="absolute inset-0 bg-green-600 rounded-full"
                      layoutId="activeDot"
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25,
                        mass: 0.8
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why Choose Solar Energy?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover the many benefits of switching to clean, renewable solar energy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-2 rounded-lg ${hoveredBenefit === index ? 'bg-green-100' : 'bg-gray-100'} transition-colors duration-300`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color} ${hoveredBenefit === index ? 'scale-110' : ''} transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-center mb-3">{benefit.description}</p>
                <div className="text-center">
                  <span className="text-lg font-bold text-green-600">{benefit.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Solar Products</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover our premium solar solutions designed for maximum efficiency and reliability.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-3">
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center text-green-600 hover:text-green-500 font-medium group"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive solar solutions tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-600">Our Mission</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Leading the Solar Revolution
                </p>
                <p className="mt-4 text-lg leading-7 text-gray-600">
                  At SolarTech Solutions, we're committed to making clean energy accessible to everyone. Our mission is
                  to accelerate the world's transition to sustainable energy through innovative solar solutions.
                </p>
                <dl className="mt-8 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Zap className="absolute left-1 top-1 h-5 w-5 text-green-600" />
                      Clean Energy.
                    </dt>
                    <dd className="inline"> Reduce your carbon footprint with renewable solar power.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Shield className="absolute left-1 top-1 h-5 w-5 text-green-600" />
                      Reliable Service.
                    </dt>
                    <dd className="inline"> 25-year warranties and professional installation guaranteed.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Award className="absolute left-1 top-1 h-5 w-5 text-green-600" />
                      Industry Leading.
                    </dt>
                    <dd className="inline"> Award-winning solar solutions trusted by thousands.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1754970953/f859b349-603c-4b4e-ad3a-05eb24c69a55_cyjat2.jpg"
                  alt="Solar installation"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-3 text-lg leading-7 text-gray-600">
              Join thousands of satisfied customers who have made the switch to solar energy.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <div 
                className="bg-white rounded-xl shadow-xl p-5 border border-gray-100 relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
                {...swipeHandlers}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center mb-1">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Saves {testimonials[currentTestimonial].savings}
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-900 mb-3 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-600 font-medium text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
                
                {/* Swipe hint for mobile */}
                <div className="absolute bottom-2 right-2 text-xs text-gray-400 hidden sm:block">
                  ← Swipe to navigate →
                </div>
              </div>
              
              {/* Desktop Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
              
              {/* Mobile Navigation Buttons */}
              <div className="sm:hidden flex justify-between items-center mt-4 px-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-green-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Desktop Dots */}
            <div className="hidden sm:flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Go Solar?</h2>
            <p className="mt-3 text-lg leading-7 text-white/90">
              Contact us today for a free consultation and discover how much you can save with solar energy.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
              > 
                Contact us
              </Link>
              <Link
                href="/services"
                className="text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 w-full sm:w-auto text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Our Services
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <Link 
                  href="tel:+919727097971" 
                  aria-label="Call +91 97270 97971"
                  className="text-base font-medium"
                >
                  +91 97270 97971
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hiyashasolarsystems@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium"
                >
                  hiyashasolarsystems@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Hiyasha Solar Systems LLP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}
