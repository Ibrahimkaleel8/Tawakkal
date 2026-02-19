"use client"

import { SectionTitle } from "@/components/section-title"
import { FadeIn } from "@/components/motion-wrapper"
import { Eye, Target } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Our Purpose"
          title="Mission & Vision"
          description="Guided by the principles of Islam, we strive to create a just and compassionate society."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Target size={28} />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-card-foreground">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                To serve humanity by promoting Islamic education, providing
                social welfare, and building a strong, united community that
                upholds the values of peace, compassion, and mutual respect.
                We strive to be a beacon of hope and guidance for all.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-card p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Eye size={28} />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-card-foreground">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                To establish a thriving Islamic community where every individual
                has access to knowledge, support, and opportunity. We envision
                a world where faith guides action, and service to others is
                the highest form of worship.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
