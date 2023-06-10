const mongoose = require("mongoose");

const reservationsBoatsSchema = new mongoose.Schema(
  {
    date: String,
    hours: String,
    nbre_person: Number,
    name_client: String,
    email_client: String,
    tel_client: String,
    note_client: String,
    name_boat: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ReservationsBoats", reservationsBoatsSchema);
