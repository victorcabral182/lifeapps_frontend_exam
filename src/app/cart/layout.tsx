import { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Commerce | Carrinho",
  description: "Desafio Frontend Lifeapps",
}

export default function CartPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
