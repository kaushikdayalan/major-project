const Sequelize = require("sequelize")
const db = require("./database")
const frontOffice = require('./frontOffice');
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

clients.associate = (models)=>{
    clients.belongsTo(models.frontOffice,{foreignKey:'clientId'});
}

module.exports = clients;