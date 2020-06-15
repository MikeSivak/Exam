var http = require('http');
let fs = require('fs');

let bound = "mike20-mike20-mike20";
let body = `--${bound}\r\n`;
body += 'Content-Disposition:form-data; name="file"; filename="file.txt"\r\n';
body += 'Content-Type:text/plain\r\n\r\n';
body += 'Hello\nMy name is Mike\n\nI am 22 years old; \n data from file.txt: '
body += fs.readFileSync('./file.txt') // data from file
body += `\r\n--${bound}--\r\n`;

// let body = fs.readFileSync('./file.txt');
// let bound = "mike20-mike20-mike20";
let options = {
    host: 'localhost',
    path: '/',
    port: 5000,
    method: 'POST',
    headers: {
        'content-type': 'multipart/form-data; boundary=' + bound
    }
}

const req = http.request(options, (res)=>{
    let data = '';
    res.on('data', (chunk)=>{
        console.log('request body: ', data+=chunk.toString('utf-8'));
    });
    res.on('end', ()=>{
        console.log('response from server: ', data);
    });
});

req.on('error', (e) => {
    console.log('http.request: error: ', e.message);
})

req.end(body);