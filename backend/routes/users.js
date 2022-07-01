var express = require('express');
var router = express.Router();
const { Accounts } = require('../model/db/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = Accounts.find({});
  console.log(data)
  res.send("")
});

module.exports = router;
