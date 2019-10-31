// Set up MySQL connection.
var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SMUb00tc@mp369",
  database: "burgers_db"
});

// Make connection.
db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

// Export connection for our ORM to use.
module.exports = db;