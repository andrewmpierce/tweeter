var express = require('express');
var router = express.Router();
var TweetController = require('../controllers/tweet');
var UserController = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
	var query = {};
	TweetController.getAll(query, function(data) {
      // Send the article data back as JSON
    res.json(data);
  });
});

module.exports = router;
