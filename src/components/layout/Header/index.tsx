"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo.png"
import { Button, Input } from "antd"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"

export const Header = () => {
  const { Search } = Input
  return (
    <header className="w-full h-[80px] max-h-[80px] px-8 flex justify-between items-center border-b border-b-gray-200">
      <Link href={"/"}>
        <Image src={logo} alt="Logotipo da Empresa" className="w-20 h-20" />
      </Link>
      <div className="flex gap-2">
        <Search
          className="w-96"
          type="search"
          variant="outlined"
          allowClear
          placeholder="Quero comprar algo específico..."
        />
        <Button className="w-8" onClick={() => {}}>
          <UserOutlined />
        </Button>
        <Button className="w-8" onClick={() => {}}>
          <ShoppingCartOutlined />
        </Button>
      </div>
    </header>
  )
}
