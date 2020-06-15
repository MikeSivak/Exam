const express = require('express');
const app = express();
let mp = require('multiparty');
const PORT = 5000;

app.post('/', (req,res)=>{
    let result = '';
    let form = new mp.Form({uploadDir: './uploads'});

    form.on('field', (name, value)=>{
        console.log('NAME: ' + name);
        console.log('VALUE: ' + value);
        result += `<br/>---${name} = ${value}`;
    });

    form.on('file', (name, file) => {
        console.log(name, file);
        result += `<br/>---${name} = ${file.originalFilename} : ${file.path}`;
        form.on('close', () => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write('<h1>Form</h1>');
            res.end(result);
        })
    });

    form.on('error', (err) => {
        console.log("err = " + err);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Form/Error</h1>');
        res.end();

    });

    form.parse(req);
});

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
});