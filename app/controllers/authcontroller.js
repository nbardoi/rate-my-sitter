var exports = (module.exports = {});

exports.signup = function (req, res) {
  res.render("signup");
};

exports.signin = function (req, res) {
  res.render("signin");
};

exports.about = function (req, res) {
  res.render('about');
};

exports.dashboard = function (req, res) {
  res.render("dashboard");
};

exports.landing = function (req, res) {
  res.render("landing");
};

exports.review = function (req, res) {
  res.render('review');
}

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
};
