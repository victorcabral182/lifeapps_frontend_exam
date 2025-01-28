"use client"

import { Button, Select } from "antd"
import Image from "next/image"
import { DeleteOutlined } from "@ant-design/icons"
import { options } from "@/constants/general-constants"
import { formatCurrency } from "@/utils"
import { useDispatch } from "react-redux"
import { IProduct } from "@/types"
import { addItem, removeItem } from "@/redux/slices/cartSlice"

export const CheckoutProductCard = (product: IProduct) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="rounded-l-lg overflow-hidden flex w-full min-h-[192px] max-h-[192px]">
        <Image
          className="max-w-[192px] object-cover"
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
        />
        <aside className="flex flex-col justify-between gap-2 p-4 border-t border-r border-b w-full">
          <div>
            <div className="flex justify-between">
              <p className="font-semibold">{product.name}</p>
              <Button
                variant="text"
                color="danger"
                className="w-8 h-8"
                onClick={() => dispatch(removeItem(product.id))}
              >
                <DeleteOutlined className="text-red-500 cursor-pointer" />
              </Button>
            </div>
            <p>{product.description}</p>
          </div>
          <div className="flex justify-between">
            <Select
              className="w-fit"
              options={options}
              placeholder="Quantidade"
              value={product.quantity}
              onChange={(value) => {
                dispatch(addItem({ ...product, quantity: value }))
              }}
            />
            <p className="text-lg font-semibold">
              {product.promotional_price
                ? formatCurrency(product.promotional_price)
                : formatCurrency(product.price)}
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
