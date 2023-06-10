const express = require("express");
const router = express.Router();
const {
  addReservationsExcursions,
  findAllReservationsExcursions,
  findSingleReservationsExcursions,
  deleteReservationsExcursions,
} = require("../controllers/reservationsExcursions.controllers");

//add reservation Excursion
router.post("/", addReservationsExcursions);

//find all reservations Excursions
router.get("/", findAllReservationsExcursions);

//find single reservation Excursion
router.get("/:id", findSingleReservationsExcursions);

//delete reservation Excursion
router.delete("/:id", deleteReservationsExcursions);

module.exports = router;
