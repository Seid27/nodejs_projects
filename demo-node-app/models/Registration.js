
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    // trim remove any superfluous white space from user input
    name: {
        type:String,
        trim: true
    },

    email: {
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('Registration', registrationSchema);

//create the database again
//add the schema and data to the database
//access all the data from the database
//rende all data from the database