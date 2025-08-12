"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919727097971?text=Hi%20there!%20I'm%20interested%20in%20solar%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-9 right-9 z-50 bg-[#25D366] hover:bg-[#53ff64] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-1500 hover:scale-110 whatsapp-bounce whatsapp-pulse"
    >
      <Image
        src="https://res.cloudinary.com/dpe33dh2p/image/upload/v1753780871/WhatsApp_bx8nrt.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="h-8 w-8"
      />
    </Link>
  );
} 