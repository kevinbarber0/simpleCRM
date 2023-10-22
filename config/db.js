const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose
.connect('mongodb+srv://admin:0000@cluster0.4bkeksa.mongodb.net/')
.then(() => {
    console.log('successfully connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000')
});

}).catch((e) => {
    console.log(e)
})
const db = mongoose.connection
module.exports = db