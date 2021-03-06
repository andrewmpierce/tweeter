var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.post('/', function(req, res, next) {
  userController.save(req.body, function(data) {
      // Send the user to the browser as a json
      res.send({
        "response":"Successfully created user",
        "user": data,
      });
    });

});

module.exports = router;
