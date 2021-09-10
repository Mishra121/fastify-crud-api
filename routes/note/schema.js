const notesSchema = {
    type: 'object',
    required: ['id', 'title', 'body'],
    properties: {
        id: { type: 'number', description: 'Unique identifier for note' },
        title: { type: 'string' },
        body: { type: 'string' }
    }
}

module.exports = {
    notesSchema,
}