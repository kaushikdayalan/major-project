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

//import routes 
const auth_routes = require('./routes/auth')
const consultant_routes = require('./routes/consultant')
const client_routes = require('./routes/client')
const frontOffice_routes = require('./routes/frontOffice')
const fileStatus_routes = require('./routes/fileStatus')
const updateRejected_routes = require('./routes/admin')
// implement routes
app.use('/',auth_routes);
app.use('/',consultant_routes);
app.use('/',client_routes);
app.use('/',frontOffice_routes);
app.use('/',fileStatus_routes);
app.use('/',updateRejected_routes);
app.use(authorizationError);

// Starting the server

const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening at port: ${port}`)});

