const express = require("express");
const router = express.Router();
const {
  addPromotion,
  findAllPromotions,
  findSinglePromotion,
  updatePromotion,
  deletePromotion,
} = require("../controllers/promotions.controllers");

//add promotion
router.post("/", addPromotion);

//find all promotions
router.get("/", findAllPromotions);

//find single promotion
router.get("/:id", findSinglePromotion);

//update promotion
router.put("/:id", updatePromotion);

//delete promotion
router.delete("/:id", deletePromotion);

module.exports = router;
