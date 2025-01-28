"use client"

import { Button, Select } from "antd"
import { IProduct } from "@/types"
import { formatCurrency } from "@/utils"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addItem } from "@/redux/slices/cartSlice"
import { useRouter } from "next/navigation"
import { options } from "@/constants/general-constants"

export const GeneralProductInfo = (product: IProduct) => {
  const dispatch = useDispatch()
  const { push } = useRouter()

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)

  const handleAddToCart = (product: IProduct) => {
    dispatch(addItem({ ...product, quantity: selectedQuantity }))
    push("/cart")
  }

  return (
    <div className="flex flex-col gap-6 justify-between border rounded-2xl p-6 shadow-lg bg-white max-w-md ml-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-800">{product?.name}</h2>
        <div className="flex items-center gap-3">
          {product?.discount_percentage && (
            <div>
              {product?.discount_percentage && (
                <p className="text-2xl font-thin text-red-500 text-center">
                  {product?.discount_percentage}%
                </p>
              )}
              {product?.promotional_price && (
                <>
                  <span className="text-sm font-light text-gray-500">De: </span>
                  <span className="line-through text-sm font-light text-gray-500">
                    {formatCurrency(product?.price)}
                  </span>
                </>
              )}
            </div>
          )}

          <div className="flex flex-col justify-between">
            <p className={`text-2xl font-semibold text-gray-800`}>
              {product?.promotional_price
                ? formatCurrency(product?.promotional_price)
                : formatCurrency(product?.price)}
            </p>
            <div className="h-6" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Descrição:</p>
          <p className="text-gray-600">{product?.description}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-[#007600] font-semibold">Em estoque</p>
        <Select
          options={options}
          placeholder="Quantidade"
          value={selectedQuantity}
          onChange={(value) => setSelectedQuantity(value)}
        />
        <Button
          size="large"
          type="primary"
          htmlType="button"
          className="uppercase bg-blue-600 hover:bg-blue-700 border-none font-medium tracking-wider text-white rounded-lg w-full"
          onClick={() => handleAddToCart(product)}
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  )
}
