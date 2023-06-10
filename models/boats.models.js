const mongoose = require("mongoose");

const boatsSchema = new mongoose.Schema(
  {
    photo: String,
    name: String,
    description: String,
    nbre_person: String,
    moteur: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("boats", boatsSchema);
