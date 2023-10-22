const express = require('express');
const db = require('./config/db');
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const customerController = require('./Controllers/customerController')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

//cRud - Read
app.get('/customers', customerController.getAllCustomers)
app.get('/customers/:id', customerController.getOneCustomer)

//Crud - Create
app.post('/customers/', customerController.createCustomer)

//crUd - Update
// app.put('/customers/:id', customerController.updateCustomer)

//cruD - Delete
// app.delete('/customers/:id', customerController.deleteCustomer)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))