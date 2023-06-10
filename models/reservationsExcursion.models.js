const mongoose = require("mongoose");
const reservationsExcursionsSchema = new mongoose.Schema(
  {
    date: String,
    hours: String,
    nbre_adulte: Number,
    nbre_enfant: Number,
    name_client: String,
    email_client: String,
    tel_client: String,
    note_client: String,
    name_excursion: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "reservationsExcursions",
  reservationsExcursionsSchema
);
