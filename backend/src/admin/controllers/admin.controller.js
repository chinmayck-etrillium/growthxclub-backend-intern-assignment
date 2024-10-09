const AdminModel = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = async (req, res) => {
  const { userId, password } = req.body;
  try {
    let admin = await AdminModel.AdminRegistration.findOne({ userId });

    if (admin) {
      return res.status(400).json({ message: "Admin with same userID exists" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    admin = new AdminModel.AdminRegistration({
      userId,
      password: hashedPassword,
    });

    await admin.save();
    return res.status(201).json({ message: "Admin created successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = {
  registerAdmin,
};
