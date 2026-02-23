"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/section-title"
import { FadeIn } from "@/components/motion-wrapper"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/photo17.jpeg"
                alt="Community members gathering together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </FadeIn>

          <div>
            <SectionTitle
              label="Who We Are"
              title="A Community Built on Faith and Service"
              align="left"
            />
            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                At Tawakkal, we believe in the power of collective action to transform lives. 
                Our mission is to create sustainable solutions for communities facing challenges 
                in education, healthcare, and economic development. Through compassion, dedication, 
                and strategic partnerships, we strive to build a world where everyone has access to 
                opportunities for a better life
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/about">
                    Read Our Story <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
