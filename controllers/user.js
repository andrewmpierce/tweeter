var User = require("../models/User");


module.exports = {

  get: function(query, cb) {
    // Prepare a query to get the data we scraped,
    // and sort starting from most recent (sorted by id num)
    User.find(query)
      .sort({
        _id: -1
      })
      // Execute this query
      .exec(function(err, doc) {
        // Once finished, pass the list into the callback function
        cb(doc);
      });
  },

};
