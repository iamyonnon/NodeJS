// Mục đích của controller này là tạo ra các Restfull API
var Todos = require("../models/todoModel");

function Travedulieu(res) {
    Todos.find(function (err, todos) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(todos);
        }
    });
}

module.exports = function (app) {

    //API lấy dữ liệu
    app.get("/api/laydulieu", function (req, res) {
        Travedulieu(res);
    })

  

    //API thêm dữ liệu

    app.post("/api/themdulieu", function (req, res) {

        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Todos.create(todo, function (err, todo) {
            if (err) {
                throw err;
            } else {
                Travedulieu(res);
            }
        });

    });

 
    //API xoa du lieu
    app.delete("api/xoadulieu/:id", (req, res) => {
        Todos.remove({
            _id: req.params.id
        }, (err, todo) => {
            if(err) {
                res.send('Error');
            }
            else 
            Travedulieu(res);
        })
    }) 
}
