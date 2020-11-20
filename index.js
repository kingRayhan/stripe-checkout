const express = require("express");
const app = express();

require("dotenv").config();

/**
 * Setup template engine
 */
const { config, engine } = require("express-edge");
config({ cache: process.env.NODE_ENV === "production" });
app.use(engine);
app.set("views", `${__dirname}/views`);

/**
 * Setup static dir
 */
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.stringify = JSON.stringify;
  res.locals.parse = JSON.parse;
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/products"));
app.use("/payment", require("./routes/payment"));

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.all("*", (req, res) => {
  res.render("pages.404");
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server working at http://localhost:" + port);
});
