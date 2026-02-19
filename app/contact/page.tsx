import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact Us - Tawakkal Muslim",
  description:
    "Get in touch with Tawakkal Muslim. Reach out for inquiries, support, or to learn more about our community programs.",
}

export default function ContactPage() {
  return <ContactContent />
}
