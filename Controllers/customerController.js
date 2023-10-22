const Customers = require('../models/customers')
// const Model = require('../models/models')
const mongoose = require('mongoose');


const getAllCustomers = async (req,res) => {
        try {
            const customers = await Customers.find({});
            res.status(200).json(customers);
        } catch (e) {
            res.status(500).json({message: error.message})
        }
}

const getOneCustomer = async (req,res) => {
    try {
        const {id} = req.params;
        const customer = await Customers.findById(id);
        res.status(200).json(customers);
    } catch (e) {
        res.status(500).json({message: error.message})
    }
}

// async function deleteCustomer(req, res) {
//     try {
//         const id = req.params.id
//         let model = await Make.findByIdAndDelete(id).populate('make').populate('options').exec()
//         if (model) {
//             return res.status(200).json(model)
//         }
//         throw new Error("Model not found")
//     } catch (e) {
//         return res.status(500).send(e.message)
//     }
// }

// async function updateCustomer(req, res) {
//     try {
//         const id = req.params.id
//         let model = await Model.findByIdAndUpdate(id, req.body, { new: true }).populate('make').populate('options').exec()
//         if (model) {
//             return res.status(200).json(model)
//         }
//         throw new Error("Model not found")
//     } catch (e) {
//         return res.status(500).send(e.message)
//     }
// }

async function createCustomer(req, res) {
    try {
        const customer = await Customers.create(req.body)
        res.status(200).json(customer);

    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getAllCustomers,
    getOneCustomer,
    createCustomer,
    // updateCustomer,
    // deleteCustomer
}