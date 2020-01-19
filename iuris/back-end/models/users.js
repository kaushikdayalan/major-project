const Sequelize = require('sequelize');
const db = require('./database');

const Users = db.define('Users',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Users;