const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const expressValidator = require("express-validator");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//config file
dotenv.config();
//starting the app
const app = express();

const authorizationError = function(err,req,res,next){
    console.log(err.name);
    if(err.name === 'UnauthorizedError'){
       return res.status(401).json({error:"Unauthorized"});
    }
}

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());
app.use(cookieParser());

const port =  process.env.PORT || 3000;m

app.listen(port, ()=>{console.log(`Listening at port: ${port}`)});

