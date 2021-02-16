var Todos = require("../models/todoModel");


module.exports = () => {
    //test API
    app.get("/api/test", (req, res) => {
        var temp =[ 
            {
                text:"Dan ngoai di boi",
                isDone: true
            }, 
            {
                text:"Dan noi di so thu",
                isDone: true
            }
        ];
        Todos.create(temp, (err, results) => {
            res.send(results);
        })
    })
}