// routes/propertyTypeRoutes.js
const express = require("express");
const router = express.Router();
const PropertyType = require("../models/PropertyType");
const createController = require("../controller/dropdownController");
const controller = createController(PropertyType);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
