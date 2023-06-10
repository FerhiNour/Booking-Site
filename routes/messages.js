const express = require("express");
const router = express.Router();
const {
  addMessage,
  findAllMessages,
  findSingleMessage,
  deleteMessage,
} = require("../controllers/messages.controllers");

//add message
router.post("/", addMessage);

//find all messages
router.get("/", findAllMessages);

//find single message
router.get("/:id", findSingleMessage);

//delete message
router.delete("/:id", deleteMessage);

module.exports = router;
