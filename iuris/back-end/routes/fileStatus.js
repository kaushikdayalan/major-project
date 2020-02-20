const {AddFile,FileNameExists,updateDocs,addPendingDocs} = require('../controllers/fileStatus')
const express = require('express')

const router = express.Router()

router.post('/finalDocsAdd',AddFile);
router.post('/fileNameExists',FileNameExists);
router.post('/updateDocs',updateDocs);
router.post('/updatePendingDocs',addPendingDocs);
module.exports = router;