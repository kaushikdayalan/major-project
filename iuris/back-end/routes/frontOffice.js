const {addDocs} = require('../controllers/frontOffice')
const express = require('express')

const router = express.Router();

router.post("/addNewDocs",addDocs);
module.exports = router;