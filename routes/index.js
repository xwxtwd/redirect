var express = require('express');
var router = express.Router();
var qs = require('querystring');
/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query.url);
  const url = req.query.url;
  if (url) res.redirect(url);
});

module.exports = router;
