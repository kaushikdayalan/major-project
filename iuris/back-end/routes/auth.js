const express = require('express')
const {Signup, login, requireSignin, bleh} = require('../controllers/signin') 

const router = express.Router();

router.post('/', Signup);
router.post('/login', login);
router.get('/bleh',requireSignin,bleh);

module.exports = router;

