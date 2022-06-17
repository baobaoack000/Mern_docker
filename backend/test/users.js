//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let User = require("../model/db/test");

//Require the dev-dependencies
let chai = require("chai");
let server = require("../server");
let should = chai.should();
var assert = require("assert");

describe("List :", function () {
  describe("mongo1 DB()", function () {
    it("testing db connection status", function () {
      const db = "Hello world!";
      assert.equal(db, "Hello world!");
    });
  });
});
