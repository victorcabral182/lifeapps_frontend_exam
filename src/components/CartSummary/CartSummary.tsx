"use client"

import { useState } from "react"
import { Button } from "antd"
import { useCart } from "@/hooks/useCart"
import { formatCurrency } from "@/utils"
import { CleanCartModal } from "../modals/CleanCartModal/CleanCartModal"

export const CartSummary = () => {
  const { totalPrice, totalItems } = useCart()

  const [isOpen, setIsOpen] = useState(false)

  const onCleanCartClickToOpen = () => {
    setIsOpen(true)
  }

  const onModalCancelClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <section className="flex mt-0 col-span-1 w-full">
        <div className="w-full p-4 md:p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="text-base md:text-lg font-semibold">
            Resumo do Pedido
          </h2>
          <div className="flex justify-between text-xs md:text-sm mt-2">
            <span>Itens no carrinho:</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-sm md:text-base font-medium mt-2">
            {totalPrice ? (
              <>
                <span>Total:</span>
                <span>{formatCurrency(totalPrice)}</span>
              </>
            ) : null}
          </div>
          <Button
            size="large"
            type="primary"
            className="mt-4 w-full"
            disabled={!totalItems}
          >
            Finalizar Compra
          </Button>
          <Button
            size="large"
            color="danger"
            variant="solid"
            className="mt-4 w-full"
            disabled={!totalItems}
            onClick={onCleanCartClickToOpen}
          >
            Limpar Carrinho
          </Button>
        </div>
      </section>
      <CleanCartModal isOpen={isOpen} onCancel={onModalCancelClick} />
    </>
  )
}
