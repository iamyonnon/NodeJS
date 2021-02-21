module.exports = (app) => {
    const informationCtrl = require("../Controllers/informationController");
    app.route("/").get(informationCtrl.getAll);
}