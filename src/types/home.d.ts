import { StaticImageData } from "next/image"

type TFilter = "ALL" | "Tênis" | "Camisetas" | "Calças" | ""

type TSort = "price" | "promotional_price" | ""

interface IHomeFilter {
  type: TFilter
  sort: TSort
  page?: number
  pageSize?: number
}

interface IBannerItem {
  id: number
  image: StaticImageData
  alt: string
}

export { TFilter, TSort, IHomeFilter, IBannerItem }
