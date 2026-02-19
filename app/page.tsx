import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ActivitiesHighlight } from "@/components/home/activities-highlight"
import { MissionVision } from "@/components/home/mission-vision"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ActivitiesHighlight />
      <MissionVision />
      <GalleryPreview />
      <CTASection />
    </>
  )
}
