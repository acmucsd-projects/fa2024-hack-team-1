const mongoose = require("mongoose");
const {Schema, schema} = mongoose;

const notificationSchema = new Schema 
({
    userId: String,

    notificationType: 
    {
        type: String,
        enum: [
            "New Message",             // Private: You received a new message
            "Message Request",         // Private: Someone requested to message you
            "Follow Request",          // Private: Someone requested to follow you
            "Followed",                // Public: Someone followed you
            "Interested Event",        // Event: A user liked or is interested in an event
            "Event Update",            // Event: An event you are interested in was updated
            "Event Reminder",          // Event: Reminder for an upcoming event
            "Tagged In Post",          // Public: Someone tagged you in a post
            "Liked Post",              // Public: Someone liked your post
            "Commented Post"           // Public: Someone commented on your post
            // ADD MORE
        ], 
    },

    content: String,

    eventId: String,

    seen: 
    {
        type: Boolean,
        default: false
    },

    createdAt: 
    {
        type: Date,
        default: Date.now
    } 
})

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;