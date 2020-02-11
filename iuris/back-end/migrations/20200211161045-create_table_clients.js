'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Consultants',{
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
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Consultants')
  }
};
