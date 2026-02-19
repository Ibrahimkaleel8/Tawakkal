import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/activities", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Tawakkal Overseas Logo"
                width={240}
                height={48}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Serving the community with faith, compassion, and dedication.
              Building bridges of understanding and fostering unity through
              Islamic values of peace, charity, and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>Tawakkal Overseas</p>
              <p>community@tawakkalmuslim.com</p>
              <p>+91 (000) 000-0000</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            2026 Tawakkal Muslim. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-primary-foreground/50">
            Made with <Heart size={12} className="text-accent" /> for the community
          </p>
        </div>
      </div>
    </footer>
  )
}
