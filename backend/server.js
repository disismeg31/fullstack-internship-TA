const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const CONSTANTS = require('./shared/constants.js');
// connectdb line after cluster creations and adding to env
const app = express();
const port = process.env.PORT || 4000;

// connectfunction
app.use(express.json());
app.use(cors());

// indexrouter require and use('',indexRouter)

app.listen(port,()=>{console.log(`Express app listening on PORT:${port}`)})