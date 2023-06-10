const mongoose = require("mongoose");

const excursionsSchema = new mongoose.Schema(
  {
    photo: String,
    name: String,
    description: String,
    point_depart: String,
    duree: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("excursions", excursionsSchema);
