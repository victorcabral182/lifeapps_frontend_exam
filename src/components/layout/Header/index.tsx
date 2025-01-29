"use client"

import { Button } from "antd"
import { UserOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

import { CartButton } from "@/components/CartButton/CartButton"
import { SearchBar } from "@/components/SearchBar/SearchBar"
import logo from "@/assets/images/logo.png"
import { RootState } from "@/redux/store"

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const quantityInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const handleUserClick = () => {}

  return (
    <header className="fixed z-50 bg-[#fefefe] w-full h-[80px] max-h-[80px] px-8 flex justify-between items-center border-b border-b-gray-200">
      <Link href={"/"}>
        <Image src={logo} alt="Logotipo da Empresa" className="w-20 h-20" />
      </Link>
      <div className="flex gap-2">
        <SearchBar />
        <Button className="w-8" onClick={handleUserClick}>
          <UserOutlined />
        </Button>
        <CartButton quantity={quantityInCart} />
      </div>
    </header>
  )
}
