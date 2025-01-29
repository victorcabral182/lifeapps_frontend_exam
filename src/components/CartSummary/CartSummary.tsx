"use client"

import { Button } from "antd"
import { useCart } from "@/hooks/useCart"
import { formatCurrency } from "@/utils"

export const CartSummary = () => {
  const { totalPrice, totalItems } = useCart()
  return (
    <section className="flex mt-0 col-span-1 w-full">
      <div className="w-full p-4 md:p-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-base md:text-lg font-semibold">Resumo do Pedido</h2>
        <div className="flex justify-between text-xs md:text-sm mt-2">
          <span>Itens no carrinho:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between text-sm md:text-base font-medium mt-2">
          <span>Total:</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <Button
          type="primary"
          className="mt-4 w-full"
          size="large"
          disabled={totalItems === 0}
        >
          Finalizar Compra
        </Button>
      </div>
    </section>
  )
}
