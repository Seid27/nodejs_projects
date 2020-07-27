'use strict'
const Home = require('../lib/controllers/home');
const Note = require('../lib/controllers/note')

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
        method:'PUT',
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
    }
]   