import { createAppSlice } from "../../app/createAppSlice"

export interface WishlistSliceState {
  products: any
  quantity: number
}

const initialState: WishlistSliceState = {
  products: [],
  quantity: 0,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const wishlistSlice = createAppSlice({
  name: "wishlist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {
    addWish: (state, action) => {
      const modedProduct = { ...action.payload.products, cartQuantity: 1 }
      state.products.push(modedProduct)
      state.quantity += 1
    },

    clearWish: state => {
      state.products = []
      state.quantity = 0
    },
  },

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProducts: cart => cart.products,
    selectQuantity: cart => cart.quantity,
  },
})

// Action creators are generated for each case reducer function.
export const { addWish, clearWish } = wishlistSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProducts, selectQuantity } = wishlistSlice.selectors
