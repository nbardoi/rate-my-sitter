var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.get("/", authController.landing);
  app.get("/review", authController.review);
  app.get("/about", authController.about);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/signin",

      failureRedirect: "/signup"
    })
  );
  app.get("/dashboard", isLoggedIn, authController.dashboard);
  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
