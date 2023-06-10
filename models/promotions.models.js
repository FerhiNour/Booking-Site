const mongoose = require("mongoose");

const promotionsSchema = new mongoose.Schema(
  {
    name: String,
    date_debut: String,
    date_fin: String,
    adulte: String,
    enfant: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("promotions", promotionsSchema);
