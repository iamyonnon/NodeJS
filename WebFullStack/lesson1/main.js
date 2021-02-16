var http = require('http');

var handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hi there');
    response.end();
}

http.createServer(handleRequest).listen(8000);