const Sequelize = require('sequelize');
const db = require('./database');

const Users = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userName:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
});
    
module.exports = Users;