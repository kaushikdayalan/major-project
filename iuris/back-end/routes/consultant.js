const express = require('express')
const {addConsultant,findConsultant} = require('../controllers/consultants')

const router = express.Router();

router.post('/addc', addConsultant);
router.get('/findc', findConsultant);

module.exports= router;