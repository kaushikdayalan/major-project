const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
//const expressValidator = require("express-validator");
const cors = require("cors");
const db = require('./models/database');

//config file
dotenv.config();
//starting the app
const app = express();

db.authenticate()
.then(()=>{
    console.log("Connection established successfully");
})
.catch(err=>{
    console.log('unable to connect. \n error: '+err);
})

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(expressValidator()); 
app.use(cors());

const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening at port: ${port}`)});
