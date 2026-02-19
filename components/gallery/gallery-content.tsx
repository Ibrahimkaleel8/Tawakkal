"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { FadeIn, ScaleIn } from "@/components/motion-wrapper"
import { cn } from "@/lib/utils"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Events", "Charity", "Community"]

const galleryImages = [
  {
    src: "/images/photo1.jpeg",
    alt: "Gallery Image 1",
    category: "Events",
    span: "tall",
  },
  {
    src: "/images/photo2.jpeg",
    alt: "Gallery Image 2",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo3.jpeg",
    alt: "Gallery Image 3",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo4.jpeg",
    alt: "Gallery Image 4",
    category: "Community",
    span: "wide",
  },
  {
    src: "/images/photo5.jpeg",
    alt: "Gallery Image 5",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo6.jpeg",
    alt: "Gallery Image 6",
    category: "Charity",
    span: "normal",
  },
  {
    src: "/images/photo7.jpeg",
    alt: "Gallery Image 7",
    category: "Charity",
    span: "wide",
  },
  {
    src: "/images/photo8.jpeg",
    alt: "Gallery Image 8",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo9.jpeg",
    alt: "Gallery Image 9",
    category: "Events",
    span: "tall",
  },
  {
    src: "/images/photo10.jpeg",
    alt: "Gallery Image 10",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo11.jpeg",
    alt: "Gallery Image 11",
    category: "Charity",
    span: "normal",
  },
  {
    src: "/images/photo12.jpeg",
    alt: "Gallery Image 12",
    category: "Charity",
    span: "normal",
  },
  {
    src: "/images/photo13.jpeg",
    alt: "Gallery Image 13",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo15.jpeg",
    alt: "Gallery Image 14",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo16.jpeg",
    alt: "Gallery Image 15",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo17.jpeg",
    alt: "Gallery Image 16",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo18.jpeg",
    alt: "Gallery Image 17",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo19.jpeg",
    alt: "Gallery Image 18",
    category: "Events",
    span: "normal",
  },
  {
    src: "/images/photo21.jpeg",
    alt: "Gallery Image 19",
    category: "Charity",
    span: "normal",
  },
  {
    src: "/images/photo22.jpeg",
    alt: "Gallery Image 20",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo24.jpeg",
    alt: "Gallery Image 21",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo25.jpeg",
    alt: "Gallery Image 22",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo26.jpeg",
    alt: "Gallery Image 23",
    category: "Community",
    span: "normal",
  },
  {
    src: "/images/photo27.jpeg",
    alt: "Gallery Image 24",
    category: "Community",
    span: "normal",
  },
]

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      )
    }
  }

  return (
    <>
      <PageHeader
        label="Gallery"
        title="Our Moments"
        description="A visual journey through our community events, gatherings, and the beautiful moments we share together."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Category filter */}
          <FadeIn className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Masonry Grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredImages.map((img, i) => (
              <ScaleIn key={`${img.src}-${activeCategory}-${i}`} delay={i * 0.05}>
                <button
                  onClick={() => openLightbox(i)}
                  className={cn(
                    "group relative mb-4 block w-full overflow-hidden rounded-2xl",
                    img.span === "tall" ? "aspect-[3/4]" : img.span === "wide" ? "aspect-[16/10]" : "aspect-square"
                  )}
                >
                  <Image
                    src={img.src}
                    alt='img'
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 flex items-end bg-foreground/0 p-4 transition-all group-hover:bg-foreground/30">
                    <span className="translate-y-4 text-sm font-medium text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      {"Tawakkal Muslim Gallery"}
                    </span>
                  </div> */}
                </button>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 rounded-full bg-background/10 p-2 text-primary-foreground transition-colors hover:bg-background/20"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 rounded-full bg-background/10 p-3 text-primary-foreground transition-colors hover:bg-background/20 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 rounded-full bg-background/10 p-3 text-primary-foreground transition-colors hover:bg-background/20 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt || "Gallery image"}
                fill
                className="rounded-2xl object-contain"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 text-center">
              <p className="text-sm text-primary-foreground/70">
                {filteredImages[lightboxIndex].alt || "Tawakkal Muslim Gallery"}
              </p>
              <p className="mt-1 text-xs text-primary-foreground/40">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
