var fs = require('fs');
var path = require('path');


var handlers = {};


handlers.serveLanding = function(request, response) {
  fs.readFile(path.join(__dirname, '..', '..', 'index.html'), function(err, file) {
    if (err) {
      throw new Error(err);
    }
    response.writeHead(200, { "Content-Type": "text/html" } );
    response.end(file);
  });
};


handlers.servePublic = function(request, response) {
  var extension = request.url.split('.')[1];

  var extensionType = {
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "ico": "image/x-icon"
  };

  fs.readFile(path.join(__dirname, '..', '..', request.url), function(err, file) {
    if (err) {
      throw new Error(err);
    }
    response.writeHead(200, { "Content-Type": extensionType[extension] } );
    response.end(file);
  });
};


handlers.pageNotFound = function(request, response) {
  response.writeHead(404, { "Content-Type": "text/html" } );
  response.end('<h1>404: Page not found</h1>');
};


module.exports = handlers;
