function renderCartItemCount(state) {
  document.getElementById("cart-count").innerText = state.reduce(
    (t, i) => (t += i.quantity),
    0
  )
}

export default renderCartItemCount
