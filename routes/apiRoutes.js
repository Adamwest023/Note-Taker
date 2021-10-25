//require express 
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const uuid = require('uuid');
const validateText = require('../utils/validateText')
const db = require('../db/db.json');

//require router
const router = require('express').Router();

let notes = require('../db/db.json');

// get notes db
router.get('/notes', (req, res) => {
    res.json(notes);
});

//posting notes with a unique id 
router.post('/notes', (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }

    if (!validateText(newNote.title) && !validateText(newNote.text)) {
        return res.status(400).json("Title & Text can not be empty")
    }

    notes.push(newNote)
    fs.writeFileSync(path.resolve(__dirname, './db/db.json'), JSON.stringify(notes))

    res.status(201).json(newNote)
});

router.delete('/notes/:id',(req,res) => {
    //calling the note by id 
    const {id} = req.params;
    const noteToDelete = notes.find(notes => notes.id == id);
    
    //if no note to delete at that id 
    if(!noteToDelete) {
        return res.status(404).json('Nothing to delete');
    }

    notes = notes.filter(note => note.id !== id)
    fs.writeFileSync(path.resolve(__dirname, '../db/db.json'), JSON.stringify(notes))
    res.json("Your note has been deleted")
});

module.exports = router;