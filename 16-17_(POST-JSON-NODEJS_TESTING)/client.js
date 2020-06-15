const http = require('http');

let json_message = JSON.stringify({
    'name':'Mike',
    'age':20
});

let options = {
    host:'localhost',
    path:'/',
    port:5000,
    method:'POST',
    headers:{
        'content-type':'application/json',
        'accept':'application/json'
    }
}

const req = http.request(options, (res)=>{
    let data = '';
    res.on('data', (chunk)=>{
        console.log('reqest body: ', data += chunk.toString('utf-8'));
    });
    res.on('end', ()=>{
        console.log('parse(body): ', JSON.parse(data));
    });
});

req.end(json_message);