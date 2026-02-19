"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { FadeIn } from "@/components/motion-wrapper"
import {
  BookOpen,
  HandHeart,
  Users,
  GraduationCap,
  ArrowRight,
  HeartPlus,
} from "lucide-react"

const activities = [
  {
    icon: BookOpen,
    title: "Education",
    description:
      "We support schools, provide educational resources, and create learning opportunities for children and adults",
  },
  {
    icon: HandHeart,
    title: "Charity & Welfare",
    description:
      "Organizing food drives, financial aid, and support programs for those in need within our community.",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "We help communities develop infrastructure, economic opportunities, and environmental sustainability programs.",
  },
  {
    icon: HeartPlus,
    title: "Healthcare",
    description:
      "We work to improve access to healthcare services, preventive care, and health education in underserved areas.",
  },
]

export function ActivitiesHighlight() {
  return (
    <section className="bg-secondary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="What We Do"
          title="Our Activities"
          description="We engage in a wide range of activities that serve our community and promote Islamic values of peace, education, and compassion."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, i) => (
            <FadeIn key={activity.title} delay={i * 0.1}>
              <div className="group h-full flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <activity.icon size={24} />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-card-foreground">
                  {activity.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {activity.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Button
            asChild
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/activities">
              View All Activities <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
