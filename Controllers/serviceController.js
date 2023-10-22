const Services = require('../models/services');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

strictPopulate: false
const getAllServices = async (req,res) => {
    try {
        const services = await Services.find({});
        res.status(200).json(services);
    } catch (e) {
        res.status(500).json({message: error.message})
    }
}

strictPopulate: false
const getOneService = async (req,res) => {
try {
    const {id} = req.params;
    const services = await Services.findById(id);
    res.status(200).json(services);
} catch (e) {
    res.status(500).json({message: error.message})
}

}

strictPopulate: false
async function deleteService(req, res) {
try {
    const id = req.params.id
    let service = await Services.findByIdAndDelete(id).populate('services').exec()
    if (service) {
        return res.status(200).json(service)
    }
    throw new Error("Service deleted")
} catch (e) {
    return res.status(500).send(e.message)
}
}


strictPopulate: false
async function updateService(req, res) {
    try {
        const id = req.params.id
        let service = await Services.findByIdAndUpdate(id, req.body, { new: true }).populate('services').exec()
        if (service) {
            return res.status(200).json(service)
        }
        throw new Error("Service updated")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

strictPopulate: false
async function createService(req, res) {
try {
    const service = await Services.create(req.body)
    res.status(200).json(service);

} catch(e) {
    console.log(e.message);
    res.status(500).json({message: e.message})
}
}


module.exports = {
getAllServices,
getOneService,
createService,
updateService,
deleteService
}