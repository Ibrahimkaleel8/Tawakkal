"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  label: string
  title: string
  description?: string
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-32 pb-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-primary-foreground/60"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
