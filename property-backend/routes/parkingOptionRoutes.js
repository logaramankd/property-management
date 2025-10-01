const express = require("express");
const router = express.Router();
const ParkingOption = require("../models/ParkingOption");
const createController = require("../controllers/dropdownController");
const controller = createController(ParkingOption);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
