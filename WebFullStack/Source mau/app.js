var express = require("express");
var app = express();
var port = 3000;

var mongoose = require("mongoose");
var config = require("./config");
var todoController = require("./api/controllers/todoController");
// ket noi co so du lieu
mongoose.connect(config.getDbConnectionString());
todoController(app);



var morgan = require("morgan");
app.use(morgan("dev"));
app.set("view engine", "ejs");

app.use("/", express.static(__dirname + "/public"));

app.get("/", function(req, res){
      res.render("trangchu");
})

app.get("/gioithieu", function(req, res){
    res.render("gioithieu");
})

app.get("/dangnhap", function(req, res){
    res.render("dangnhap");
})

app.listen(port, function(){
    console.log("Run OK ! :" + port);
})