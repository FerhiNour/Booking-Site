const express = require("express");
const router = express.Router();

const {
  addBoat,
  findAllBoats,
  findSingleBoat,
  updateBoat,
  deleteBoat,
} = require("../controllers/boats.controllers");

//add boat
router.post("/", addBoat);

//find all boats
router.get("/", findAllBoats);

//find single boat
router.get("/:id", findSingleBoat);

//update boat
router.put("/:id", updateBoat);

//delete boat
router.delete("/:id", deleteBoat);

module.exports = router;
