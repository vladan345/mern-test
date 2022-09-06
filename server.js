const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");

dbConnect();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/register", (request, response) => {
  console.log(response.body);
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          response.status(201).send({
            message: "User created successfully",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
