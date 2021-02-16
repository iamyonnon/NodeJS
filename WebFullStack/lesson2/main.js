var express = require('express');
var app = express(); //Khai bac mac dinh

var bodyParser = require('body-parser');
var morgan = require('morgan'); //Coi nhu cac thu vien them

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); //Su dung cac thu vien da extends vao

app.use("/", express.static(__dirname + "/public")); // Khai bao dong nay de co the dung cac file khac nhu bootstrap, css, js.

app.set('view engine', 'ejs'); // Set default file views se la file lay du lieu

app.listen(3000, () => {
    console.log("Run Ok! 200");
}) // Set port va in ra neu request duoc goi di thanh cong


app.get("/", (req, res) => {
    // res.send("Xin chao"); // Gui ra page html
    res.render('index'); // Render ra mot file ( html, ejs)
})

// app.get("/test", (req, res) => {
//     // res.send("Xin chao");
//     res.render('test');
// })





var mongoose = require("mongoose");
var config = require("./config");
var todoController = require("./API/controllers/todoController");
// ket noi co so du lieu
mongoose.connect(config.getDbConnectionString());
todoController(app);