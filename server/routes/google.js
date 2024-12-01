var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

module.exports = router;
