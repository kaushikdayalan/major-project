const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()


module.exports = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD,{
    host: '127.0.0.1',
    dialect: 'mysql'
})
