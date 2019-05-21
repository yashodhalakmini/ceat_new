const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  

  // 'use strict';

  // let jsonData = require('./flare.json');
  
  // console.log(jsonData);
  // res.write(jsonData);



//   const fs = require('fs');

// let rawdata = fs.readFileSync('./flare.json');  
// let flare = JSON.parse(rawdata);  
// console.log(flare);
// res.end(flare);


  // const data = require('./flare.json')

  // app.get('/search', function (req, res) {
  //   res.header("Content-Type",'application/json');
  //   res.send(JSON.stringify(data));
  // })
  // app.get('/search', function (req, res) {
  //   res.json(data);
  // })

  // const fs = require('fs')
  // fs.readFile('./flare.json', 'utf8', (err, fileContents) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   try {
  //     const data = JSON.parse(fileContents)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});