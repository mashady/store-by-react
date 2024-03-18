/**
 * in a new update we will add a new feature to make a slice for all products which will be updated wihout any need of any apis
 *
 *
 *
 *
 */

import { createAppSlice } from "../../app/createAppSlice"

export interface ProductSliceState {
  products: any
  quantity: number
}

const initialState: ProductSliceState = {
  products: [],
  quantity: 0,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const productSlice = createAppSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {
    fetchedPorducts: (state, action) => {
      state.products = action.payload.products
    },
  },

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProducts: products => products.products,
  },
})

// Action creators are generated for each case reducer function.
export const { fetchedPorducts } = productSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProducts } = productSlice.selectors
