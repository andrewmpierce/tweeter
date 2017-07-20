var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


router.post('/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(res);
    res.redirect('/');
  });

module.exports = router;
