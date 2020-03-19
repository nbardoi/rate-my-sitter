var bCrypt = require("bcrypt-nodejs");
var localStorage = require('localStorage');

module.exports = function(passport, user) {
  localStorage.clear();
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;

  //serialize
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findByPk(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              email: email,
              password: userPassword,
              firstname: req.body.firstname,
              lastname: req.body.lastname
            };


            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }

              var firstname = data.firstname;
              var lastname = data.firstname;

              localStorage.clear();

            // Store all content into localStorage
            localStorage.setItem("firstname", firstname);
            localStorage.setItem("lastname", lastname);

            });
          }
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({ where: { email: email } })
          .then(function(user) {
            if (!user) {
              return done(null, false, { message: "Email does not exist" });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, { message: "Incorrect password." });
            }

            var firstname = user.firstname;
            var lastname = user.lastname;

            localStorage.clear();

            // Store all content into localStorage
            localStorage.setItem("firstname", firstname);
            localStorage.setItem("lastname", lastname);

            var userinfo = user.get();

            return done(null, userinfo);
            
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });

          });
      }
    )
  );
        // localStorage.clear();

        // // Store all content into localStorage
        // localStorage.setItem("firstname", firstname);
        // localStorage.setItem("lastname", lastname);
};
