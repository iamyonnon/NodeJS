const sequelize = require("sequelize");

const dbName = "webform";
const dbUser = "root";
const dbPass = "bangchu";
const host = "localhost";

const db = new sequelize(dbName, dbUser, dbPass,{
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

db.authenticate().then(()=>(console.log("connected"))).catch(err => console.log(err));

module.exports = db;