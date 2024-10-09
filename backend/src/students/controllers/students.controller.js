const StudentModel = require("../models/students.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new student as a user
const studentRegistration = async (req, res) => {
  const { userId, password } = req.body;
  try {
    let user = await StudentModel.StudentRegistration.findOne({ userId });
    if (user) {
      return res
        .status(400)
        .json({ message: "User with the same username exists!" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new StudentModel.StudentRegistration({
      userId,
      password: hashedPassword,
    });

    await user.save();

    res.status(400).json({ message: "New student registered successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Student login
const studentLogin = async (req, res) => {
  const { userId, password } = req.body;

  try {
    let user = await StudentModel.StudentRegistration.findOne({ userId });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Student not registered with the system!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const payload = {
      user: {
        id: user.id,
        userId: user.userId,
      },
    };

    const token = jwt.sign(payload, "Secret_Key", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

const addAssignment = async (req, res) => {
  const { task, admin } = req.body;
  let userId = req.user.user.userId;
  let user = await StudentModel.StudentRegistration.findOne({ userId });

  if (!user) {
    return res.status(404).json({ message: "Not found!" });
  }

  try {
    if (req.user) {
      const assignment = {
        userId: user._id,
        task: task,
        admin: admin,
      };

      const student = await StudentModel.Students.create(assignment);
      return res.status(200).json(student);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  studentRegistration,
  studentLogin,
  addAssignment,
};
