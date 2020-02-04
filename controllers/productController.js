const axios = require("axios")
const uuid = require("uuid")
const db = require("../utils/db")

const index = async (req, res) => {
  let products = [
    {
      id: 1,
      title: "Wine bottle lantern",
      image:
        "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/08/product-furniture-11.jpg",
      price: 324
    },
    {
      id: 2,
      title: "iPhone Dock",
      image:
        "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/04/dock-black-walnut-ip6-grid-A4_7.jpg",
      price: 399
    },
    {
      id: 3,
      title: "Decoration for table pen",
      image:
        "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2016/08/product-furniture-14.jpg",
      price: 126
    },
    {
      id: 4,
      title: "Neque Porro Quisquam Est Qui Extra",
      image:
        "http://wordpress.templatemela.com/woo/WCM05/WCM050116/elementor/wp-content/uploads/2019/08/3-1.jpg",
      price: 124
    }
  ]

  res.render("index", { products })
}

module.exports = { index }
