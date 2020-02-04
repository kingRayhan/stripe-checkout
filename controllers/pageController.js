const contactPage = (req, res) => {
  res.render("pages.contact")
}
const servicesPage = (req, res) => {
  res.render("pages.services")
}

module.exports = { contactPage, servicesPage }
