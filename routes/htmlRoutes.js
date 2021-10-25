//Router to declare routes
const router = require('express').Router();

//Routes to notes.html
router.get('./notes',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./public/notes.html'));
});

//Routes to index.html
router.get('*',(req,res) => {
    //tells the route to route back to the index.html file 
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});

 module.exports = router;