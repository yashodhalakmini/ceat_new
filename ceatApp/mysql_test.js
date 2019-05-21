var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host:'localhost',
    port:3307,
    database:'csv_db',
    user:'root'

})

// runQuery();

// function runQuery(){
//     var fullQuery ="SELECT `Category`,`Size`, SUM(`QNT/Pcs`) AS 'Total_sales' FROM ceat2018 GROUP BY `Category`,`Size`";
//     var connQuery = connection.query(fullQuery);

//     connQuery
//     .on('result', function(row, index){
//         console.log(row);
//         // res.send(row);
//     })
//     .on('end',function(){
//         console.log('end');
//         connection.end();
//     })
// }

connection.connect(function(err){
    if(err) throw err;
    console.log('Database connected')
});
 
app.get('/createdb', function(req,res){
    let sql ='SELECT `Category`,`Size`, SUM(`QNT/Pcs`) AS "Total_sales" FROM ceat2018 GROUP BY `Category`,`Size`';
     connection.query(sql,function(err,results,fields){
         if(err) throw err;
         res.send(results);
     });
});



app.listen('2222',function(err){
    if(err) throw err;
    console.log("Server started at port no 2222");
    console.log('using:http://localhost:2222');
})





    