const express = require("express");
const elevatorController = require("../controlers/elevatorController");

const router = express.Router();

router.put("/updateElevators", elevatorController.updateElevators);
router.post("/requestElevator", elevatorController.requestElevator);

module.exports = router;
