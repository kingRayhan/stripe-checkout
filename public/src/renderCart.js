import store from "./store/store"
import { removeFromCart } from "./store/cart"

const cartItems = document.getElementById("cart-items")

function remove(id) {
  store.dispatch(removeFromCart(id))
}
window.remove = remove

function renderCart(items) {
  cartItems.innerHTML = items
    .map(
      item => `
    <div class="dropdown-item px-3 d-flex align-items-center jutify-content-between border-bottom">
        <div class="d-flex align-items-center mr-2 w-100">
            <div class="product-img">
                <img src="${item.image}" alt=""/>
            </div>
            <div class="product-title">
                <h4>${item.title}</h4>
                <span>$${item.price * item.quantity}</span>
                <div class="qty">Qty: ${item.quantity}</div>
            </div>
        </div>
        <div class="close-btn" onclick="remove(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
    </div>
  `
    )
    .join("")

  if (document.getElementById("checkout-cart"))
    document.getElementById("checkout-cart").innerHTML = items
      .map(
        item => `
    <div class="dropdown-item px-3 d-flex align-items-center jutify-content-between border-bottom">
        <div class="d-flex align-items-center mr-2 w-100">
            <div class="product-img">
                <img src="${item.image}" alt=""/>
            </div>
            <div class="product-title">
                <h4>${item.title}</h4>
                <span>$${item.price * item.quantity}</span>
                <div class="qty">Qty: ${item.quantity}</div>
            </div>
        </div>
        <div class="close-btn" onclick="remove(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
    </div>
  `
      )
      .join("")
}

export default renderCart
