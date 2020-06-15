const app = require('express')();
const PORT = 5000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req,res)=>{
    const file = `${__dirname}/uploads/file.txt`;
    res.download(file);
})

app.listen(PORT, ()=>{
    console.log(`server starting on port:${PORT}`);
})