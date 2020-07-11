'use strict';

const Fs = require('fs'); //file system module
const path = require('path');
const Sequelize = require('sequelize');
const Settings = require('../../settings');

//Database setting for the current enviroment
const dbSettings = Settings[Settings.env].db;

const sequelize = new Sequelize(dbSettings.database,dbSettings.user, dbSettings.password,dbSettings);

// console.log(sequelize);


const db = {};

Fs.readdirSync(__dirname).filter((file)=>
    (file.indexOf('.') !== 0) && (file !== 'index.js')).forEach((file)=>{
        
        const model = require(path.join(__dirname,file))(sequelize, Sequelize);
        
        db[model.name] = model;

    })

db.sequelize = sequelize;

db.Sequelize = Sequelize;

module.exports = db;