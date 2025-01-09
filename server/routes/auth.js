var express = require("express");
var router = express.Router();
const passport = require("passport");
const User = require("../schema/users.js");
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/google/callback",
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
          
      User.findOrCreate({ email: profile.email }, { fullname: profile.displayName, picture: profile.picture }, done(null, profile));
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser( async(email, done) => {
  const user = await User.findOne({email: email});
  done(null, user);
});

router.get("/google",  passport.authenticate("google", { 
  scope: ["email", "profile"] 
})
);

router.get("/failure", (req, res) => {
  res.send("Error: Account login failed.");
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:6174/home");
  });
});

module.exports = router;
