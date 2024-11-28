const mongoose = require("mongoose");
const {Schema, schema} = mongoose;
const chatsSchema = new Schema({
    messageId: String,
    sender: String,
    receipient: String,
    content: {type:String, required: true},
    timeStamp: {type:Date, default:Date.now},
    readStatus: {type:Boolean, default:false}
})
const Chat = mongoose.model("chat", chatsSchema)
module.exports = Chat