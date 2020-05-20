const route = require("express").Router();
const { db, Users } = require("../db");

route.get("/", (req, res) => {
  req.session.userId = null;
  res.render("signup");
});

route.post("/", async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.render("signup", {
      err: "please fill both username and password",
    });
  } else {
    const user = await Users.create({
      name,
      password,
    });
    res.redirect("/login");
  }
});
module.exports = route;
