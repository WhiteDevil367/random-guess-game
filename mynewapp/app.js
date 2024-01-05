const express = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.send("hello started the express js");
});

app.listen(5000, ()=>{
    console.log("welcome rakesh from express");
});