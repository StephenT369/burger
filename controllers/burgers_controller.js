var express = require('express');
var hamburger = require('../models/hamburger.js');

var hamburgerRtr = express.Router();

hamburgerRtr.get("/", function(req, res) {
  res.redirect("/hamburgers");
});

hamburgerRtr.get("/hamburgers", function(req, res) {
  hamburger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

hamburgerRtr.post("/hamburgers/create", function(req, res) {
  hamburger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

hamburgerRtr.put("/hamburgers/:id", function(req, res) {
  hamburger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = hamburgerRtr;