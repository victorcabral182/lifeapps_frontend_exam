"use client"

import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { Button, Select } from "antd"
import { IProduct } from "@/types"
import { addItem } from "@/redux/slices/cartSlice"
import { formatCurrency } from "@/utils"
import { options } from "@/constants/general-constants"

export const GeneralProductInfo = (product: IProduct) => {
  const dispatch = useDispatch()
  const { push } = useRouter()

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)

  const handleAddToCart = useCallback(() => {
    dispatch(addItem({ ...product, quantity: selectedQuantity }))
  }, [dispatch, product, selectedQuantity])

  const handleNavigateToCart = useCallback(() => {
    push("/cart")
  }, [push])

  return (
    <div className="flex flex-col gap-4 md:gap-6 border rounded-2xl p-4 md:p-6 shadow-lg bg-white w-full lg:max-w-lg xl:max-w-xl 2xl:ml-auto">
      <div className="flex flex-col gap-3 md:gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          {product?.name}
        </h2>
        <div className="flex items-center gap-2 md:gap-3">
          {product?.discount_percentage && (
            <div className="text-center">
              <p className="text-lg md:text-2xl font-thin text-red-500">
                {product.discount_percentage}%
              </p>
              {product?.promotional_price && (
                <>
                  <span className="text-xs md:text-sm font-light text-gray-500">
                    De:{" "}
                  </span>
                  <span className="line-through text-xs md:text-sm font-light text-gray-500">
                    {formatCurrency(product.price)}
                  </span>
                </>
              )}
            </div>
          )}

          <div className="flex flex-col">
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              {product?.promotional_price
                ? formatCurrency(product?.promotional_price)
                : formatCurrency(product?.price)}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs md:text-sm font-medium text-gray-700">
            Descrição:
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            {product?.description}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-4">
        <p className="text-[#007600] font-semibold text-sm md:text-base">
          Em estoque
        </p>
        <Select
          options={options}
          placeholder="Quantidade"
          value={selectedQuantity}
          onChange={(value) => setSelectedQuantity(value)}
          className="w-full"
        />
        <Button
          size="large"
          type="primary"
          htmlType="button"
          className="uppercase bg-[#007cc3] hover:bg-[#1d4670] border-none font-medium tracking-wider text-xs md:text-sm lg:text-base text-white rounded-lg w-full"
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </Button>
        <Button
          size="large"
          type="primary"
          htmlType="button"
          className="uppercase bg-[#007cc3] hover:bg-blue-700 border-none font-medium tracking-wider text-xs md:text-sm lg:text-base text-white rounded-lg w-full"
          onClick={handleNavigateToCart}
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  )
}
