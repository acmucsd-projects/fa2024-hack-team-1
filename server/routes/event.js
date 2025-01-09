var express = require("express");
var router = express.Router();
const Event = require("../schema/events.js");
const User = require("../schema/users.js")

// implement check for private events
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get("/", async (req, res) => {
    await res.status(201).send("");
})

router.get("/latest", async(req, res) => {
    const result = await Event.find().sort({$natural:-1}).limit(24);
    await res.status(201).send(result);
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
        thumbnailLink: req.body.thumbnailLink
    })

    await newEvent.save();

    res.status(201).send("New event successfully created");
})

router.get("/user", (req, res) => {
    
    console.log(req.user);
    console.log(req.cookies);

    const id = req.user._id;

    res.status(201).send(id);
})

router.post("/join", async(req, res) => {

    const eventID = req.body.eventID;
    const userID = req.body.userID;

    console.log(eventID);

    const event = await Event.findById(eventID);

    console.log(userID);

    var joinedAlready = false;

    event.users.map(user => {
        if(user == userID) joinedAlready = true;
    })

    if(!joinedAlready) {
        event.users.push(userID);
        event.save();
        res.status(201).send("success");
    } else {
        res.status(201).send("already-joined");
    }

    

});

router.get("/members", async(req, res) => { // request body: eventID

    const event = await Event.findById(req.body.eventID).exec();

    const user_list = [];

    await Promise.all(event.users.map(async (user) => {
        console.log(user);
        const userQuery = await User.findById(user);
        let curr_user = {
            id: userQuery._id,
            email: userQuery.email,
            fullname: userQuery.fullname,
            picture: userQuery.picture
        }
        await user_list.push(curr_user);
    }))

    console.log(user_list);

    res.status(201).send(user_list);
})

module.exports = router;