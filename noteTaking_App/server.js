'use strict';

const Hapi = require('hapi');
const hoek = require('hoek');
const settings = require('./settings')
const routes = require('./lib/routes')
const Models = require('./lib/models/')

const server = new Hapi.Server({
    port: settings.port
});

server.route(routes);

// console.log(Models);

Models.sequelize.sync()
.then(() => {
    server.start((err) => {
        Hoek.assert(!err, err);
        console.log(`Server running at:${server.info.uri}`);
    });
})