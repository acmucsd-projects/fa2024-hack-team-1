const mongoose = require("mongoose");
const {Schema, schema} = mongoose;

const followsSchema = new Schema 
({
    followerId: String,
    followingId: String,

    status:
    {
        type: String,
        enum: [
            "Not Following", // Default
            "Requested",
            "Accepted",
            "Rejected",
            "Blocked",
        ],
        default: "Not Following",
        required: true
    },
})

const Follow = mongoose.model("Follow", followsSchema);
module.exports = Follow;