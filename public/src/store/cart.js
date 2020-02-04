import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart(state, action) {
      let existedIndex = state.findIndex(item => item.id == action.payload.id)

      if (existedIndex !== -1) {
        state[existedIndex].quantity++
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart(state, { payload: id }) {
      let index = state.findIndex(item => item.id == id)
      state.splice(index, 1)
    }
  }
})

export const { addToCart, removeFromCart } = cart.actions
export default cart.reducer
