var express = require("express");
var router = express.Router();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get("/", isLoggedIn, (req, res) => {
  res.send("protected route");
});

module.exports = router;
