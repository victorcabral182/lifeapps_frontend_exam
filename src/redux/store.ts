import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"

const localStorageMiddleware =
  (storeAPI: any) => (next: any) => (action: any) => {
    const result = next(action)
    if (action.type.startsWith("cart/")) {
      const state = storeAPI.getState()
      localStorage.setItem("cart", JSON.stringify(state.cart.items))
    }
    return result
  }

const loadCartFromLocalStorage = () => {
  if (typeof window === "undefined") return []

  try {
    const savedCart = localStorage.getItem("cart")
    if (!savedCart) return []

    return JSON.parse(savedCart)
  } catch (error) {
    console.error("Erro ao carregar carrinho do localStorage:", error)
    localStorage.removeItem("cart")
    return []
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: {
    cart: {
      items: loadCartFromLocalStorage(),
    },
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
