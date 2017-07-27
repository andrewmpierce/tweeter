var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var UserController = require('./controllers/user');

var tweets = require('./routes/tweets');
var users_new = require ('./routes/users_new');
var user_login = require('./routes/user_sign_in');
var tweet_new = require('./routes/new_tweet');
var login_failure = require('./routes/login_failure');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(passport.initialize());
app.use(passport.session());




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//use all of our endpoints
// 
// app.use(express.static(path.join(__dirname, 'client/build')));
//
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.use('/api/tweets', tweets);
app.use('/api/user/new', users_new);
app.use('/api/tweet/new', tweet_new);
app.use('/api/user/login', user_login);
app.use('/api/loginFailure', login_failure);

////////////////////////////////////////////////
//Handle user log in and authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
    UserController.get({ "username": username }, function (user, err) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password !== password) { return done(null, false); }
      return done(null, user);
    });
  }
));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var dbURL = process.env.MONGODB_URI || "mongodb://localhost/Tweeter";

// Connect mongoose to our database
mongoose.connect(dbURL, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");

 }
});



module.exports = app;
