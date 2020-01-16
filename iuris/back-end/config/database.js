const Sequelize = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()


module.exports = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD,{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});