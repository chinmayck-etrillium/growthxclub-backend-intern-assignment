const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/students.controller");

router.post("/register", controller.studentRegistration);
router.post("/login", controller.studentLogin);
router.post("/add-assignment", auth, controller.addAssignment);
router.get("/assignments", auth, controller.getAssignments);
router.get("/status/:id", auth, controller.assignmentStatus);
module.exports = router;
