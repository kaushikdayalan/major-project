const {addDocs,updateDocs} = require('../controllers/frontOffice')
const express = require('express')

const router = express.Router();

router.post("/addNewDocs",addDocs);
router.post("/updateDocs",updateDocs);
module.exports = router;