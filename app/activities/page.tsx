import type { Metadata } from "next"
import { ActivitiesContent } from "@/components/activities/activities-content"

export const metadata: Metadata = {
  title: "Activities - Tawakkal Muslim",
  description:
    "Explore the wide range of activities and programs offered by Tawakkal Muslim, from education to community welfare.",
}

export default function ActivitiesPage() {
  return <ActivitiesContent />
}
