'use strict';

const Path = require('path')
const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings')
const routes = require('./lib/routes')
const Models = require('./lib/models/')

const server = new Hapi.server({
    host: 'localhost',
    port: Settings.port
});

const register = async function () {
    await server.register([require('vision'),require('inert')])
};
const start = async function(){
    await server.start();
    console.log('Server running at: ', server.info.uri)
}

// ====================================================
// , (err)=>{
//     Hoek.assert(!err,err);
//     server.views({
//         engines: {pug :require('pug')},
//         path: Path.join(__dirname,'lib/views'),
//         compileOptions: {
//             pretty: false
//         },

//         isCached: settings.env === 'production'
//     });
        
//     //add routes
//     server.route(routes); //returns a list of objects for route options

//     Models.sequelize.sync()
//     .then(() => {
//         server.start((err) => {
//             Hoek.assert(!err, err);
//             console.log(`Server running at:${server.info.uri}`);
//         });
//     })
// ====================================================
// const start = async()=>{
//     const server = new Hapi.Server({
//         port: settings.port
//     });

//     await server.register({
//         plugin: require('vision'),
//         option:{
//             name: "vision"
//         }
//         },(err)=>{
//         Hoek.assert(!err,err);
//     });

//     Models.sequelize.sync()
//     .then(() => {
//         server.start((err) => {
//             Hoek.assert(!err, err);
//             console.log(`Server running at:${server.info.uri}`);
//         });
//     })
// }

register()
.then(()=>{
    server.views({
        engines: {pug :require('pug')},
        path: Path.join(__dirname,'lib/views/components'),
        compileOptions: {
            pretty: false
        },
        isCached: Settings.env === 'production'
    });

    //add routes
    server.route(routes); //returns a list of objects for route options

    Models.sequelize.sync()
    .then(()=>{
        start()
        .catch((err)=>{
            console.log(err.message);
        })
    })
    

    // Models.sequelize.sync()
    // .then(() => {
    //     server.start((err) => {
    //         Hoek.assert(!err, err);
    //         console.log(`Server running at:${server.info}`);
    //     });
    // })
})
.catch((err)=>{
    console.log(err.message);
})

//===================
// server.register([Vision.plugin])
// server.register(require('vision')
//     , (err)=>{
//     Hoek.assert(!err,err);
//     //view settings
//     server.views({
//         engines: {pug :require('pug')},
//         path: Path.join(__dirname,'lib/views'),
//         compileOptions: {
//             pretty: false
//         },
//         isCached: settings.env === 'production'
//     });

//     //add routes
//     server.route(routes); //returns a list of objects for route options

// });

// console.log(Models);

