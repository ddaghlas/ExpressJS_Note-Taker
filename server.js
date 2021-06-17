// Requiring fs module
const fs = require('fs');
// Requiring path for the HTML files
const path = require('path');
// Requiring uuid to generate a unique id for each note
const { v4: uuidv4 } = require('uuid');
uuidv4(); 

// Requiring Express 
const express = require('express');
const app = express();

// Port to link for Heroku deployment and/or localhost: 8080
const PORT = process.env.PORT || 8080;

// Where all notes will be stored -- empty array for data
const allNotes = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET request for all notes
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

// GET request for home page 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET request for notes.html -- joining API paths
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET request for default page (home page) -- '*' = default page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Creating a new note and adding it to the body of the HTML and the array of notes
function createNewNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote; // returning the new note as a JSON object
}

// POST new notes to the note API as a JSON object
app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

// Deletes note from the array using its unique id
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}

// Calls for the API to delete the note using the unique id attached to it using uuid
app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});

// PORT listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});