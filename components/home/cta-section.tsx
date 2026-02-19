"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"
import { ArrowRight, Heart } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-20">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-primary-foreground" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[40px] border-primary-foreground" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Heart size={32} className="text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
                Join Us in Making a Difference
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
                Whether through volunteering, donations, or simply being part
                of our community, your support helps us create lasting positive
                change.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent px-8 text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Get Involved <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
