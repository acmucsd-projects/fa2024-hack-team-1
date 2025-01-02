var express = require("express");
var router = express.Router();
const Event = require("../schema/events.js");

// implement check for private events
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get("/", async (req, res) => {

    const id = req.body.eventID;

    const result = await Event.findById(id).exec();

    const resultJSON = await result.toJSON();

    await res.status(201).send(resultJSON);
})

router.get("/test", async(req, res) => {

    const result = await Event.findOne({});
    const resultJSON = await result.toJSON();

    await res.status(201).send(resultJSON);
})

module.exports = router;