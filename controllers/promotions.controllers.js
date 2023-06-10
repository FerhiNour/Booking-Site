const promotions = require("../models/promotions.models");
const ValidatePromotions = require("../validation/promotions.validation");

// add Promotion
const addPromotion = async (req, res) => {
  const { errors, isValid } = ValidatePromotions(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await promotions.findOne({ name: req.body.name }).then(async (exist) => {
        if (exist) {
          errors.name = "Promotion Exist";
          res.status(404).json(errors);
        } else {
          await promotions.create(req.body);
          res.status(200).json({ message: "promotion created with succes" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// find all Promotions
const findAllPromotions = async (req, res) => {
  try {
    const data = await promotions.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// find Single Promotion
const findSinglePromotion = async (req, res) => {
  try {
    const data = await promotions.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Update Promotion
const updatePromotion = async (req, res) => {
  const { errors, isValid } = ValidatePromotions(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await promotions.findByIdAndUpdate(
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

// Delete Promotion
const deletePromotion = async (req, res) => {
  try {
    await promotions.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "promotion deleted with succes" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addPromotion,
  findAllPromotions,
  findSinglePromotion,
  updatePromotion,
  deletePromotion,
};
