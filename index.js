const express = require("express");
const app = express();
const session = require("express-session");
const { db, Users } = require("./db");
const profileRoute = require("./routes/profile");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "hsssh this is secret",
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/profile", profileRoute);

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

db.sync()
  .then(() => {
    app.listen(4444, () => {
      console.log("server is running at http://localhost:4444");
    });
  })
  .catch((e) => console.log(e));
