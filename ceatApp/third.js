var express = require('express');
var app = express();
var db = require('./db');

app.get('/', function(req,res){
  res.send("Welcome Home!!!");
});


app.get('/createQuery', function(req, res){
    let sql ="SELECT `Category`,`Size`, SUM(`QNT/Pcs`) AS 'Total_sales' FROM ceat2018 GROUP BY `Category`,`Size`";

    db.query(sql,function(err){
        if(err)throw err;
        res.send("Query is created");
        // res.send(sql);
    });
});

// app.get('/seeQuery',function runQuery(){
//     var fullQuery ="SELECT `Category`,`Size`, SUM(`QNT/Pcs`) AS 'Total_sales' FROM ceat2018 GROUP BY `Category`,`Size`";
//     var connQuery = db.query(fullQuery);

//     connQuery
//     .on('result', function(row, index){
//         // console.log(row);
//         res.send(row);
//     })
//     .on('end',function(){
//         console.log('end');
//         db.end();
//     })
// }
// );



app.listen('2000',function(err){
    if(err) throw err;
    console.log("Server running at:http://localhost:2000");
});