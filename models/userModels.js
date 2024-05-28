const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require,
    unique: true,
  },
  email: {
    type: String,
    require,
    unique: true,
  },
  password: {
    type: String,
    require,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
