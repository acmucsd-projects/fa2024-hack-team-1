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
    timeZone: {
        type: String,
        required: true,
        default: "PST",
    }
})
const eventSchema = new Schema({
    tags: [{type:String}],
    location: String,
    timeFrame: timeFrameSchema,
    budget: Number,
    personCount: Number,
})
const Event = mongoose.model("event", eventSchema)
module.exports = Event