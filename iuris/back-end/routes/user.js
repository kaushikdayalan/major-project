const Users = require('../models/user');
const Sequelize = require('sequelize');
const express = require('express');

router = express.Router();

router.get('/get',(req,res)=>{
    res.send({userName:'solomon', password:'password'})});

module.exports = router;

