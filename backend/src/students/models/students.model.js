const mongoose = require("mongoose");

const StudentRegistrationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Enter the user Id"],
      unique: [true, "user id should be unique"],
      primaryKey: true,
    },
    password: {
      type: String,
      required: [true, "Enter the password"],
    },
  },
  {
    timestamps: true,
  }
);

const StudentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Enter the user Id"],
    },
    task: {
      type: String,
      required: [true, "Enter the task name"],
    },
    admin: {
      type: String,
      required: [true, "Enter the desiginated admin"],
    },
  },
  {
    timestamps: true,
  }
);

const Students = mongoose.model("Students", StudentSchema);
const StudentRegistration = mongoose.model(
  "StudentRegistration",
  StudentRegistrationSchema
);

module.exports = {
  StudentRegistration,
  Students,
};
