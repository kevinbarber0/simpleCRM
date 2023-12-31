const mongoose = require('mongoose')
const{Schema} = require('mongoose')

const serviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, "Please enter a service"]
        },

        description: {
            type: String,
            required:false,
        },

        price: {
            type: String,
            required:false,
        },

        started: {
            type: String,
            required: false,
            default: 0
        },

        annualValue: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;