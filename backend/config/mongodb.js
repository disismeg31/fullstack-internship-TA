const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants.js');

const connectToDB = async ()=>{
    try{
        console.log("Connecting to mongoDB")
        mongoose.connection.on('connected',()=>console.log('.....Connection Created.....'))
        await mongoose.connect(`${process.env.MONGODB_URI}/${CONSTANTS.mongoDBNName}`)
    }
    catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); 
  }
}


module.exports = connectToDB;