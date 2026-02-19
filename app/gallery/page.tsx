import type { Metadata } from "next"
import { GalleryContent } from "@/components/gallery/gallery-content"

export const metadata: Metadata = {
  title: "Photo Gallery - Tawakkal Muslim",
  description:
    "Browse our photo gallery showcasing community events, programs, and memorable moments at Tawakkal Muslim.",
}

export default function GalleryPage() {
  return <GalleryContent />
}
