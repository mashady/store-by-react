import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface CartSliceState {
  products: any
  quantity: number
  total: number
}

const initialState: CartSliceState = {
  products: [],
  quantity: 0,
  total: 0,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const cartSlice = createAppSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload.products)
      console.log(action.payload)

      state.total += action.payload.products.price * action.payload.quantity
    },
  },

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProducts: cart => cart.products,
    selectQuantity: cart => cart.quantity,
    selectTotal: cart => cart.total,
  },
})

// Action creators are generated for each case reducer function.
export const { addProduct } = cartSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProducts, selectQuantity, selectTotal } =
  cartSlice.selectors
