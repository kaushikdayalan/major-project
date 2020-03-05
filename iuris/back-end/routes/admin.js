const {UpdateRejected, UpdateDocumentIn, UpdateDocumentOut, deleteDoc} = require('../controllers/admin')
const express = require('express')

const router = express.Router()

router.post('/updateRejected',UpdateRejected)
router.post('/updateDocumentIn',UpdateDocumentIn)
router.post('/UpdateDocumentOut',UpdateDocumentOut)
router.delete('/deleteDoc',deleteDoc)
module.exports = router;