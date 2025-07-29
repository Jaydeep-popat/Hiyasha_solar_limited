// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Zap,
//   Shield,
//   Award,
// } from "lucide-react";

// const featuredProducts = [
//   {
//     name: "Premium Solar Panel 400W",
//     description:
//       "High-efficiency monocrystalline solar panels with 25-year warranty.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     name: "Smart Inverter Pro",
//     description:
//       "Advanced inverter technology with real-time monitoring capabilities.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     name: "Energy Storage Battery",
//     description:
//       "Lithium-ion battery system for reliable backup power storage.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ];

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Homeowner",
//     content:
//       "SolarTech Solutions transformed our home with their professional installation. Our energy bills have dropped by 80%!",
//     rating: 5,
//   },
//   {
//     name: "Mike Chen",
//     role: "Business Owner",
//     content:
//       "The commercial solar system has exceeded our expectations. Great ROI and excellent customer service.",
//     rating: 5,
//   },
//   {
//     name: "Emily Davis",
//     role: "Environmental Advocate",
//     content:
//       "Finally found a solar company that truly cares about sustainability. Highly recommend their services.",
//     rating: 5,
//   },
// ];

// export default function HomePage() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
//               Powering the Future with{" "}
//               <span className="gradient-text">Solar Energy</span>
//             </h1>
//             <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
//               Transform your home or business with clean, renewable solar
//               energy. Join thousands of satisfied customers who have made the
//               switch to sustainable power.
//             </p>
//             <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
//               <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
//                 Get a Quote
//               </Link>
//               <Link
//                 href="/products"
//                 className="text-base sm:text-lg font-semibold leading-6 text-gray-700 hover:text-green-600 transition-colors duration-300 group"
//               >
//                 View Products
//                 <span
//                   aria-hidden="true"
//                   className="inline-block group-hover:translate-x-1 transition-transform duration-300"
//                 >
//                   →
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
//           <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
//               Featured Solar Products
//             </h2>
//             <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
//               Discover our premium solar solutions designed for maximum
//               efficiency and reliability.
//             </p>
//           </div>
//           <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             {featuredProducts.map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               >
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   width={400}
//                   height={300}
//                   className="h-48 w-full object-cover"
//                 />
//                 <div className="p-4 sm:p-6">
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 mb-4">{product.description}</p>
//                   <Link
//                     href="/products"
//                     className="inline-flex items-center text-green-600 hover:text-green-500 font-medium text-sm sm:text-base"
//                   >
//                     Learn More <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-16 sm:py-24 lg:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
//             <div className="lg:pr-8 lg:pt-4">
//               <div className="lg:max-w-lg">
//                 <h2 className="text-base font-semibold leading-7 text-green-600">
//                   Our Mission
//                 </h2>
//                 <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
//                   Leading the Solar Revolution
//                 </p>
//                 <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
//                   At SolarTech Solutions, we're committed to making clean energy
//                   accessible to everyone. Our mission is to accelerate the
//                   world's transition to sustainable energy through innovative
//                   solar solutions.
//                 </p>
//                 <dl className="mt-8 sm:mt-10 max-w-xl space-y-6 sm:space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
//                   <div className="relative pl-9">
//                     <dt className="inline font-semibold text-gray-900">
//                       <Zap className="absolute left-1 top-1 h-5 w-5 text-green-600" />
//                       Clean Energy.
//                     </dt>
//                     <dd className="inline">
//                       {" "}
//                       Reduce your carbon footprint with renewable solar power.
//                     </dd>
//                   </div>
//                   <div className="relative pl-9">
//                     <dt className="inline font-semibold text-gray-900">
//                       <Shield className="absolute left-1 top-1 h-5 w-5 text-green-600" />
//                       Reliable Service.
//                     </dt>
//                     <dd className="inline">
//                       {" "}
//                       25-year warranties and professional installation
//                       guaranteed.
//                     </dd>
//                   </div>
//                   <div className="relative pl-9">
//                     <dt className="inline font-semibold text-gray-900">
//                       <Award className="absolute left-1 top-1 h-5 w-5 text-green-600" />
//                       Industry Leading.
//                     </dt>
//                     <dd className="inline">
//                       {" "}
//                       Award-winning solar solutions trusted by thousands.
//                     </dd>
//                   </div>
//                 </dl>
//               </div>
//             </div>
//             <Image
//               src="/placeholder.svg?height=600&width=800"
//               alt="Solar installation"
//               width={800}
//               height={600}
//               className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
//               What Our Customers Say
//             </h2>
//             <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
//               Join thousands of satisfied customers who have made the switch to
//               solar energy.
//             </p>
//           </div>
//           <div className="mx-auto mt-12 sm:mt-16 max-w-2xl">
//             <div className="relative">
//               <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonials[currentTestimonial].rating)].map(
//                     (_, i) => (
//                       <Star
//                         key={i}
//                         className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 fill-current"
//                       />
//                     )
//                   )}
//                 </div>
//                 <blockquote className="text-base sm:text-lg text-gray-900 mb-4 sm:mb-6 italic">
//                   "{testimonials[currentTestimonial].content}"
//                 </blockquote>
//                 <div>
//                   <div className="font-bold text-gray-900 text-sm sm:text-base">
//                     {testimonials[currentTestimonial].name}
//                   </div>
//                   <div className="text-blue-600 font-medium text-sm sm:text-base">
//                     {testimonials[currentTestimonial].role}
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={prevTestimonial}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
//               </button>
//             </div>
//             <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
//                     index === currentTestimonial
//                       ? "bg-green-600"
//                       : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Zap, Shield, Award } from "lucide-react"

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
    name: "Premium Solar Panel 400W",
    description: "High-efficiency monocrystalline solar panels with 25-year warranty.",
    image: "/images/img.png",
  },
  {
    name: "Smart Inverter Pro",
    description: "Advanced inverter technology with real-time monitoring capabilities.",
    image: "/images/img_2.png",
  },
  {
    name: "Energy Storage Battery",
    description: "Lithium-ion battery system for reliable backup power storage.",
    image: "/images/img_3.png",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "SolarTech Solutions transformed our home with their professional installation. Our energy bills have dropped by 80%!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Business Owner",
    content: "The commercial solar system has exceeded our expectations. Great ROI and excellent customer service.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Environmental Advocate",
    content: "Finally found a solar company that truly cares about sustainability. Highly recommend their services.",
    rating: 5,
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  // Auto-scroll hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextHeroImage = () => {
    setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevHeroImage = () => {
    setCurrentHeroImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Powering the Future with{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Solar Energy
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md">
              Transform your home or business with clean, renewable solar energy. Join thousands of satisfied customers
              who have made the switch to sustainable power.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="btn-primary text-lg shadow-xl">
                Get a Quote
              </Link>
              <Link
                href="/products"
                className="text-lg font-semibold leading-6 text-white hover:text-green-400 transition-colors duration-300 group drop-shadow-md"
              >
                View Products
                <span
                  aria-hidden="true"
                  className="inline-block group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevHeroImage}
              className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            <div className="flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentHeroImage ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextHeroImage}
              className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-blue-400 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] max-w-none"></div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Solar Products</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Discover our premium solar solutions designed for maximum efficiency and reliability.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-green-600 hover:text-green-500 font-medium"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-600">Our Mission</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Leading the Solar Revolution
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At SolarTech Solutions, we're committed to making clean energy accessible to everyone. Our mission is
                  to accelerate the world's transition to sustainable energy through innovative solar solutions.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
            <Image
              src="/images/img.png"
              alt="Solar installation"
              width={800}
              height={600}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Join thousands of satisfied customers who have made the switch to solar energy.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-900 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
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
    </div>
  )
}
