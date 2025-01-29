import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { selectTotalItems, selectTotalPrice } from "@/redux/slices/cartSlice"

export const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalItems = useSelector((state: RootState) => selectTotalItems(state))
  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state))

  return { cartItems, totalItems, totalPrice }
}
