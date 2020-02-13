const express = require('express')
const {Signup, login, requireSignin, signOut} = require('../controllers/signin') 

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', login);

router.get('/signout', signOut);

module.exports = router;

