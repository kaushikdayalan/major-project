const express = require('express')
const {Signup, login} = require('../controllers/signin') 

const router = express.Router();

router.post('/', Signup);
router.post('/login', login);
module.exports = router;

