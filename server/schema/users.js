const mongoose = require("mongoose");
const {Schema, schema} = mongoose;
const findOrCreate = require("mongoose-findorcreate");

var userSchema = new Schema({
    email: String,
    fullname: String
})

userSchema.plugin(findOrCreate);

const User = mongoose.model("user", userSchema);
module.exports = User;