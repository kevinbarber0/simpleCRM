const e = require('express');
const express = require('express')
const mongoose = require('mongoose');
const app = express()



//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Kevin')
})



mongoose.set('strictQuery', false)
mongoose.
connect('mongodb+srv://admin:0000@cluster0.4bkeksa.mongodb.net/')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000')
});

}).catch((e) => {
    console.log(e)
})