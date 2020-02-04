const Router = require("express").Router()
const { index } = require("../controllers/productController")

Router.get("/", index)
// Router.get("/create", create)
// Router.get("/:id", getSingleArtile)
// Router.post("/", saveArticle)

module.exports = Router
