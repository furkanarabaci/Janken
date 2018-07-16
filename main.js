let http = require('http');
//Node server is just there for future player vs player feature. Not needed for now.
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);