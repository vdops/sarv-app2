require('./server/data/db.js');
var express = require('express'); 
var app = express();
var path = require('path');
var routes = require('./server/routes/api.js');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
const fs = require('fs');
var gg = {};
app.set('port', 3001);

app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(path.join(__dirname, './asset/uploads')));
var options = {
    key: fs.readFileSync('client-key.pem'),
    cert: fs.readFileSync('client-cert.pem')
  };
//BodyParser middleware - We only need strings and arrays from form body 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit : '50mb' }));

https.createServer(options, app).listen(3001);
 app.use('/api', routes);

// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello World! Node.js is working correctly.\n');
//  }).listen(8081);
//  console.log('Server running on 8001/');
 


// var server = app.listen(app.get('port'), function(){
//     var port = server.address().port;
//     console.log("api on port" + port);
// });
