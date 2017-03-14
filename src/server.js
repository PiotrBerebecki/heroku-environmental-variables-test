var http = require('http');
var router = require('./router/router');

require('env2')('.env');
console.log(process.env.MY_SECRET_AMAZON_KEY);


var port = process.env.PORT || 3000;

var server = http.createServer(router);

server.listen(port);

console.log("server listening up and running on port:", port);
