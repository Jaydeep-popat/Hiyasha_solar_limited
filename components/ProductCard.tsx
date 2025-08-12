import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  name: string
  description: string
  category: string
  image: string
}

export default function ProductCard({ name, description, category, image }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={300}
          className="h-48 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 sm:gap-0">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            {name}
          </h3>
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-blue-100 px-2 sm:px-3 py-1 text-xs font-semibold text-green-800 border border-green-200 w-fit">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link href="#" className="btn-secondary w-full text-center text-sm sm:text-base">
          Learn More
        </Link>
      </div>
    </div>
  )
}
