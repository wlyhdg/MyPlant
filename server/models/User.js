const mongoose = require("mongoose");

userSchema = {
  username: String,
  password: String,
  email: String,
  bmi: Number,
  bmr: Number,
  foodItems: Array
}

module.exports = mongoose.model("User", userSchema);