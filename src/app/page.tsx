import { HomeProductShelf } from "@/components/HomeProductShelf"
import { MainBanner } from "@/components/MainBanner"

export default function Home() {
  return (
    <section className="flex flex-col">
      <MainBanner />
      <HomeProductShelf />
    </section>
  )
}
