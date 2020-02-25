const {UpdateRejected, UpdateDocumentIn, UpdateDocumentOut} = require('../controllers/admin')
const express = require('express')

const router = express.Router()

router.post('/updateRejected',UpdateRejected)
router.post('/updateDocumentIn',UpdateDocumentIn)
router.post('/UpdateDocumentOut',UpdateDocumentOut)

module.exports = router;