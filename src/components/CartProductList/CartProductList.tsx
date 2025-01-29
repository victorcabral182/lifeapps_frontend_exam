"use client"

import { useCart } from "@/hooks/useCart"
import { formatCurrency } from "@/utils"
import { CheckoutProductCard } from "../CheckoutProductCard"

export const CartProductList = () => {
  const { cartItems, totalItems, totalPrice } = useCart()
  return (
    <div className="flex flex-col gap-2 col-span-2 w-full p-4 md:p-6 bg-white rounded-lg shadow-2xl">
      <p className="font-bold text-2xl md:text-4xl">Carrinho</p>
      <p className="text-sm md:text-base">{`Total (${totalItems} produtos) ${
        totalItems > 0 ? formatCurrency(totalPrice) : ""
      }`}</p>
      <div className="flex flex-col gap-4">
        {cartItems?.map((item) => {
          return <CheckoutProductCard key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
