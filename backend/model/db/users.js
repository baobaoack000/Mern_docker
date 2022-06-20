const mongoose = require("mongoose");

const Accounts
  = mongoose.model("Accounts", {
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  SocialCode: {
    type: Number,
    min: 6,
    require,
  },
});

module.exports = { Accounts };
