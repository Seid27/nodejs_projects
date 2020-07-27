'use strict'

const Models = require('../models');
const Slugify = require('slug')
const Path = require('path');
const { request } = require('http');

module.exports = {
    // Here we're going to include our functions
    // that will handle each request in the routes.js
    // file.

    create: (request,reply)=>{

        Models.Note.create({
            date: new Date(),
            title: request.payload.noteTitle,
            slug: Slugify(request.payload.noteTitle,{lower:true}),
            description: request.payload.noteDescription,
            content: request.payload.noteContent
        })
        .then((result)=>{
            // We're going to generate a view later, but
            //for now lets just return the result.
            console.log(result);
        })
        
    },

    read: (request,response)=>{
        Models.note.findOne({
            where: {
                slug: request.params.slug
            }
        })
        .then((result)=>{
            console.log(result);
        })

    },

    update: ()=>{
        const values = {
            title: request.payload.noteTitle,
            description: request.payload.noteDescription,
            content: request.payload.noteContent
        }

        const options = {
            where: {
                slug: request.params.slug
            }
        }
        Models.Note.update(values,options)
        .then(()=>{
            Models.Note.findOne(options)
            .then((result)=>{
                console.log(result);
            })
        })
    },
    delete: (request,reply)=>{
        Models.Note.destroy({
            where: {
                slug: request.parms.slug
            }
        })
        .then(()=>{
            console.log("item deleted");
            //need to redirect to home page
        })
    }
}