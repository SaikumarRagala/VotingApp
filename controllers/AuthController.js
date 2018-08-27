var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");
var technologies = require("../models/technologies");

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('register');
};


userController.voting = function(req, res) {
  console.log("voting called");
  var tech = req.body.tech
  console.log(tech)
  if (tech == 'AR')
  {
    update_col =  { AR: 1 } 
  }
  if (tech == 'ML')
  {
    update_col =  { ML: 1 } 
  }
  if (tech == 'serverless')
  {
    update_col =  { Serverless: 1 } 
  }
  if (tech == 'Blockchain')
  {
    update_col =  { Blockchain: 1 } 
  }
  console.log("Updated_Col", update_col)
  technologies.findOneAndUpdate({ _id: 'Tech'}, { $inc: update_col}, {new: true }, function(err, response){
    if (err){
      console.log("error",err);
      req.logout(); 
      res.redirect('/');
    }
    else{
      console.log("successfully updated")
      req.logout();
      res.redirect('/');
    }
  });
};


// Post registration
userController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : req.body.username });
    }

    res.render('login');
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  username = req.body.username
  if (req.body.username == 'admin')
  {
    technologies.find({_id : 'Tech'}, function(err, data){
      data = data[0];
      passport.authenticate('local')(req, res, function () {
        res.render('dashboard', { user : username, Blockchain: data.Blockchain , ML : data.ML, Serverless :data.Serverless, AR : data.AR});
      });
    });
  }
  else
  {
    passport.authenticate('local')(req, res, function () {
      res.render('voting', { user : username });
    });    
  }
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;
