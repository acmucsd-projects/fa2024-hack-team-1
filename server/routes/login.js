var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");

/* POST user login credentials */
app.post("/", async (req, res, next) => {
  // search for user's email in database
  //const user = ...

  if (user == null) {
    return res.status(400).send("Cannot find user!");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success!");
    } else {
      res.send("Not allowed!");
    }
  } catch {
    res.status(500).send();
  }
});
