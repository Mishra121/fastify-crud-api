const fp = require('fastify-plugin');
const pgp = require('pg-promise')();
const DbMigrate = require('db-migrate');

const appConfig = require('../config/appConfig');

function runMigrations() {
    return new Promise((resolve, reject) => {
        const dbMigrate = DbMigrate.getInstance(true)
        dbMigrate.silence(true)

        dbMigrate.up((error, results = []) => {
           if(error) {
               return reject(error)
           } 

           resolve(results);
        })
    })
}

module.exports = fp(function (fastify, opts, next) {
    const db = pgp(appConfig.postgresUri);

    fastify.decorate('db', db);

    runMigrations().then(migrationResults => {
        if(migrationResults.length > 0){
            fastify.log.info({ migrationCount: migrationResults.length, msg: 'Successful migrations run' })
        }

        console.log('finished migrations')
    })

    next()
})