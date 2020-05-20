const route = require("express").Router();
const { db, Users } = require("../db");

route.get("/", async (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  const user = await Users.findByPk(req.session.userId);
  res.render("profile", { user });
});

module.exports = route;
