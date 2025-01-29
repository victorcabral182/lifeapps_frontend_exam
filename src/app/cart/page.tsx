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
    <section className="flex flex-col min-h-[calc(100vh-212px)] gap-4 px-[256px] py-8">
      <Breadcrumb className="pt-4 font-semibold" items={items} />
      <div className="grid grid-cols-3 mb-8 gap-8">
        <CartProductList />
        <CartSummary />
      </div>
    </section>
  )
}
