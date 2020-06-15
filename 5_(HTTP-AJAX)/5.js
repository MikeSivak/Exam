const app = require('express')();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + `/client.html`);
});

app.post('/send', (req,res)=>{
    res.json(req.body);
});


app.listen(PORT, ()=>{
    console.log(`server starting on port: ${PORT}`);
});