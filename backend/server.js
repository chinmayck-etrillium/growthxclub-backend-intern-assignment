const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./db");
const studentRoutes = require("./src/students/routes/students.route");
const adminRoutes = require("./src/admin/routes/admin.route");

const port = 3000;

dotenv.config();
app.use(express.json());

db.connect_db();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/students", studentRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hi!");
});
