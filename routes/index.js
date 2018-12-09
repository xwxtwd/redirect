var express = require('express');
var router = express.Router();
var qs = require('querystring');
/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.headers['user-agent'].toLowerCase().indexOf('micromessenger') !== -1)
    return res.render('index', {title: '跳转获取优惠'});
  const url = req.query.url;
  if (url) res.redirect(url);
});

module.exports = router;
