const Sequelize = require('sequelize')
const db = require('./database')
const frontOffice = db.define('front_office',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    fileNo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    consultantId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'Consultants',
            key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
    fileName:{
        type:Sequelize.STRING,
        allowNull:false
    },
},{
    freezeTableName: true
});


module.exports = frontOffice;  