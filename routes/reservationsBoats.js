const express = require("express");
const router = express.Router();
const {
  addReservationsBoats,
  findAllReservationsBoats,
  findSingleReservationsBoats,
  deleteReservationsBoats,
} = require("../controllers/reservationsBoats.controllers");

//add reservationsBoat
router.post("/", addReservationsBoats);

//find all reservationsBoats
router.get("/", findAllReservationsBoats);

//find single reservationsBoat
router.get("/:id", findSingleReservationsBoats);

//delete reservationsBoat
router.delete("/:id", deleteReservationsBoats);

module.exports = router;
