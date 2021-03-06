'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('front_office',{
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
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })
},

down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('front_office')
}
};
