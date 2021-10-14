const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid')
const { notes } = require("../../db/db.json");


function createNewNote(body, notesArray) {
    const newNote = body;
    const noteId = uuidv4()
    newNote.id = noteId;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return newNote;
}

function updateNotes(notesArray) {
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    console.log("File updated");
    return;
}


router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    const deleteId = req.params.id;
    // console.log(deleteId);
    // console.log('-----------------');
    // console.log('notes list before entering filter.');
    // console.log(notes);
    // console.log('-----------------');
    var updatedArray = notes.filter(element => element.id !== deleteId );
    updateNotes(updatedArray);
    return;
    // res.json(updatedArray);
});

module.exports = router;