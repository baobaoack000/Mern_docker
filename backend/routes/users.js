var express = require('express');
var router = express.Router();
const { Accounts } = require('../model/db/users');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send("respond with a resource");
  console.log("Welcome to users pages");
  const Users = await Accounts.find();
  if (Users.length) {
    console.log("Users found");
  }
  else { 
    console.log("not found")
  }
 
});

module.exports = router;
