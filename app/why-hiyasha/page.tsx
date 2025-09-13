"use client"

import {
  Target,
  Heart,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Users,
  Leaf,
  Lightbulb,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

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

const videoSlides = [
  {
    url: "https://res.cloudinary.com/dpe33dh2p/video/upload/v1757733642/WhatsApp_Video_2025-09-09_at_16.27.29_195f0829_u4npeb.mp4",
    alt: "Hiyasha Solar Installation Process"
  },
  {
    url: "https://res.cloudinary.com/dpe33dh2p/video/upload/v1757733642/WhatsApp_Video_2025-09-09_at_16.27.29_c89886f2_epspbz.mp4",
    alt: "Hiyasha Solar Project Overview"
  },
  {
    url: "https://res.cloudinary.com/dpe33dh2p/video/upload/v1757733642/WhatsApp_Video_2025-09-09_at_16.27.32_4e1b087f_gosvae.mp4",
    alt: "Hiyasha Solar Customer Testimonial"
  }
];

const visionMission = {
  vision: {
    title: "Our Vision",
    description: "To be the leading force in India's renewable energy revolution, empowering every home and business with sustainable solar solutions that create a brighter, cleaner future for generations to come.",
    icon: Target,
    highlights: [
      "Carbon-neutral India by 2070",
      "Energy independence for all",
      "Sustainable development leadership"
    ]
  },
  mission: {
    title: "Our Mission",
    description: "To accelerate India's transition to clean energy by providing innovative, reliable, and affordable solar solutions while delivering exceptional customer experience and contributing to environmental conservation.",
    icon: Heart,
    highlights: [
      "20 MW annual installation target",
      "30+ satisfied clients across sectors",
      "End-to-end solar solutions"
    ]
  }
};

const coreValues = [
  {
    title: "Innovation Excellence",
    description: "We stay at the forefront of solar technology, implementing cutting-edge solutions that maximize efficiency and performance for our clients.",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Customer-Centric Approach",
    description: "Every project is tailored to meet unique energy needs. We listen, understand, and deliver solutions that exceed expectations.",
    icon: Users,
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Quality Assurance",
    description: "We partner with world-class manufacturers and maintain rigorous quality standards to ensure long-term reliability and performance.",
    icon: Shield,
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Environmental Stewardship",
    description: "Committed to reducing carbon footprints and promoting sustainable practices that protect our planet for future generations.",
    icon: Leaf,
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "Transparency & Trust",
    description: "Clear communication, honest pricing, and complete transparency in every aspect of our service delivery.",
    icon: CheckCircle,
    color: "from-indigo-400 to-blue-500"
  },
  {
    title: "Reliability & Support",
    description: "24/7 customer support and comprehensive warranties ensure peace of mind and long-term satisfaction.",
    icon: Clock,
    color: "from-purple-400 to-pink-500"
  }
];

const whyChooseUs = [
  {
    title: "Proven Track Record",
    description: "Successfully completed 30+ projects across healthcare, manufacturing, education, and industrial sectors with 100% client satisfaction.",
    icon: Award,
    stats: "30+ Projects"
  },
  {
    title: "Technical Expertise",
    description: "Team of certified technocrats with deep expertise in solar EPC, ensuring optimal system design and flawless execution.",
    icon: Zap,
    stats: "Expert Team"
  },
  {
    title: "Comprehensive Solutions",
    description: "From residential rooftops to large-scale industrial installations, we provide end-to-end solar solutions under one roof.",
    icon: Globe,
    stats: "Full Service"
  },
  {
    title: "Cost-Effective",
    description: "Competitive pricing with transparent cost structures and significant long-term savings through reduced electricity bills.",
    icon: DollarSign,
    stats: "Best Value"
  }
];

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

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    const fillLevel = Math.max(0, Math.min(1, rating - i))
    const percentage = Math.round(fillLevel * 100)
    return (
      <span key={i} className="relative inline-block h-4 w-4 align-middle">
        <Star className="h-4 w-4 text-gray-300" />
        <span className="absolute inset-0 overflow-hidden" style={{ width: `${percentage}%` }}>
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
        </span>
      </span>
    )
  })
}

export default function WhyHiyasha() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to navigate to the next video
  const nextVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoSlides.length);
  }, []);

  // Function to navigate to the previous video
  const prevVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  }, []);

  // Auto-scroll videos every 15 seconds (videos are usually longer than images)
  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 15000);
    return () => clearInterval(interval);
  }, [nextVideo]);

  // Setup swipe handlers
  const swipeHandlers = useSwipe(nextVideo, prevVideo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] min-h-[600px] overflow-hidden">
        {/* Video Carousel Background */}
        <div 
          className="absolute inset-0 z-0"
          {...swipeHandlers}
        >
          {videoSlides.map((video, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <video 
                className="h-full w-full object-cover"
                src={video.url}
                loop
                muted
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              {/* Overlay */}
              <div className="absolute inset-0  backdrop-blur-[2px]"></div>
            </div>
          ))}

          {/* Video Navigation */}
          <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-3">
            {videoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentVideoIndex 
                    ? "bg-green-500 w-8" 
                    : "bg-white/50 hover:bg-white/80 w-2.5"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Hiyasha Solar?</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/90">
                Discover what makes us the trusted partner for your solar energy journey. 
                We combine innovation, expertise, and commitment to deliver exceptional 
                solar solutions that power your future sustainably.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/20">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-white">
                    Proven Track Record
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/20">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-white">
                    Quality Assurance
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-white/20">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium text-white">
                    30+ Satisfied Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving India's renewable energy revolution with purpose and passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{visionMission.vision.title}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {visionMission.vision.description}
              </p>
              <ul className="space-y-2">
                {visionMission.vision.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-500 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{visionMission.mission.title}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {visionMission.mission.description}
              </p>
              <ul className="space-y-2">
                {visionMission.mission.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`p-4 rounded-full bg-gradient-to-r ${value.color} w-fit mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hiyasha Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The compelling reasons that make us your ideal solar partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
              >
                <div className="p-4 bg-green-500 rounded-full w-fit mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                <div className="text-2xl font-bold text-green-600">{reason.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Real feedback from satisfied customers who have made the switch to solar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic mb-3">"{testimonial.content}"</p>
                <div className="text-sm font-semibold text-green-600">
                  Saves {testimonial.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who have already made the switch to clean, renewable solar energy with Hiyasha Solar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
