const Sequelize = require("sequelize")
const db = require("./database")

const clients = db.define('client_details',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    clientName:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    fileNumber:{
        type: Sequelize.STRING,
        allowNull:false, 
        unique:true
    }
});

module.exports = clients;