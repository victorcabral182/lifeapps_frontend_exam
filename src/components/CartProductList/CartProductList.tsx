"use client"

import { useCart } from "@/hooks/useCart"
import { formatCurrency } from "@/utils"
import { CheckoutProductCard } from "../CheckoutProductCard"

export const CartProductList = () => {
  const { cartItems, totalItems, totalPrice } = useCart()
  return (
    <div className="flex flex-col gap-2 col-span-2 w-full p-6 bg-white rounded-lg shadow-2xl">
      <p className="font-bold text-4xl">Carrinho</p>
      <p>{`Total (${totalItems} produtos) ${
        totalItems > 0 ? formatCurrency(totalPrice) : ""
      }`}</p>
      {cartItems?.map((item) => {
        return <CheckoutProductCard key={item.id} {...item} />
      })}
    </div>
  )
}
