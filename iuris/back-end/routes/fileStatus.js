const {AddFile, addPendingDocs} = require('../controllers/fileStatus')
const express = require('express')

const router = express.Router()

router.post('/finalDocsAdd',AddFile);
router.post('/updatePendingDocs',addPendingDocs);
module.exports = router;