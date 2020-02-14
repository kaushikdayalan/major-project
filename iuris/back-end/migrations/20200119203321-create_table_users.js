'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
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
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('Users')
}
};
