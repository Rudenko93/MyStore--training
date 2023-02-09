import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (prod) => prod.id === action.payload.id
      )
      if (product) {
        product.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (prod) => prod.id !== action.payload
      )
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export default cartSlice.reducer
console.log(1)
