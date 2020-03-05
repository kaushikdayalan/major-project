const {UpdateRejected, UpdateDocumentIn, UpdateDocumentOut, deleteDoc, approveDocument} = require('../controllers/admin')
const express = require('express')

const router = express.Router()

router.post('/updateRejected',UpdateRejected)
router.post('/updateDocumentIn',UpdateDocumentIn)
router.post('/UpdateDocumentOut',UpdateDocumentOut)
router.delete('/deleteDoc',deleteDoc)
router.post('/approveDocument',approveDocument)
module.exports = router;