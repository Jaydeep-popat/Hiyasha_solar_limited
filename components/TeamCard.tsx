import Image from "next/image"

interface TeamCardProps {
  name: string
  role: string
  experience: string
  image: string
}

export default function TeamCard({ name, role, experience, image }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="h-48 sm:h-64 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-blue-600 font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wide">{role}</p>
        <p className="text-xs sm:text-sm text-gray-600">{experience}</p>
      </div>
    </div>
  )
}