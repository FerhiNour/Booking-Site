const messages = require("../models/messages.models");
const ValidateMessages = require("../validation/messages.validation");

// add Message
const addMessage = async (req, res) => {
  const { errors, isValid } = ValidateMessages(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await messages.findOne({ email: req.body.email }).then(async (exist) => {
        if (exist) {
          errors.email = "Email Exist";
          res.status(404).json(errors);
        } else {
          await messages.create(req.body);
          res.status(201).json({ message: "Message send with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// find all Messages
const findAllMessages = async (req, res) => {
  try {
    const data = await messages.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// find Single Message
const findSingleMessage = async (req, res) => {
  try {
    const data = await messages.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Message
const deleteMessage = async (req, res) => {
  try {
    await messages.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "message deleted with succes" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addMessage,
  findAllMessages,
  findSingleMessage,
  deleteMessage,
};
