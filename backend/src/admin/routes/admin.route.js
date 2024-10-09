const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");
const auth = require("../middleware/auth");

router.post("/register", controller.registerAdmin);
router.post("/login", controller.loginAdmin);
router.get("/find/:id", controller.getTaggedAssignments);
router.post("/accept/:id", controller.acceptAssignment);

module.exports = router;
