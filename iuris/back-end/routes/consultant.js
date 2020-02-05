const express = require('express')
const {addConsultant} = require('../controllers/consultants')

const router = express.Router();

router.post('/addc', addConsultant);

module.exports= router;