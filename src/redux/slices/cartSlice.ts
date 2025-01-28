import { IProduct } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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

export const { addItem, removeItem, clearCart, loadCartFromStorage } =
  cartSlice.actions
export default cartSlice.reducer
