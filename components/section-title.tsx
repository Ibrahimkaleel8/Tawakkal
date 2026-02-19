"use client"

import { FadeIn } from "./motion-wrapper"

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <FadeIn
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  )
}
