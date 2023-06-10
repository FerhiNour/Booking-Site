const express = require("express");
const router = express.Router();
const {
  addExcursion,
  findAllExcursions,
  findSingleExcursion,
  updateExcursion,
  deleteExcursion,
} = require("../controllers/excursion.controllers");

//add excursion
router.post("/", addExcursion);

//find all excursions
router.get("/", findAllExcursions);

//find single excursion
router.get("/:id", findSingleExcursion);

//update excursion
router.put("/:id", updateExcursion);

//delete excursion
router.delete("/:id", deleteExcursion);

module.exports = router;
