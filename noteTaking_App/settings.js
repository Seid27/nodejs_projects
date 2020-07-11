const dotenv = require('dotenv');

dotenv.config({silent:true});

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development',
    
    //enviroment-dependent setting
    development: {
        db: {
            dialect: 'sqlite',
            storage: 'memory'
        }
    },

    production: {
        db: {
            dialect: 'sqlite',
            storage: 'db/database.sqlite'
        }
    }
}