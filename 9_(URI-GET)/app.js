const express = require('express');
const app = express();
const PORT = 5000;

app.get('/:name/:age', (req,res)=>{
    let name = req.params['name'];
    let age = req.params['age'];
    res.send('name: ' + name + ' | age: ' + age);
});

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
})