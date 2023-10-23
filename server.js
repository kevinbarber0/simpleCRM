const express = require('express');
const db = require('./config/db');
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const customerController = require('./Controllers/customerController')
const serviceController = require('./Controllers/serviceController.js')
const ticketController = require('./Controllers/ticketController.js')


const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())


app.get('/customers', customerController.getAllCustomers)
app.get('/customers/:id', customerController.getOneCustomer)
app.get('/services', serviceController.getAllServices)
app.get('/services/:id', serviceController.getOneService)
app.get('/tickets', ticketController.getAllTickets)
app.get('/tickets/:id', ticketController.getOneTicket)


app.post('/customers/', customerController.createCustomer)
app.post('/services/', serviceController.createService)
app.post('/tickets/', ticketController.createTicket)


app.put('/customers/:id', customerController.updateCustomer)
app.put('/services/:id', serviceController.updateService)
app.put('/tickets/:id', ticketController.updateTicket)


app.delete('/customers/:id', customerController.deleteCustomer)
app.delete('/services/:id', serviceController.deleteService)
app.delete('/tickets/:id', ticketController.deleteTicket)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))