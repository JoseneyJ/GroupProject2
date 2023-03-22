const express = require(‘express’);


//setup a basic route for our API 


app.get(‘api’, (req, res) => {
res.send(‘hello world’);

});

// to handle the post requests
app.post(‘api’, (req, res) => {

res.send(‘POST request received’);
