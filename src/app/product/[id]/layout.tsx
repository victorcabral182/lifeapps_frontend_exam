import { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Commerce | Produto",
  description: "Desafio Frontend Lifeapps",
}

export default function ProductPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
