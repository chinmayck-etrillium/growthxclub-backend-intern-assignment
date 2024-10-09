const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/students.controller");

router.post("/register", controller.studentRegistration);
router.post("/login", controller.studentLogin);
router.post("/details", auth, controller.addAssignment);
router.get("/status/:id", auth, controller.assignmentStatus);
module.exports = router;
