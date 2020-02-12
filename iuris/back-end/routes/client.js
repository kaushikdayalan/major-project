const express = require('express')
const {addClient,findClient} = require('../controllers/clients')

const router = express.Router();

router.post("/addClient",addClient);

router.post("/findClient",findClient)

module.exports = router; 