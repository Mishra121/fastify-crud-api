const NotesDAL = (db) => {
    const createNote = async (title, body) => {
        const { id } = await db.one(
            `INSERT INTO notes (title, body) VALUES ($1, $2) RETURNING id`, 
            [title, body]
        )

        return { id, title, body };
    }

    const getNotes = () => {
        return db.manyOrNone('SELECT id, title, body FROM notes')
    }

    return { createNote, getNotes };
}


module.exports = NotesDAL;