'use strict'

const Models = require('../models');
const Slugify = require('slug')
const Path = require('path');

module.exports = {
    // Here we're going to include our functions
    // that will handle each request in the routes.js
    // file.

    create: async(request,reply)=>{
        let data = {Notes: []}
        console.log("This is create");
        await Models.Note.create({
            date: new Date(),
            title: request.payload.noteTitle,
            slug: Slugify(request.payload.noteTitle,{lower:true}),
            description: request.payload.noteDescription,
            content: request.payload.noteContent
        })
        .then((result)=>{
            // We're going to generate a view later, but
            //for now lets just return the result.
            data.Notes = result
            
        })

        return reply.view('note.pug',{data})
        
    },

    read: async (request,reply)=>{
        console.log("this is read");
        let data = {Notes: []}
        await Models.Note.findOne({
            where: {
                slug: request.params.slug
            }
        })
        .then((result)=>{
            data.Notes = result
            //console.log(result);
        })

        return reply.view('note',{data})

    },

    update: async (request, reply)=>{
        console.log("this is update");
        let data = {Notes: []}
        
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

        console.log("options",options.where);

        await Models.Note.update(values,options)
        .then(()=>{
            Models.Note.findOne(options)
            .then((result)=>{
                data.Notes = result
            })
        })


        return reply.view('note', {data})
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