import Image from "next/image"
import TeamCard from "@/components/TeamCard"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    experience: "15+ years in renewable energy industry",
    image: "/images/img.png",
  },
  {
    name: "Sarah Wilson",
    role: "Chief Technology Officer",
    experience: "12+ years in solar technology development",
    image: "/images/img_2.png",
  },
  {
    name: "Michael Brown",
    role: "Head of Installation",
    experience: "10+ years in solar installation and maintenance",
    image: "/images/img_3.png",
  },
  {
    name: "Lisa Garcia",
    role: "Customer Success Manager",
    experience: "8+ years in customer relations and support",
    image: "/images/img.png",
  },
]

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "SolarTech Solutions was established with a vision to make solar energy accessible to everyone.",
  },
  {
    year: "2017",
    title: "1,000 Installations",
    description: "Reached our first major milestone of 1,000 successful solar installations.",
  },
  {
    year: "2019",
    title: "Commercial Expansion",
    description: "Expanded services to include large-scale commercial solar projects.",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: 'Received the "Solar Installer of the Year" award from the Renewable Energy Association.',
  },
  {
    year: "2023",
    title: "10,000+ Happy Customers",
    description: "Celebrated serving over 10,000 satisfied customers across the region.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              About <span className="gradient-text">SolarTech Solutions</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Leading the renewable energy revolution with innovative solar solutions and exceptional customer service
              since 2015.
            </p>
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
              </div>
            </div>
            <Image
              src="/images/img_2.png"
              alt="Solar installation team"
              width={800}
              height={600}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Our experienced professionals are dedicated to providing you with the best solar solutions.
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                experience={member.experience}
                image={member.image}
              />
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
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-600 text-white text-xs sm:text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 w-fit">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
