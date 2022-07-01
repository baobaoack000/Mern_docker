//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let User = require("../model/db/users");

//Require the dev-dependencies
var assert = require("assert");

describe("List :", function () {
  describe("mongo1 DB()", function () {
    it("testing database insert", function (done) {
      const newUser = new User.Accounts({ name: "Avocado", gender: "Female", SocialCode: "100012"})
      newUser.save()
      .then(() => {
                //if the newUser is saved in db and it is not new
                assert(!newUser.isNew);
                done();
            });
    });
  });
});

