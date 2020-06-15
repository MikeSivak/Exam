const app = require('express')();
const PORT = 5000;

app.get('/get', (req,res)=>{
    res.send(req.method);
});
app.post('/post', (req,res)=>{
    res.send(req.method);
});
app.put('/put', (req,res)=>{
    res.send(req.method);
});
app.delete('/delete', (req,res)=>{
    res.send(req.method);
});

app.use('*', (req,res)=>{
    res.status(404);
    res.send('Error:404');
})

app.listen(PORT, ()=>{
    console.log(`server starting on port: ${PORT}`);
})