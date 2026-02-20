"use client"

import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { FadeIn } from "@/components/motion-wrapper"
import {
  BookOpen,
  Heart,
  Users,
  Shield,
  Star,
  Calendar,
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Serving humanity with empathy and kindness in every action we take.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Promoting Islamic education and lifelong learning for all ages.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Building bridges within our community and fostering togetherness.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding honesty and transparency in all our operations.",
  },
]

const timeline = [
  {
    year: "2005",
    title: "Foundation",
    description:
      "Tawakkal Muslim was established by a small group of dedicated community members with a vision to serve.",
  },
  {
    year: "2010",
    title: "Community Center",
    description:
      "Opened our first community center, providing a permanent home for prayers, education, and gatherings.",
  },
  {
    year: "2015",
    title: "Education Programs",
    description:
      "Launched comprehensive Quran education and youth development programs serving hundreds of students.",
  },
  {
    year: "2020",
    title: "Expanded Outreach",
    description:
      "Extended our welfare programs to reach broader communities, including food drives and financial assistance.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description:
      "Continuing to expand our services with new activities, partnerships, and community initiatives.",
  },
]


export function AboutContent() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Our Story"
        description="Discover who we are, what drives us, and the journey we have taken to serve our community."
      />

      {/* Who We Are */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/education.jpg"
                  alt="Community members coming together"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <SectionTitle
                label="Who We Are"
                title="A Community Rooted in Faith"
                align="left"
              />
              <FadeIn delay={0.1}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Tawakkal Muslim is an Islamic community organization
                  dedicated to fostering spiritual growth, social welfare, and
                  educational excellence. Founded on the principles of trust
                  in Allah (Tawakkal) and service to humanity, we have been
                  working tirelessly to create a positive impact in the lives
                  of those around us.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Our organization brings together individuals from diverse
                  backgrounds united by a common purpose: to serve, educate,
                  and uplift our community through the teachings of Islam.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Our Values"
            title="What Guides Us"
            description="These core values are the foundation of everything we do."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="h-full flex flex-col rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon size={28} />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            label="Our Journey"
            title="History & Milestones"
            description="A look back at the key moments that have shaped our organization."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start gap-8 md:gap-12 ${i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:text-right"
                      }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 -translate-x-1/2 md:left-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary">
                        <Calendar size={16} className="text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                        }`}
                    >
                      <span className="text-sm font-semibold text-accent">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Member */}
      <section className="bg-secondary py-24 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <SectionTitle
            label="Founding Member"
            title="Our Leadership"
          />
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/leaders.jpeg"
                alt="Founding Member"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
