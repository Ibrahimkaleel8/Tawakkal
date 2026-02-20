"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { SectionTitle } from "@/components/section-title"
import { FadeIn } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Tawakkal Muslim Community Center",
    detail: "Bhaskar Nagar, Uchila Udupi District.",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+91 (000) 000-0000",
  //   detail: "Mon - Fri, 9:00 AM - 6:00 PM",
  // },
  {
    icon: Mail,
    label: "Email",
    value: "Thawakkal1996@gmail.com",
    // detail: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Hours",
    value: `Monday - Friday: 9:00 AM - 5:00 PM
Saturday: 10:00 AM - 2:00 PM
Sunday: Closed`,
  },
]

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // REPLACE THESE WITH YOUR ACTUAL GOOGLE FORM DETAILS
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScREXmrpIlrv-7IW2gZ3poBXOGI6wU4EA-qPXVTz4XtO5xvWA/formResponse?usp=sharing&ouid=102707927470309976767"

    // Create form data for Google Forms
    const data = new FormData()
    data.append("entry.957003457", formData.name)
    data.append("entry.1867777262", formData.email)
    data.append("entry.234336842", formData.phone)
    data.append("entry.24870070", formData.message)

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: data
      })
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" }) // Clear form
    } catch (error) {
      console.error("Submission error:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Contact Us"
        description="We would love to hear from you. Reach out to us with any questions, suggestions, or to learn how you can get involved."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">
                  Reach Out to Us
                </h3>
                <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                  Whether you have a question about our programs, want to
                  volunteer, or wish to support our cause, we are here for you.
                </p>
              </FadeIn>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info, i) => (
                  <FadeIn key={info.label} delay={i * 0.1}>
                    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <info.icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-card-foreground whitespace-pre-line">
                          {info.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                  <h3 className="mb-2 font-serif text-2xl font-bold text-card-foreground">
                    Send a Message
                  </h3>
                  <p className="mb-8 text-sm text-muted-foreground">
                    Fill out the form below and we will get back to you shortly.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle size={32} className="text-primary" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-card-foreground">
                        Message Sent!
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Thank you for reaching out. We will respond soon.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="link"
                        className="mt-4 text-primary"
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            disabled={isSubmitting}
                            className="rounded-xl border-border bg-background"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            disabled={isSubmitting}
                            className="rounded-xl border-border bg-background"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 (000) 000-0000"
                          disabled={isSubmitting}
                          className="rounded-xl border-border bg-background"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          required
                          disabled={isSubmitting}
                          className="rounded-xl border-border bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Find Us"
            title="Our Location"
            description="Visit us at our community center. We are always happy to welcome you."
          />
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <div className="flex aspect-[21/9] items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-muted-foreground/40" />
                  <p className="text-sm font-medium text-muted-foreground">
                    Google Maps Integration
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground/60">
                    Replace this placeholder with your Google Maps embed
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}
    </>
  )
}
