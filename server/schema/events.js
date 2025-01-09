const mongoose = require("mongoose");
const {Schema, schema} = mongoose;
const timeFrameSchema = new Schema({
    start:{
        type: Date,
        required: true,
    },
    end:{
        type: Date,
        required: true,
    },
})
const eventSchema = new Schema({
    tags: [{type:String}],
    users: [{type:String}],
    location: String,
    timeFrame: timeFrameSchema,
    budget: Number,
    personCount: Number,
    name: String,
    description: String,
    thumbnail: String
})
const Event = mongoose.model("event", eventSchema)
module.exports = Event