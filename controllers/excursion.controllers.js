const excursions = require("../models/excursions.models");
const ValidateExcursions = require("../validation/excursions.validation");

// add Excursion
const addExcursion = async (req, res) => {
  const { errors, isValid } = ValidateExcursions(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await excursions.findOne({ name: req.body.name }).then(async (exist) => {
        if (exist) {
          errors.name = "Excursion Exist";
          res.status(404).json(errors);
        } else {
          await excursions.create(req.body);
          res.status(200).json({ message: "excursion created with succes" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// find all Excursions
const findAllExcursions = async (req, res) => {
  try {
    const data = await excursions.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// find Single Excursion
const findSingleExcursion = async (req, res) => {
  try {
    const data = await excursions.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Update Excursion
const updateExcursion = async (req, res) => {
  const { errors, isValid } = ValidateExcursions(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await excursions.findByIdAndUpdate(
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

// Delete Excursion
const deleteExcursion = async (req, res) => {
  try {
    await excursions.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "excursion deleted with succes" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addExcursion,
  findAllExcursions,
  findSingleExcursion,
  updateExcursion,
  deleteExcursion,
};
