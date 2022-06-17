const mongoose = require("mongoose");

const Accounts = mongoose.model("Accounts", {
  name: {
    type: String,
  },
  gender: {
    type: Number,
  },
  SocialCode: {
    type: Number,
    min: 6,
    require,
  },
});

module.exports = { Accounts };
