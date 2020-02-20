const Sequelize = require('sequelize')
const db = require('./database')
const frontOffice = require('../models/frontOffice')
const fileStatus = db.define('file_status',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    finalDocument:{
        type: Sequelize.STRING,
        allowNull: false
    },
    frontOfficeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: 'front_office',
            key: 'id'
        }
    },
    rejected:{
        type: Sequelize.BOOLEAN,
        allowNull:true
    },
    DocumentsIn:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    DocumentsOut:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
},  
    {
        freezeTableName: true
    });

frontOffice.hasMany(fileStatus);

module.exports = fileStatus;