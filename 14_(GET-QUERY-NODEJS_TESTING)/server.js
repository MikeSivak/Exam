const app = require('express')();
const PORT = 5000;

app.get('/', (req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    console.log('NAME: ' + name + ' | AGE: ' + age);
    res.end('NAME: ' + name + ' | AGE: ' + age);
})

app.listen(PORT, ()=>{
    console.log(`server starting on port:${PORT}`);
})