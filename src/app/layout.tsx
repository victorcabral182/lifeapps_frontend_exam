import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header/Header"
import { Footer } from "@/components/layout/Footer/Footer"
import "@ant-design/v5-patch-for-react-19"
import ReduxProvider from "./provider"

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "E-Commerce | Home",
  description: "Desafio Frontend Lifeapps",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}  antialiased`}>
        <ReduxProvider>
          <Header />
          <div className="h-[80px]" />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
