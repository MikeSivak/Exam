const express = require('express');
// const { get } = require('http');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req,res)=>{
    let name = req.body.name;
    let age = req.body.age;
    res.send('name: ' + name + ' | age: ' + age);
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
})