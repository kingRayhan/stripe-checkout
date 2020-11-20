const axios = require("axios");

const index = async (req, res) => {
  const { data: products } = await axios("https://fakestoreapi.com/products");
  res.render("index", { products });
};

module.exports = { index };
