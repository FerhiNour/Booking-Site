const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const passport = require("passport");
const cors = require("cors"); // Added cors package

const { inRole, ROLES } = require("./security/RolesMiddleware");

const BoatsRouter = require("./routes/boats");
const ExcursionRouter = require("./routes/excursions");
const MessagesRouter = require("./routes/messages");
const PromotionsRouter = require("./routes/promotions");
const ReservationsBoats = require("./routes/reservationsBoats");
const ReservationsExcursions = require("./routes/reservationsExcursions");
const authRouter = require("./routes/auth");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors()); // Enable CORS for all routes

/* passport */
app.use(passport.initialize());
require("./security/passport")(passport);

app.use(
  "/api/boats",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.admin),
  BoatsRouter
);
app.use(
  "/api/excursions",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.admin),
  ExcursionRouter
);
app.use(
  "/api/messages",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.admin),
  MessagesRouter
);
app.use(
  "/api/promotions",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.manager),
  PromotionsRouter
);
app.use(
  "/api/reservationsBoats",
  passport.authenticate("jwt", { session: false }),
  ReservationsBoats
);
app.use(
  "/api/reservationsExcursions",
  passport.authenticate("jwt", { session: false }),
  ReservationsExcursions
);

app.use("/api", authRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err.message));

module.exports = app;
