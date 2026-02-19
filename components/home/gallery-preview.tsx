"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { FadeIn, ScaleIn } from "@/components/motion-wrapper"
import { ArrowRight } from "lucide-react"

const previewImages = [
  { src: "/images/photo15.jpeg", alt: "Community prayer gathering" },
  { src: "/images/indianeducation.jpg", alt: "Quran education class" },
  { src: "/images/photo5.jpeg", alt: "Community iftar dinner" },
  { src: "/images/photo25.jpeg", alt: "Charity distribution event" },
]

export function GalleryPreview() {
  return (
    <section className="bg-secondary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Moments"
          title="From Our Gallery"
          description="Glimpses of our community events, programs, and the beautiful moments we share together."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {previewImages.map((img, i) => (
            <ScaleIn key={img.src} delay={i * 0.1}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all group-hover:bg-foreground/20" />
              </div>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/gallery">
              View Full Gallery <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
