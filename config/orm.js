var db = require ('../config/db.js');

function questionMark(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function toSql(ob) {

  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tblInput, cb){
        var queryString = "SELECT * FROM " + tblInput + ";";
        db.query(queryString, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMark(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        db.query(queryString, vals, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += toSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        db.query(queryString, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
    }
};

module.exports = orm;