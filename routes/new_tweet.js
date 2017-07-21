var express = require('express');
var router = express.Router();
var tweetController = require('../controllers/tweet');

router.post('/', function(req, res, next) {
  tweetController.save(req.body, function(data) {
      // Send the user to the browser as a json
      res.json(data);
    });

});

module.exports = router;
