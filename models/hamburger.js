var orm = require('../config/orm.js');
var hamburger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.insertOne("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.updateOne("burgers", {
        devoured: true
      }, condition, cb);
    }
  };
  
  module.exports = hamburger;