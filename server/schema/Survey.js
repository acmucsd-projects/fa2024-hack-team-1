const mongoose = require("mongoose");
const {Schema, schema} = mongoose;
const surveySchema = new Schema({
    location: String,
    dateRange: [Date],
    groupSize: Number,
})
const survey = mongoose.model("surveySchema", surveySchema)
module.exports = survey