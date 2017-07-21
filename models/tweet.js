var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TweetSchema = new Schema({
  text: {
    type: String
  },
  date: {
    type: Date
  },
  username: {
    type: String
  },
  _userId: {
   type: Schema.Types.ObjectId,
   ref: "User"
 },
});

var Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet;
