'use strict';

const models = require('../models/index.js')

module.exports = async (request, reply)=>{
    let data = {Notes: []};
    let name = "seid"
    await models.Note.findAll({
        order:[['date','DESC']]
    })
    .then((result)=>{
        data.Notes =  result;

       // console.log(result);

    })
    .catch((error)=>{
        // return reply.view('home.pug',{data});
        // data[error] = error;
    })

    // console.log("This is result", data.Notes);
    return reply.view('home.pug',{data});
}
