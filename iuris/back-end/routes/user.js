const Users = require('../models/user');
const Sequelize = require('sequelize');
const express = require('express');
const {Signup,Signin} = require('../controllers/users')
router = express.Router();

router.post('/',Signup);
router.post('/getUser', Signin);


module.exports = router;

