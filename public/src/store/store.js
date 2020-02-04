import { configureStore } from "@reduxjs/toolkit"

import cart from "./cart"

let store = configureStore({ reducer: cart })

export default store
