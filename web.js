var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filename = 'index.html';

app.get('/', function(request, response) {
	fs.readFile(filename, 'utf8', function(err, data) {
  	if (err) throw err;
  		var buf = new Buffer(data);
  		response.send(buf.toString());
	});

  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});