var userController = require("../controllers/user");
var express = require('express');
var router = express.Router();

  // This route handles getting all headlines from our database
router.get("/api", function(req, res) {
    console.log("blah Blah Blah");
    res.json([{
    	id: 1,
    	username: "samsepi0l"
    }, {
    	id: 2,
    	username: "D0loresH4ze"
    }]);
    // Run the userController get method and pass in whether we want saved, unsaved,
    // (or all headlines by default)
    // userController.get(query, function(data) {
    //   // Send the article data back as JSON
    //   console.log("Hello");
    //   console.log(data);
    //   res.json(data);
    // });
});

module.exports = router;


  // // This route handles deleting a specified headline
  // router.delete("/api/headlines/:id", function(req, res) {
  //   var query = {};
  //   // Set the _id property of the query object to the id in req.params
  //   query._id = req.params.id;
  //
  //   // Run the headlinesController delete method and pass in our query object containing
  //   // the id of the headline we want to delete
  //   headlinesController.delete(query, function(err, data) {
  //     // Send the result back as JSON to be handled client side
  //     res.json(data);
  //   });
  // });
  //
  // // This route handles updating a headline, in particular saving one
  // router.patch("/api/headlines", function(req, res) {
  //   // Construct a query object to send to the headlinesController with the
  //   // id of the headline to be saved
  //
  //   // We're using req.body here instead of req.params to make this route easier to
  //   // change if we ever want to update a headline in any way except saving it
  //
  //   headlinesController.update(req.body, function(err, data) {
  //     // After completion, send the result back to the user
  //     res.json(data);
  //   });
  // });
  //
  // // This route handles getting notes for a particular headline id
  // router.get("/api/notes/:headline_id?", function(req, res) {
  //   // If we are supplied a headline id in req.params, then we will add the id to our query object
  //   // Otherwise query will remain an empty object and thus return every note
  //   var query = {};
  //   if (req.params.headline_id) {
  //     query._id = req.params.headline_id;
  //   }
  //
  //   // Get all notes that match our query using the notesController get method
  //   notesController.get(query, function(err, data) {
  //
  //     // Send the note data back to the user as JSON
  //     res.json(data);
  //   });
  // });
  //
  // // This route handles deleting a note of a particular note id
  // router.delete("/api/notes/:id", function(req, res) {
  //   var query = {};
  //   query._id = req.params.id;
  //
  //   // Use the check function from the headlines controller,
  //   // this checks all of our articles, sorted by id number
  //   notesController.delete(query, function(err, data) {
  //     // Send the article data to a json
  //     res.json(data);
  //   });
  // });
  //
  // // This route handles saving a new note
  // router.post("/api/notes", function(req, res) {
  //   notesController.save(req.body, function(data) {
  //     // Send the note to the browser as a json
  //     res.json(data);
  //   });
  // });
