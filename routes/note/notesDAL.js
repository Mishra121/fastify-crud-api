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

    const updateNotes = async (noteId, title, body) => {
        const { id } = await  db.one(
            `UPDATE notes SET title = $1, body = $2 WHERE id = $3 RETURNING id`,
            [title, body, noteId]
        );

        return { id, title, body };
    }

    const deleteNote = (id) => {
        return db.query(`DELETE FROM notes WHERE id = $1`, [id]);
    }

    return { createNote, getNotes, updateNotes, deleteNote };
}


module.exports = NotesDAL;