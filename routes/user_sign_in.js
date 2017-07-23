var express = require('express');
var router = express.Router();
var passport = require('passport');


router.post('/',
  passport.authenticate('local', {
    failureRedirect: '/api/loginFailure',
  }),
  function(req, res) {
    res.send({"response":"Successfully logged in",
              "session": req.session});
  });

module.exports = router;
