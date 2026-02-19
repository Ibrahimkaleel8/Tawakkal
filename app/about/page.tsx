import type { Metadata } from "next"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About Us - Tawakkal Muslim",
  description:
    "Learn about Tawakkal Muslim, our mission, vision, history, and the team dedicated to serving the community.",
}

export default function AboutPage() {
  return <AboutContent />
}
