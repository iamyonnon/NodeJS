const information = require("../Models/information");
var date = new Date();

const getAll = (req,res) => {
    information.findAll().then((information) => (res.json(information))).catch(err => console.log("getALl failed with error " + err));
}

module.exports = {getAll}