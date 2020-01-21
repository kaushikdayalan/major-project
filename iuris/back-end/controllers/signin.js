const Sequelize = require('sequelize');
const Users = require('../models/users');

const Signup = async (req,res)=>{
    user = new Users(req.body);
    if(user){
        console.log("creating users", user.dataValues);
    }  
    await Users.create(req.body)
    .then((user)=>{
        console.log("this is user: ",user.get({
            plain:true
        }))
        res.status(200).json({Message: "user succesfully added"});
    })
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
