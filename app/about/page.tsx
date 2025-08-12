import Image from "next/image"
import TeamCard from "@/components/TeamCard"
import { Award, Users, Zap, Shield, Globe, TrendingUp, CheckCircle, Star } from "lucide-react"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    experience: "15+ years in renewable energy industry",
    image: "/images/img.png",
    bio: "Passionate about sustainable energy solutions with expertise in solar technology and business development.",
    education: "MSc in Renewable Energy Engineering",
    achievements: ["Led 500+ installations", "Industry speaker", "Green Energy Award 2022"]
  },
  {
    name: "Sarah Wilson",
    role: "Chief Technology Officer",
    experience: "12+ years in solar technology development",
    image: "/images/img_2.png",
    bio: "Expert in solar panel technology and system optimization with focus on efficiency improvements.",
    education: "PhD in Electrical Engineering",
    achievements: ["15 patents", "Research publications", "Innovation Award 2023"]
  },
  {
    name: "Michael Brown",
    role: "Head of Installation",
    experience: "10+ years in solar installation and maintenance",
    image: "/images/img_3.png",
    bio: "Specialized in large-scale commercial installations with emphasis on safety and quality.",
    education: "Certified Solar Installer",
    achievements: ["1000+ installations", "Safety certification", "Team leader"]
  },
  {
    name: "Lisa Garcia",
    role: "Customer Success Manager",
    experience: "8+ years in customer relations and support",
    image: "/images/img.png",
    bio: "Dedicated to ensuring customer satisfaction and providing ongoing support for all installations.",
    education: "MBA in Business Administration",
    achievements: ["98% satisfaction rate", "Customer service award", "Support team lead"]
  },
]

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "SolarTech Solutions was established with a vision to make solar energy accessible to everyone.",
    icon: "🌱",
    achievements: ["First office opened", "5 team members", "50 installations"]
  },
  {
    year: "2017",
    title: "1,000 Installations",
    description: "Reached our first major milestone of 1,000 successful solar installations.",
    icon: "📈",
    achievements: ["Expanded team to 25", "New service areas", "Partnerships formed"]
  },
  {
    year: "2019",
    title: "Commercial Expansion",
    description: "Expanded services to include large-scale commercial solar projects.",
    icon: "🏢",
    achievements: ["Commercial division", "Large-scale projects", "Industry recognition"]
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: 'Received the "Solar Installer of the Year" award from the Renewable Energy Association.',
    icon: "🏆",
    achievements: ["Award winner", "Media coverage", "Industry speaker"]
  },
  {
    year: "2023",
    title: "10,000+ Happy Customers",
    description: "Celebrated serving over 10,000 satisfied customers across the region.",
    icon: "🎉",
    achievements: ["10,000+ customers", "Regional expansion", "Technology innovation"]
  },
]

const stats = [
  { number: "10,000+", label: "Happy Customers", icon: Users },
  { number: "50MW+", label: "Solar Power Installed", icon: Zap },
  { number: "98%", label: "Customer Satisfaction", icon: Star },
  { number: "25+", label: "Years Combined Experience", icon: Award },
]

const values = [
  {
    title: "Sustainability First",
    description: "Committed to environmental responsibility in all our operations and solutions.",
    icon: Globe
  },
  {
    title: "Innovation Driven",
    description: "Continuously improving technology and processes to deliver better results.",
    icon: TrendingUp
  },
  {
    title: "Quality Assured",
    description: "Rigorous quality control ensures every installation meets the highest standards.",
    icon: Shield
  },
  {
    title: "Customer Focused",
    description: "Your satisfaction is our priority, with dedicated support throughout your journey.",
    icon: CheckCircle
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              About <span className="gradient-text">SolarTech Solutions</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Leading the renewable energy revolution with innovative solar solutions and exceptional customer service
              since 2015.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Certified Installers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">10,000+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-600">Our Story</h2>
                <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                  Pioneering Solar Innovation
                </p>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  Founded in 2015 by a team of renewable energy enthusiasts, SolarTech Solutions began with a simple
                  mission: to make clean, sustainable energy accessible to homes and businesses everywhere.
                </p>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  Today, we're proud to be one of the region's leading solar installation companies, having helped
                  thousands of customers reduce their carbon footprint while saving money on energy costs.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Certified Installers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">25-Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img_2.png"
                  alt="Solar installation team working"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden sm:block">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Our experienced professionals are dedicated to providing you with the best solar solutions.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-48 w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 font-medium">Education: {member.education}</div>
                    <div className="flex flex-wrap gap-1">
                      {member.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
                        >
                          <CheckCircle className="h-3 w-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Journey</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Key milestones in our mission to revolutionize renewable energy.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200"></div>
              <div className="space-y-8 sm:space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-600 text-white text-sm sm:text-lg font-semibold shadow-lg">
                      <span className="text-lg sm:text-2xl">{milestone.icon}</span>
                    </div>
                    <div className="ml-6 sm:ml-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 w-fit">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-gray-600">{milestone.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
                          >
                            <CheckCircle className="h-3 w-3" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Go Solar?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-white/90">
              Join thousands of satisfied customers who have made the switch to clean, renewable energy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-base sm:text-lg">
                Get Free Consultation
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
