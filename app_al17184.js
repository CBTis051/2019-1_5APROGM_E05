var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo NODE JS Repo GIT - Acosta Aguiluz Julio\n');
}).listen(8081);
console.log('Server running on port 8081');