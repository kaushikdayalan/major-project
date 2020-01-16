const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
//const expressValidator = require("express-validator");
const cors = require("cors");
const sequelize = require("Sequelize");

//config file
dotenv.config();
//starting the app
const app = express();



//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(expressValidator()); 
app.use(cors());

const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening at port: ${port}`)});
