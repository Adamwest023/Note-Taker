//call required npm dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001


//create routes
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
}) 


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})