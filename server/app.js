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
    name: "Alex Smith",
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
run();
async function run() {
  await mongoose.connect(
    "mongodb+srv://wezong:hack24fall12345@hackproject.akopa.mongodb.net/?retryWrites=true&w=majority&appName=hackproject"
  );
  console.log("started");
  await newUser.save();
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

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);
app.use("/google", googleRouter);
app.use("/users", usersRouter);

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
