const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");

router.post("/register", controller.registerAdmin);

module.exports = router;
