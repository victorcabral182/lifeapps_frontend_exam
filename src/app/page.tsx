"use client"

import { MainProductShelf } from "@/components/HomeProductShelf"
import { MainBanner } from "@/components/MainBanner"

export default function Home() {
  return (
    <section className="flex flex-col">
      <MainBanner />
      <MainProductShelf />
    </section>
  )
}
