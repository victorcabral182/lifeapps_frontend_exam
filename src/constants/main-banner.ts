import banner1 from "@/assets/images/banner1.jpg"
import banner3 from "@/assets/images/banner3.jpg"
import { StaticImageData } from "next/image"

interface IBannerItem {
  id: number
  image: StaticImageData
  alt: string
}

const mainBannerItems: IBannerItem[] = [
  {
    id: 1,
    image: banner1,
    alt: "Banner 1",
  },
  {
    id: 2,
    image: banner3,
    alt: "Banner 3",
  },
]

export { mainBannerItems }
