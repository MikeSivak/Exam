const app = require('express')();
const http = require('http');
const { response } = require('express');
const PORT = 4000;


http.request('http://localhost:5000?name=Mike&age=20', (res) => {
    let data = '';
    res.on('data', (chunk)=>{
        data+=chunk.toString('utf-8');
    });
    res.on('end', ()=>{
        console.log('response from server: ', data);
    });
}).on('error', (e)=>{
    console.log('Error:', e);
}).end();



app.listen(PORT, () => {
    console.log(`client starting on port:${PORT}`);
})