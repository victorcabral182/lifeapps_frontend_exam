"use client"

import { RootState } from "@/redux/store"
import { Breadcrumb } from "antd"
import Link from "next/link"
import { useSelector } from "react-redux"
import { CheckoutProductCard } from "@/components/CheckoutProductCard"

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <section className="flex flex-col gap-4 px-[256px] ">
      <Breadcrumb
        className="pt-4 font-semibold"
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: "Carrinho",
          },
        ]}
      />
      <section className="grid grid-cols-3 mb-8">
        <div className="flex flex-col gap-2 col-span-2">
          <p className="font-bold text-4xl">Carrinho</p>
          <p>{`Total (x produtos) valor em reais`}</p>
          {cartItems?.map((item) => {
            return <CheckoutProductCard key={item.id} {...item} />
          })}
        </div>
      </section>
    </section>
  )
}
