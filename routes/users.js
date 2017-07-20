var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
	var query = {};
	userController.getAll(query, function(data) {
      // Send the article data back as JSON
			//console.log(data);
      res.json(data);
    });
});

module.exports = router;
