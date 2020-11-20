import store from "./store/store";
import { addToCart } from "./store/cart";
import renderCart from "./renderCart";
import renderCartItemCount from "./renderCartItemCount";

const stripe = Stripe("pk_test_xfY499uv50JjowqDIjWLqA1v");

import axios from "axios";
import "@babel/polyfill";

renderCart(store.getState());
renderCartItemCount(store.getState());

store.subscribe(() => {
  document.getElementById("cart-count").innerText = store.getState().length;
  renderCart(store.getState());
  renderCartItemCount(store.getState());

  localStorage.setItem("cart", JSON.stringify(store.getState()));
});

document.querySelectorAll(".buy-button").forEach((btn) => {
  btn.addEventListener("click", function () {
    store.dispatch(addToCart(JSON.parse(this.dataset.product)));
  });
});

document
  .getElementById("checkout-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    document.getElementById("checkout-button").textContent = "Processing...";

    let {
      data: { session },
    } = await axios.post("/payment", {
      customer_email: document.getElementById("customer_email").value,
      cart: store.getState(),
    });

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(error);
  });
