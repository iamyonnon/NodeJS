var express = require('express');
const app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');

app.listen(3000, () => {
    console.log('Run OK ! 200');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + ('/index.html'));
})
