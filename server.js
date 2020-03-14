var express = require("express");
var app = express();
var passport = require("passport");

var session = require("express-session");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
require("dotenv").config();
//inserting react
require("babel-register");

const React = require("react");

require("babel-register")({
  presets: [["react"]]
  // ignore: []
});

// require("babel-core").transform("code", {
//   presets: ["react"]
// });
const ReactDOMServer = require("react-dom/server");
const About = React.createFactory(require("./app/components/about"));
app.get("/about", (req, res, next) => {
  const aboutHTML = ReactDOMServer.renderToStaticMarkup(About());
  res.render("about", { about: aboutHTML });
});

//Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/public", express.static("public"));
app.use(express.static("app/public"));
// app.use("/img", express.static("/img"));
// For Passport
// session secret
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set("views", "./app/views");
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main.hbs"
  })
);
app.set("view engine", ".hbs");

//Models
var models = require("./app/models");

//Routes
var authRoute = require("./app/routes/auth.js")(app, passport);
//load passport strategies
require("./app/config/passport/passport.js")(passport, models.user);

require("./app/routes/api-routes.js")(app);

app.get("*", function(req, res) {
  res.redirect("/");
});
// Sync Database and listen to local server
models.sequelize
  .sync()
  .then(function() {
    app.listen(PORT, function(err) {
      console.log(
        "Server is running on port " + PORT + " and database looks fine"
      );
    });
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
