var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST users listing. */
router.post("/", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      email: req.body.email,
      password: hashedPassword,
    };

    // ADD USER TO DATABASE HERE
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
