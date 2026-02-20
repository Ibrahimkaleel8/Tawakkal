import Link from "next/link"
import Image from "next/image"
import { Heart, Instagram, Apple, Play } from "lucide-react"

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
      <div className="mx-auto max-w-7xl px-10 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              {/* <div className="bg-white/95 p-2 rounded-xl shadow-sm"> */}
                <Image
                  src="/images/logo-white.png"
                  alt="Tawakkal Overseas Logo"
                  width={400}
                  height={80}
                  className="h-20 w-auto object-contain"
                  priority
                />
              {/* </div> */}
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
              <p>Address: Bhaskar Nagar, Uchila Udupi District.</p>

              <p>Email:  <Link href="mailto:Thawakkal1996@gmail.com" className="hover:text-primary-foreground transition-colors">
                Thawakkal1996@gmail.com
              </Link>
              </p>
            </div>
          </div>

          {/* Connect & Download */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Connect & Download
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="https://www.instagram.com/tawakkal_muslim/?igsh=MWRqcmo3YjVoN2pveQ%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </Link>
              <Link
                href="https://apps.apple.com/ae/app/tawakkal-muslim/id6504795513"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <Apple className="h-5 w-5" />
                <span>Download on App Store</span>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.tawakkalmuslim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <Play className="h-5 w-5 fill-current" />
                <span>Get it on Google Play</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Tawakkal Non-Profit Organization. All Rights Reserved.
          </p>
          {/* <p className="flex items-center gap-1 text-xs text-primary-foreground/50">
            Made with <Heart size={12} className="text-accent" /> for the community
          </p> */}
        </div>
      </div>
    </footer>
  )
}
