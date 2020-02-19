const {AddFile,FileNameExists,addPendingDocs} = require('../controllers/fileStatus')
const express = require('express')

const router = express.Router()

router.post('/finalDocsAdd',AddFile);
router.post('/fileNameExists',FileNameExists);
router.post('/updatePendingDocs',addPendingDocs);
module.exports = router;