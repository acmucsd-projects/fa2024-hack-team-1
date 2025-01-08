const mongoose = require("mongoose");
const {Schema, schema} = mongoose;
const findOrCreate = require("mongoose-findorcreate");
const profileSchema = new Schema({
    location:String,
    profilePic:String,
    name:String,
    preferences:[String],
    bio:{
        age:Number,
        sex:String,
        pronouns:String,
        extraInfo:String
    }
})
const userSchema = new Schema({
    userId: String,
    userName: String,
    userPassword: String,
    userProfile: profileSchema,
    userEvents: [{type:String}]

})

userSchema.plugin(findOrCreate);

const User = mongoose.model("user", userSchema);
module.exports = User;