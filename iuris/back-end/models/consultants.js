const Sequelize = require('sequelize');
const db = require('./database');

const Consultants = db.define('Consultants',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    consultantName:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    
    }
});



module.exports = Consultants;