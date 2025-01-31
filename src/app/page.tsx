import { MainBanner } from "@/components/MainBanner/MainBanner"
import { HomeProductShelf } from "@/components/HomeProductShelf/HomeProductShelf"

export default function Home() {
  return (
    <section className="flex flex-col">
      <MainBanner />
      <HomeProductShelf />
    </section>
  )
}
