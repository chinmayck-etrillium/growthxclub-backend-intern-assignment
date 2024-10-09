const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");
const auth = require("../middleware/auth");

router.post("/register", controller.registerAdmin);
router.post("/login", controller.loginAdmin);
router.get("/find/", auth, controller.getTaggedAssignments);
router.post("/accept/:id", auth, controller.acceptAssignment);
router.post("/reject/:id", auth, controller.rejectAssignment);

module.exports = router;
