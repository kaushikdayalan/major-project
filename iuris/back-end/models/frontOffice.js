const Sequelize = require('sequelize')
const db = require('./database')
const frontOffice = db.define('front_office',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    clientId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'client_details',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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

frontOffice.associate = (models)=>{
    frontOffice.hasMany(models.clients,{foreignKey:'clientId'});
}


module.exports = frontOffice;  