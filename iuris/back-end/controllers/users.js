const Users = require('../models/user');
const Sequelize = require('sequelize')

const Signup = (req,res)=>{
    user = new User(req.body);
    console.log("user data: ", user);
}