const express = require('express')
const {addConsultant,findConsultant} = require('../controllers/consultants')

const router = express.Router();

router.post('/addConsultant', addConsultant);
router.get('/findConsultant', findConsultant);

module.exports= router; 