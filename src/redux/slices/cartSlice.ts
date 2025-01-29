import { IProduct } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface CartState {
  items: IProduct[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity = action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
    loadCartFromStorage: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload
    },
  },
})

export const selectTotalItems = (state: RootState) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0)

export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((acc, item) => {
    const priceToAdd =
      item.promotional_price !== undefined ? item.promotional_price : item.price
    return acc + priceToAdd * item.quantity
  }, 0)

export const { addItem, removeItem, clearCart, loadCartFromStorage } =
  cartSlice.actions

export default cartSlice.reducer
