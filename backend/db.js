const mongoose = require("mongoose");

const connect_db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chinmayck:ufoDwpABOnzQ6PHe@backendapi.eq8xb.mongodb.net/Node-api?retryWrites=true&w=majority&appName=BackendApi"
    );
    console.log("Connected to DB!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = { connect_db };
