import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import Product from "../../pages/Product"
import { log } from "console"

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
      // this statement will be replaced
      /*
      const itemIndex = state.products.findIndex(
        (i: any) => i._id === action.payload.products._id,
      )
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1

        state.total += state.quantity * state.products[itemIndex].cartQuantity
      } else {



        const modedProduct = { ...action.payload.products, cartQuantity: 1 }
        state.products.push(modedProduct)
        state.total += action.payload.products.price * action.payload.quantity
      }
*/

      const modedProduct = { ...action.payload.products, cartQuantity: 1 }
      state.products.push(modedProduct)
      state.total += action.payload.products.price * action.payload.quantity
      state.quantity += 1
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (i: any) => i._id === action.payload.products._id,
      )
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1
      }
      state.quantity += 1
      state.total += action.payload.products.price
    },
    removeCart: (state, action) => {
      const itemIndex = state.products.findIndex(
        (i: any) => i._id === action.payload.products._id,
      )
      state.products.splice(itemIndex, 1)
      state.quantity = 0
      state.total = 0
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (i: any) => i._id === action.payload.products._id,
      )
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity -= 1
      }
      state.quantity -= 1
      if (state.products[itemIndex].cartQuantity === 0) {
        if (itemIndex > -1) {
          // only splice array when item is found
          state.products.splice(itemIndex, 1) // 2nd parameter means remove one item only
        }
        state.total = 0
      }
      state.total -= action.payload.products.price
    },
    clearCart: state => {
      state.products = []
      state.total = 0
      state.quantity = 0
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
export const {
  addProduct,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  removeCart,
} = cartSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProducts, selectQuantity, selectTotal } =
  cartSlice.selectors
