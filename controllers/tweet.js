var Tweet = require('../models/tweet');

module.exports = {

  getAll: function(query, cb) {
    Tweet.find(query)
      .sort({
        _id: -1
      })
      // Execute this query
      .exec(function(err, doc) {
        // Once finished, pass the list into the callback function
        cb(doc);
      });

  },

  get: function(query, cb) {
    Tweet.findOne(query)
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
    console.log(data);
    var newTweet = {
      dateJoined: Date(),
      tweet: data.tweet,
      _userId: data._id
    };
    Tweet.create(newTweet, function(err, doc) {
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
