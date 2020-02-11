const express = require('express')
const {addClient} = require('../controllers/clients')

const router = express.Router();

router.post("/addClient",addClient);

module.exports = router; 