const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provie an Email"],
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: [true, "Please provie password"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
