// This file is a client-side implementation alternative to avoid SSR issues with dynamic imports

"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ClientContactForm() {
  // Using this component to defer loading until client-side
  return <ContactForm />;
}
