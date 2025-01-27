import { IOption } from "@/types"
import { IBannerItem, TFilter } from "@/types/home"
import banner1 from "@/assets/images/banner1.jpg"
import banner3 from "@/assets/images/banner3.jpg"

const filterOptions: IOption[] = [
  { value: "price", label: "Preço" },
  { value: "discount_percentage", label: "Itens em promoção" },
]

const buttons: TFilter[] = ["ALL", "Tênis", "Camisetas", "Calças"]

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

export { filterOptions, buttons, mainBannerItems }
