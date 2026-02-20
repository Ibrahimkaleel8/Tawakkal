"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/activities", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-10 h-28">
        <Link href="/" className="flex items-center">
          <div className="p-2 rounded-xl transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt="Tawakkal Overseas Logo"
              width={400}
              height={80}
              className="h-20 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-100",
                pathname === link.href
                  ? "text-black font-bold"
                  : "text-black/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-muted text-black font-bold"
                      : "text-black hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Support Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
