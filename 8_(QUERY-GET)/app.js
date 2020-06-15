const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    res.send('name: ' + name + ' | age: ' + age);
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
})