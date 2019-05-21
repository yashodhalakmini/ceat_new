var mysql = require('mysql');

var db = mysql.createConnection({
    // host: 'localhost:3307',
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3307', 
    database: 'csv_db'
});

db.connect(function(err){
if (err) throw err;
console.log("Database Connected");
})



module.exports = db