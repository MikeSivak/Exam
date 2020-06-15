const app = require('express')();
const querystring = require('querystring');
const PORT = 5000;


// app.post('/', (req,res)=>{
//     let name = req.body.name;
//     let age = req.body.age;
//     console.log('NAME: ' + name + ' | AGE: ' + age);
//     res.end('NAME: ' + name + ' | AGE: ' + age);
// })

app.post('/', (req,res)=>{
    let result = '';
    req.on('data', (data)=>{
        result+=data;
        console.log('request from client: ' + result);
    });
    req.on('end', ()=>{
        res.end(result);
    })
})

app.listen(PORT, ()=>{
    console.log(`server starting on port:${PORT}`);
})