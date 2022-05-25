// Sentry Init
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

//installing dependencies
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./model/db/test");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

db.connect(app);

// Sentry Init
Sentry.init({
  dsn: "https://380c88230d384f0192b471d528c5bf1d@o1205122.ingest.sentry.io/6388991",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

app.use(Sentry.Handlers.errorHandler());
// default
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Adding route
app.use("/", indexRouter);
app.use("/users", usersRouter);


module.exports = app;
