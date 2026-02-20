"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/motion-wrapper"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  HandHeart,
  Users,
  GraduationCap,
  Moon,
  Megaphone,
  Stethoscope,
  Globe,
} from "lucide-react"

const categories = ["All", "Education", "Welfare", "Community", "Development"]

const activities = [
  {
    icon: BookOpen,
    title: "Quran Education",
    category: "Education",
    description:
      "Comprehensive Quran learning program for all ages with certified teachers. Classes include Tajweed, Tafseer, and memorization programs running throughout the week.",
    image: "/images/quraneducation.jpeg",
  },
  {
    icon: HandHeart,
    title: "Charity & Food Drives",
    category: "Welfare",
    description:
      "Regular food distribution and financial assistance programs for families in need. We organize monthly drives and emergency relief efforts during times of crisis.",
    image: "/images/food-drive.jpg",
  },
  {
    icon: HandHeart,
    title: "Support for Poor Girl's Weddings",
    category: "Community",
    description:
      "Financial assistance for wedding expenses of girls from low-income families. Preserving dignity by easing financial stress and supporting families during important life milestones.",
    image: "/images/marraige.jpg",
  },
  {
    icon: Users,
    title: "Masjid Construction & Renovation",
    category: "Development",
    description:
      "Completion of 3 Masjids/Madrasas to create sacred spaces for worship and community growth. Strengthening unity by providing safe, accessible facilities for education, prayer, and social harmony.",
    image: "/images/jummah.webp",
  },
  {
    icon: GraduationCap,
    title: "Small Business Microfinance",
    category: "Development",
    description:
      "Micro-loans for individuals to start or grow small businesses, fostering self-reliance. Empowering families with sustainable income opportunities and long-term economic stability.",
    image: "/images/smallbusiness.webp",
  },
  {
    icon: Moon,
    title: "Ramadan Programs",
    category: "Community",
    description:
      "Special Ramadan activities including Taraweeh prayers, community iftars, Quran recitation sessions, and Eid celebrations for the entire family.",
    image: "/images/photo4.jpeg",
  },
  {
    icon: Megaphone,
    title: "Islamic Lectures",
    category: "Education",
    description:
      "Regular talks and seminars by renowned scholars on diverse Islamic topics including Fiqh, Seerah, and spiritual development for all knowledge levels.",
    image: "/images/islamic-education.jpg",
  },
  {
    icon: Stethoscope,
    title: "Health Camps",
    category: "Welfare",
    description:
      "Free health check-up camps and awareness programs organized in collaboration with healthcare professionals to serve the community.",
    image: "/images/healthcamp.jpg",
  },
  {
    icon: Stethoscope,
    title: "HealthKit Distributions & Emergency Aids",
    category: "Welfare",
    description:
      "Medical aid, PPE kits, and wheelchairs provided to patients, volunteers, and differently-abled individuals in need. 25 wheelchairs were distributed, PPE kits distributed during Covid for patients and funeral workers. Special training for Ambulance workers.",
    image: "/images/ppekit.jpg",
  },
  {
    icon: Globe,
    title: "Water Borewell Projects",
    category: "Development",
    description:
      "Borewells installed to ensure clean water for communities in water-scarce regions. Improving health and livelihoods by reducing waterborne diseases and daily water-collection burdens.",
    image: "/images/borewell.jpg",
  },
]

export function ActivitiesContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredActivities =
    activeCategory === "All"
      ? activities
      : activities.filter((a) => a.category === activeCategory)

  return (
    <>
      <PageHeader
        label="What We Do"
        title="Our Activities"
        description="Explore the diverse programs and initiatives we run to serve and strengthen our community."
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

          {/* Activity cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((activity, i) => (
              <FadeIn key={activity.title} delay={i * 0.08}>
                <div className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 transition-all group-hover:bg-foreground/10" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                        {activity.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <activity.icon size={20} />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-semibold text-card-foreground">
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
