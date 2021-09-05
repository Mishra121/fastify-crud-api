'use strict'

module.exports = async function (fastify, opts, next) {
  
    fastify.route({
        method: 'GET',
        url: '/health',
        schema: {
            tags: ['Healthcheck'],
            description: 'point to check service up and running',
            response: {
                200: {
                    type: 'object',
                    properties: {
                        status: {type: 'string'},
                        timestamp: { type: 'string', format: 'date-time' }
                    }
                }
            }
        },
        handler: async (request, reply) => {
            return { status: 'ok', timestamp: new Date().toISOString() };
        }
    })

    next();
}
