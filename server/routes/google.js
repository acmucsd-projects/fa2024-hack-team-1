var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:6174/home",
    failureRedirect: "/auth/failure",
  })
);

module.exports = router;
