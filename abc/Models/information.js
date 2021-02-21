const sequelize = require("sequelize");
const db = require("../DatabaseConnect/connect");
const tbName = "information";
const tbColumn = {
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,        
    },
    userCreate:{
        type:sequelize.STRING,
        field:"user_create",
    },
    name:{
        type: sequelize.STRING,
    },
    email:{
        type: sequelize.STRING,
    },
    phone:{
        type: sequelize.STRING,
    },
    address:{
        type: sequelize.STRING,
    },
    timeCreate:{
        type:sequelize.DATE,
        defaultValue: sequelize.NOW,
        field:"time_create",
    }
};


const information = db.define(tbName, tbColumn, {freezeTableName: true, timestamps: false});

module.exports = information;