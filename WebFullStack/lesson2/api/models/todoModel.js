var mongoose = require("mongoose");
var config = require("./config");
var todoController = require("./api/controllers/todoController");
// ket noi co so du lieu
mongoose.connect(config.getDbConnectionString());
todoController(app);