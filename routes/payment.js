const Router = require("express").Router()
const { createPaymentSession } = require("../controllers/PaymentController")

Router.post("/", createPaymentSession)
// Router.get("/create", create)
// Router.get("/:id", getSingleArtile)
// Router.post("/", saveArticle)

module.exports = Router
