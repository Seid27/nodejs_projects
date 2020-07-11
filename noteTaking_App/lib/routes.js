'use strict'

module.exports = [
    {
        method:'GET',
        path:'/',
        handler: (req,res)=>{
            return 'all the notes will appear here'
        },
        config:{
            description: 'gets all notes available'
        }
    },
    {
        method: 'POST',
        path:'/note',
        handler: (req,res)=>{
            return 'New note'

        },
        config:{
            description: 'Adds a new note'
        }
    },

    {
        method: 'GET',
        path: '/note/{slug}',
        handler: (req,res)=>{
            return 'This is a note'

        },
        config: {
            description: 'Gets a content of a note'
        }
    },
    {
        method:'PUT',
        path:'/note/{slug}',
        handler: (req,res)=>{
            return 'Edit a note'
        },
        config: {
            description: 'Updates a selected note'
        }
    },
    {
        method:'GET',
        path:'/note/{slug}/delete',
        handler: ()=>{
            return 'This note no longer exists'
        },
        config: {
            description: 'Deletes the selected note'
        }
    }
]