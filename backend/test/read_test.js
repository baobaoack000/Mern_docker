
let mongoose = require("mongoose");
let User = require("../model/db/users");

//Require the dev-dependencies
var assert = require("assert");

let user;
// this will run before running every test
beforeEach(() => {
  // Creating a new Instance of User Model
   user = new User.Accounts({
    name: "Shriyam",
    gender: "Female",
    SocialCode: "100012",
  });
    user.save()
        .then(() => done());
});

describe("Reading Details of User", () => {
    it("Finds user with the name", (done) => {
        User.Accounts.findOne({ name: "Shriyam" }).then((users) => {
            done();
        })
  });
});
