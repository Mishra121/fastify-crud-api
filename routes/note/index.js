'use strict'

module.exports = async function (fastify, opts) {

    fastify.route({
        method: 'GET',
        url: '/',
        schema: {
            tags: ['Notes'],
            description: 'Get all notes',
            response: {
                200: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', description: 'Unique identifier for note' },
                            title: { type: 'string' },
                            body: { type: 'string' }
                        }
                        
                    }
                }
            }
        },
        handler: async (request, reply) => {
            return [];
        }
    })

    fastify.route({
        method: 'POST',
        url: '/',
        schema: {
            tags: ['Notes'],
            description: 'Creat a note',
            body: {
                type: 'object',
                required: ['title', 'body'],
                properties: {
                    title: { type: 'string' },
                    body: { type: 'string' }
                }
            },
            response: {
                200: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', description: 'Unique identifier for note' },
                            title: { type: 'string' },
                            body: { type: 'string' }
                        }
                }
            }
        },
        handler: async (request, reply) => {
            return [];
        }
    })

    fastify.route({
        method: 'PUT',
        url: '/:id',
        schema: {
            tags: ['Notes'],
            description: 'update a note',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'number' }
                }
            },
            body: {
                type: 'object',
                required: ['title', 'body'],
                properties: {
                    title: { type: 'string' },
                    body: { type: 'string' }
                }
            },
            response: {
                200: {
                        type: 'object',
                        properties: {
                            id: { type: 'number', description: 'Unique identifier for note' },
                            title: { type: 'string' },
                            body: { type: 'string' }
                        }
                }
            }
        },
        handler: async (request, reply) => {
            return [];
        }
    })

    fastify.route({
        method: 'DELETE',
        url: '/:id',
        schema: {
            tags: ['Notes'],
            description: 'Delete a note',
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'number' }
                }
            },
            response: {
                204: {
                    type: 'string',
                    default: 'No content'
                }
            }
        },
        handler: async (request, reply) => {
            return;
        }
    })
}
