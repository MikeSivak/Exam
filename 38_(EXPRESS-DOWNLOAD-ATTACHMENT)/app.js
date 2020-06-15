const app = require('express')();
PORT = 5000;

app.get('/', (req,res)=>{
    res.download('./public/file.txt');
    console.log('file downloaded successfully!');
});

app.listen(PORT);