//call required npm dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001

//calls our routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname,'/public')));

app.use(express.json());
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})