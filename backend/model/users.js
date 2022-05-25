const mongoose = require("mongoose");
const app = require("../server");

const Account = mongoose.model("Accounts", {
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

module.exports = { Account };
