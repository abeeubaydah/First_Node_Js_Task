var http = require('http');
var fs = require('fs');
var data = req.body
http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    
      fs.appendFileSync('message.txt', data, function(err, body) {
      if (err) {
        console.log(err)
      } else {
        console.log(req.body + urlencodedParser.toString())
      }
      
    });
    
    res.end();
  });
}).listen(8080);