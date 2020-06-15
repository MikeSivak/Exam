const express = require('express');
const app = express();
const upload = require('express-fileupload');
const PORT = 5000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.use(upload());

app.post('/', (req,res)=>{
    if(req.files){
        // console.log(req.files);
        var file = req.files.file;
        var filename = file.name;

        file.mv(__dirname + '/uploads/' + filename, (err)=>{
            if(err){
                console.log(`Error:${err}`);
                res.send(`Error:${err}`);
            }
            else{
                res.send(`File (${filename}) uploaded successfully :)`);
            }
        })
    }
});

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
});