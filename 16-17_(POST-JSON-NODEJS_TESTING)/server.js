const app = require('express')();

app.post('/', (req,res)=>{
    let jsonObj = '';
    req.on('data', (data)=>{
        jsonObj+=data;
    });
    req.on('end', ()=>{
        let parse_jsonObj = JSON.parse(jsonObj);
        console.log(parse_jsonObj);
        let resToClient = {
            'name':parse_jsonObj.name,
            'age':parse_jsonObj.age
        }
        res.end(JSON.stringify(resToClient));
    })
})

app.listen(5000);