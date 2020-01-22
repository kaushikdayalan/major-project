const Users = require('../models/user');
const Sequelize = require('sequelize');

const Signup = (req,res)=>{
    user = new Users(req.body);
    if(user){
    console.log("user data: ", user.dataValues);}
    Users.create(req.body)
    .then((user)=>{
        console.log(user);
        res.status(200).json({Message:"user sucessfully created bro !!!!!"})
    })
}

const Signin = (req,res)=>{
    const {userName, password} = req.body;
    Users.findOne({
        where: {userName: userName}
    })
    .then((user)=>{
        console.log("userid: ",user.id, "\n username: ",user.userName,"\n password",user.password);
        res.status(200).json({Message: "he lives"});
    })
    .catch(somethingworng=>{
        res.status(400).json({Error: "you suck at programming"})
    })
}

module.exports = {Signup, Signin}