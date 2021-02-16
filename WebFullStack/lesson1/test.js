var http = require('http');
var express = require('express');
const app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');

var handleRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    res.write('Hello World');
    res.end();
}

app.use('/', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile()
})

// http.createServer(handleRequest).listen(3000);