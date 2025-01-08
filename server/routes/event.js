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

router.post("/create", async(req, res) => {
    const newEvent = new Event({
        tags: req.body.tags,
        users: req.body.users,
        location: req.body.location,
        timeFrame: req.body.timeFrame,
        budget: req.body.budget,
        personCount: req.body.personCount,
        name: req.body.name,
        description: req.body.description,
    })

    await newEvent.save();

    res.status(201).send("New event successfully created");
})

module.exports = router;