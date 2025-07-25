const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const CONSTANTS = require('./shared/constants.js');
const connectToDB = require('./config/mongodb.js');
const app = express();
const port = process.env.PORT || 4000;

connectToDB()

app.use(express.json());
app.use(cors());

app.use('/public',express.static('public'))

let indexRouter = require('./routes/index.routes.js');

app.use('',indexRouter);


app.listen(port,()=>{console.log(`Express app listening on PORT:${port}`)})