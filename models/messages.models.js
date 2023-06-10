const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    tel: Number,
    content: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("messages", messagesSchema);
