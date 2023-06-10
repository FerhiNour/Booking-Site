const boats = require("../models/boats.models");
const ValidateBoats = require("../validation/boats.validation");

//add boat
const addBoat = async (req, res) => {
  const { errors, isValid } = ValidateBoats(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await boats.findOne({ name: req.body.name }).then(async (exist) => {
        if (exist) {
          errors.name = "Boat Exist";
          res.status(404).json(errors);
        } else {
          await boats.create(req.body);
          res.status(200).json({ message: "boat created with succes" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Find all boats
const findAllBoats = async (req, res) => {
  try {
    const data = await boats.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

//Find single boat
const findSingleBoat = async (req, res) => {
  try {
    const data = await boats.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

//update boat
const updateBoat = async (req, res) => {
  const { errors, isValid } = ValidateBoats(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await boats.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

//delete boat
const deleteBoat = async (req, res) => {
  try {
    await boats.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "boat deleted with succes" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addBoat,
  findAllBoats,
  findSingleBoat,
  updateBoat,
  deleteBoat,
};
