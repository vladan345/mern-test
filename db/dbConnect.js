const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to the database was succesfull.");
    })
    .catch((error) => {
      console.log("Unable to connect to the database.");
      console.log(error);
    });
}

module.exports = dbConnect;
