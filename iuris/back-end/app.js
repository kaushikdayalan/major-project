const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");


// database
const db = require('./models/database')

//config file
dotenv.config();
//starting the app
const app = express();

const authorizationError = function(err,req,res,next){
    console.log(err.name);
    if(err.name === 'UnauthorizedError'){
        return res.status(401).json({error:"Unauthorized"});
    }
    next
}

db.authenticate()

.then(()=>{
    console.log("Connection established");
})
.catch(err=>{
    console.log("error"+err);
})

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(expressValidator()); 
app.use(cors());
app.use(cookieParser());

//routes 
const auth = require('./routes/auth')
const consultant = require('./routes/consultant')
app.use('/',auth);
app.use('/',consultant);

app.use(authorizationError);

// Starting the server

const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening at port: ${port}`)});

