var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.txt");

let options = {
    host: 'localhost',
    path: '/',
    port: 5000,
    method: 'GET'
}

var req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        console.log('http.request: data: body = ', data += chunk);
    });
    res.on('end', () => {
        console.log('http.request: end: body = ', data);
    })
    res.pipe(file);
});

req.on('error', (e) => {
    console.log("http.request: error: ", e.message);
});
req.end();