const sequelize = require("sequelize");
// const dbName = "test";
// const dbUser = "root";
// const dbPassword = "";

const db = new sequelize(dbName, dbUser, dbPassword, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});


module.exports = db;