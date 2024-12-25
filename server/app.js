var createError = require("http-errors");
var express = require("express");
const session = require("express-session");
const passport = require("passport");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var protectedRouter = require("./routes/protected");
var googleRouter = require("./routes/google");

var app = express();
const mongoose = require("mongoose");
const User = require("./schema/users.js");

app.use(session({ secret: process.env["PASSPORT_SECRET"] }));
app.use(passport.initialize());
app.use(passport.session());

const newUser = new User({
  userID: "a",
  userName: "b",
  userPassword: "c",
  userProfile: {
    location: "a",
    profilePic: "https://example.com/alex.jpg",
    name: "John Smith",
    preferences: ["sports", "technology"],
    bio: {
      age: 35,
      sex: "Non-binary",
      pronouns: "They/Them",
      extraInfo: "Loves photography",
    },
  },
  userEvents: ["a", "b"],
});
const testEvents = [
  {
      tags: ["birthday", "party", "celebration"],
      location: "Chicago",
      timeFrame: {
          start: new Date("2024-12-01T18:00:00Z"),
          end: new Date("2024-12-01T21:00:00Z"),
          timeZone: "EST",
      },
      budget: 500,
      personCount: 25,
  },
  {
      tags: ["conference", "workshop"],
      location: "Online (Zoom)",
      timeFrame: {
          start: new Date("2024-11-30T10:00:00Z"),
          end: new Date("2024-11-30T12:00:00Z"),
          timeZone: "PST",
      },
      budget: 0, // Free event
      personCount: 100,
  },
  {
      tags: ["wedding", "outdoor"],
      location: "Golden Gate Park, San Francisco",
      timeFrame: {
          start: new Date("2024-06-15T15:00:00Z"),
          end: new Date("2024-06-15T20:00:00Z"),
          timeZone: "PST",
      },
      budget: 15000,
      personCount: 200,
  },
];
const testChats = [
  {
      messageId: "msg001",
      sender: "user001",
      receipient: "user002",
      content: "Hey, are you coming to the event?",
      timeStamp: new Date("2024-11-28T09:30:00Z"),
      readStatus: true,
  },
  {
      messageId: "msg002",
      sender: "user002",
      receipient: "user001",
      content: "Yes, I’ll be there. Thanks for the invite!",
      timeStamp: new Date("2024-11-28T09:35:00Z"),
      readStatus: false,
  },
  {
      messageId: "msg003",
      sender: "user003",
      receipient: "user001",
      content: "Can you share the location again?",
      timeStamp: new Date("2024-11-28T10:00:00Z"),
      readStatus: false,
  },
  {
      messageId: "msg004",
      sender: "user001",
      receipient: "user003",
      content: "Sure, it’s Central Park, NYC.",
      timeStamp: new Date("2024-11-28T10:05:00Z"),
      readStatus: true,
  },
];
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

run()
async function run(){
  await mongoose.connect("mongodb+srv://wezong:hack24fall12345@hackproject.akopa.mongodb.net/?retryWrites=true&w=majority&appName=hackproject");
  console.log("started");
  await newUser.save();
  await Event.insertMany(testEvents);
  console.log("events good")
  await Chat.insertMany(testChats);
  console.log("chats good")
  
}

console.log("New User Created:", newUser);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// database
app.use((req, res, next) => {
  req.db = mongoose;
  next();
})

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);
app.use("/google", googleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
