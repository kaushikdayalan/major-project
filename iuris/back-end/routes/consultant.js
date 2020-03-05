const express = require('express')
const {addConsultant,findConsultant,findConsultantByName,deleteConsultant} = require('../controllers/consultants')

const router = express.Router();

router.post('/addConsultant', addConsultant);
router.get('/findConsultant', findConsultant);
router.post('/findConsultantByName',findConsultantByName);
router.delete('/deleteConsultant', deleteConsultant);

module.exports= router; 