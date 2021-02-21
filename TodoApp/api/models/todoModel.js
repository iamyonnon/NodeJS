var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({ 

    text:String,
    isDone: Boolean
});

var Todos = mongoose.model("Todo1", todoSchema); 
module.exports = Todos;