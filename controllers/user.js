var User = require("../models/User");


module.exports = {

  get: function(query, cb) {
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

  save: function(data, cb) {
    // Make a newNote with the note model, saving the apropos info
    var newUser = {
      dateJoined: Date(),
      username: data.username,
      password: data.password
    };
    
    User.create(newUser, function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Or just log the doc we saved
      else {
        console.log(doc);
        // Place the log back in this callback function
        // so it can be used with other functions asynchronously
        cb(doc);
      }
    });
  },
};
