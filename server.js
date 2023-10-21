const e = require('express');
const express = require('express')
const mongoose = require('mongoose');
const Customer =require('./models/customerModel')
const app = express()


app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Kevin')
})

// app.post('/customer', (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })

app.post('/customer', async(req, res) => {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer);

    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: e.message})
    }
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