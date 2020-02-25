const {AddFile,FileNameExists,getDocs,addPendingDocs} = require('../controllers/fileStatus')
const express = require('express')

const router = express.Router()

router.post('/finalDocsAdd',AddFile);
router.post('/fileNameExists',FileNameExists);
router.post('/getDocs',getDocs);
router.post('/updatePendingDocs',addPendingDocs);
module.exports = router;