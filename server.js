const express =require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const routes = require("./routes");



const app = express();
//------------------------------------------
//body parser middleware.

app.use(bodyParser.json());

// const db = require('./config/key').mongoURI;

//connect to mongo
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/carParts"
  );
//--------------------------------------------

//use routes

app.use(routes);

//----------------------------------------------------
const port = process.env.PORT||5000;
app.listen(port, () => console.log (`Server start on  ${port}`));