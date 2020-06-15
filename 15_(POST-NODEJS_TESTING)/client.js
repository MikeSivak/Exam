const app = require('express')();
const http = require('http');
const querystring= require('querystring');
const PORT = 4000;
let params = querystring.stringify({name:'Mike', age:20});

const options ={
    host: 'localhost',
    path: '/',
    port: 5000,
    method: 'POST'
}

const req = http.request(options, (res) => {
    let data = '';
    console.log('PARAMS: ' + params);
    res.on('data', (chunk)=>{
        console.log("response body: ", data+=chunk.toString('utf-8'));
    });
    res.on('end', ()=>{
        let out = querystring.parse(data);
        console.log('response from server (body): ', 'NAME: ' + out.name + ' | AGE: ' + out.age);
    });
})

req.on('error', (e)=>{
    console.log('Error:', e)
});

req.write(params);

req.end();

app.listen(PORT, () => {
    console.log(`client starting on port:${PORT}`);
})