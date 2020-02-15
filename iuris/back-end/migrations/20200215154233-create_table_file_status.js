'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('file_status',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      finalDocument:{
        type: Sequelize.BOOLEAN,
        allowNull: false,

      },
      frontOfficeId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference:{
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
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('file_status');
  }
};
