let http = require('http');
let fs = require('fs');

let handlesRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function (error, data) {
        if(error) {
            response.writeHead(404);
            response.write("Error");
        }
        else {
            response.write(data);
        }
        response.end();
    });
}
http.createServer(handlesRequest).listen(8000);