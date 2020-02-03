const Sequelize = require('sequelize');
const Users = require('../models/users');

const Signup = async (req,res)=>{
    const userExists = await Users.findOne({
        where :{userName: req.body.userName}
    }) 
    if(userExists){
        res.status(403).json({Message: "user already exists"})
    }
    else{
        await Users.create(req.body)
        .then((user)=>{
            res.status(200).json({Message:`user created: ${user.userName}`});
        })
    }       
}

const login = (req,res)=>{
    const {userName,password} = req.body;
    Users.findOne({
        where: {userName: userName}
    })
    .then(user=>{
        console.log("user exists: ","\n user id: ", user.id, "\n username:",user.userName);
    })
}

module.exports = {Signup, login};
