//require express 
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

//require router
const router = require('express').Router();

let notes = require('..db/db.json');

// get notes db
router.get('/notes', (req,res) => {
    res.json(notes);
});

router.post('./notes', (req,res) => {
    req.notes = notes.length.toString();
});

module.exports = router;