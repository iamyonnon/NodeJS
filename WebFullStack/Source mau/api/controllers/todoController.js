var Todos = require("../models/todoModel");

module.exports = function (app) {

    // API khởi tạo dữ liệu

    app.get("/api/khoitao", function (req, res) {

        var dulieutam = [
            {
                text: "Dẫn ngoại đi bơi",
                isDone: true
            },
            {
                text: "Dẫn nội đi sở thú",
                isDone: false
            },
            {
                text: "Dẫn người yêu đi Mỹ",
                isDone: false

            },

            {
                text: "Dẫn người yêu đi Mỹ",
                isDone: true

            }
        ];

        Todos.create(dulieutam, function (err, results) {
            res.send(results);
        });

    })

    // API lấy dữ liệu

    app.get("/api/laydulieu", function(req, res){

        Todos.find(function (err, todos) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json(todos);
            }
        });

    })

    //API them du lieu

    // app.get("/api/themdulieu", (req, res) => {
    //     var dulieu = 
    // })

}