"use client"

import { useRouter } from "next/navigation"
import { IProduct } from "@/types"
import { IProductCardShelfProps } from "./types"
import { ProductCardItem } from "../ProductCardItem/ProductCardItem"

export const ProductCardShelf = ({
  data,
  isLoading,
}: IProductCardShelfProps) => {
  const { push } = useRouter()
  console.log(isLoading)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 md:gap-8 lg:px-8 xl:px-16 2xl:px-32 px-4">
      {data?.items?.map((item: IProduct) => {
        const isPromo = Boolean(item.discount_percentage)
        return (
          <ProductCardItem
            item={item}
            isPromo={isPromo}
            key={item.id}
            onClick={() => push(`/product/${item.id}`)}
          />
        )
      })}
    </div>
  )
}
