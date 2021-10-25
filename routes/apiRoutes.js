//require express 
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const uuid = require('uuid');

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

    if (!validText(newNote.title) && !validText(newNote.text)) {
        return res.status(400).json("Title & Text can not be empty")
    }

    notes.push(newNote)
    fs.writeFileSync(path.resolve(__dirname, '../db/db.json'), JSON.stringify(notes))

    res.status(201).json(newNote)
})

module.exports = router;