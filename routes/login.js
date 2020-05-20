const route = require("express").Router();
const { db, Users } = require("../db");

route.get("/", (req, res) => {
  req.session.userId = null;
  res.render("login");
});

route.post("/", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.render("login", {
      err: "please fill both username and password",
    });
  }
  const user = await Users.findOne({
    where: {
      name,
    },
  });
  if (!user) {
    return res.render("login", {
      err:
        "no such user found , either fill weite or create new account by signing up",
    });
  }
  if (user.password != password)
    return res.render("login", {
      err: "password not matched",
    });
  req.session.userId = user.id;
  return res.redirect("/profile");
});

module.exports = route;
