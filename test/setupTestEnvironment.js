const fastify = require('fastify')
const fp = require('fastify-plugin')
const app = require('../app');

const clearDatabaseSql = 'DELETE FROM notes;'

module.exports = function setupTestEnvironment() {
    // setup env variable
    process.env.POSTGRES_DB = "postgres://notes_admin:localhost@localhost:5432/notes_db_test"
    // setup fastify server
    const server = fastify({
        logger: {
            level: process.env.LOG_LEVEL || 'silent'
        },
        pluginTimeout: 2 * 60 * 1000
    });

    // setup test lifecycle hook
    beforeAll(async () => {
        server.register(fp(app))
        await server.ready();
        await server.db.query(clearDatabaseSql);
    })

    beforeEach(async () => {
        await server.db.query(clearDatabaseSql);        
    })

    afterEach(async () => {
        await server.db.query(clearDatabaseSql);        
    })

    afterAll(async () => {
        await server.close()
    })
 
    // return our fastify server
    return server;
}