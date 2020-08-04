'use strict'
const Home = require('../lib/controllers/home');
const Note = require('../lib/controllers/note');
const Path = require('path');

module.exports = [


    {
        method:'GET',
        path:'/',
        handler: Home,
        config:{
            description: 'gets all notes available'
        }
    },
    {
        method: 'POST',
        path:'/note',
        handler: Note.create,
        config:{
            description: 'Adds a new note'
        }
    },

    {
        method: 'GET',
        path: '/note/{slug}',
        handler: Note.read,
        config: {
            description: 'Gets a content of a note'
        }
    },
    {
        method:'POST',
        path:'/note/{slug}',
        handler: Note.update,
        config: {
            description: 'Updates a selected note'
        }
    },
    {
        method:'GET',
        path:'/note/{slug}/delete',
        handler: ()=>Note.delete,
        config: {
            description: 'Deletes the selected note'
        }
    },


    {
        // Static files
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname,'../static/public')
            }
        },
        
        config: {
            description: 'Provides static resources'
        }
    }
]   