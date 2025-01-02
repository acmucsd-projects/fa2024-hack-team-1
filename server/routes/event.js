var express = require("express");
var router = express.Router();
const Event = require("../schema/events.js");

// NOT BEEN ABLE TO CHECK IF THIS WORKS YET

// implement check for private events
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get("/", async (req, res) => {
    /*const result = Event.virtual(req.body.eventID).get(function() {
        let eventName = "";
        if(this.name) {
            eventName = this.name;
        }
        return eventName;
    });*/

    const result = await Event.findOne({});
    const jsond = await result.toJSON();

    await res.status(201).send(jsond);
})

module.exports = router;