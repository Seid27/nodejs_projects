'use strict';

const models = require('../models/index.js')

module.exports = (request, reply)=>{
    let data = {name: "seid"};
    models.Note.findAll({
        order:[['date','DESC']]
    })
    .then((result)=>{

        data[result] =  result;

    })
    .catch((error)=>{
        data[error] = error;
    })

    return reply.view('home.pug',{data});
}
