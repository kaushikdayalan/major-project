const Sequelize = require('sequelize')
const db = require('./database')

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

module.exports = fileStatus;
