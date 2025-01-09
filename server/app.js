var createError = require("http-errors");
var express = require("express");
const session = require("express-session");
const passport = require("passport");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
const cors = require('cors');
require("dotenv").config();

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var protectedRouter = require("./routes/protected");
var googleRouter = require("./routes/google");
var eventRouter = require("./routes/event.js");

var app = express();
const mongoose = require("mongoose");


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({ 
  secret: process.env["PASSPORT_SECRET"],
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});


// database middleware
app.use((req, res, next) => {
  req.db = mongoose;
  next();
})

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);
app.use("/google", googleRouter);
app.use("/event", eventRouter);

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
