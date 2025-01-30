import Link from "next/link"
import { Breadcrumb } from "antd"
import { CartProductList } from "@/components/CartProductList/CartProductList"
import { CartSummary } from "@/components/CartSummary/CartSummary"

export default function CartPage() {
  const items = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: "Carrinho",
    },
  ]

  return (
    <section className="flex flex-col min-h-[calc(100vh-212px)]  gap-4 px-4 lg:px-8 xl:px-16 2xl:px-[256px] py-8">
      <Breadcrumb
        className="pt-4 font-semibold text-sm md:text-base"
        items={items}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 gap-4 md:gap-8">
        <div className="lg:col-span-2">
          <CartProductList />
        </div>
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </section>
  )
}
