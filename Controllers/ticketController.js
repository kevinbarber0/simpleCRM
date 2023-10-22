const Tickets = require('../models/tickets');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

strictPopulate: false
const getAllTickets = async (req,res) => {
    try {
        const tickets = await Tickets.find({});
        res.status(200).json(tickets);
    } catch (e) {
        res.status(500).json({message: error.message})
    }
}

strictPopulate: false
const getOneTicket = async (req,res) => {
try {
    const {id} = req.params;
    const tickets = await Tickets.findById(id);
    res.status(200).json(tickets);
} catch (e) {
    res.status(500).json({message: error.message})
}

}

strictPopulate: false
async function deleteTicket(req, res) {
try {
    const id = req.params.id
    let ticket = await Tickets.findByIdAndDelete(id).populate('tickets').exec()
    if (ticket) {
        return res.status(200).json(ticket)
    }
    throw new Error("Ticket deleted")
} catch (e) {
    return res.status(500).send(e.message)
}
}


strictPopulate: false
async function updateTicket(req, res) {
    try {
        const id = req.params.id
        let ticket = await Tickets.findByIdAndUpdate(id, req.body, { new: true }).populate('tickets').exec()
        if (ticket) {
            return res.status(200).json(ticket)
        }
        throw new Error("Ticket updated")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

strictPopulate: false
async function createTicket(req, res) {
try {
    const ticket = await Tickets.create(req.body)
    res.status(200).json(ticket);

} catch(e) {
    console.log(e.message);
    res.status(500).json({message: e.message})
}
}


module.exports = {
getAllTickets,
getOneTicket,
createTicket,
updateTicket,
deleteTicket
}