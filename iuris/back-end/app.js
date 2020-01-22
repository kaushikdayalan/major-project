const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
//const expressValidator = require("express-validator");
const cors = require("cors");
const dbConnection = require('./models/database')

//config file
dotenv.config();
//starting the app
const app = express();

//database connection
dbConnection.authenticate()
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

//routes
const userRoutes = require('./routes/user');
app.use('/',userRoutes);


const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening at port: ${port}`)});

