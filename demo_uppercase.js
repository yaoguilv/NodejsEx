// in current directory, execute 'npm install upper-case'
// npm pacakge site: www.npmjs.com

var http= require('http');
var uc = require('upper-case');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);
