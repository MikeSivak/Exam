const { static } = require('express');

const express = require('express');
const app = express();
const PORT = 5000;

//serving static files in Express
app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
})