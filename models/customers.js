const mongoose = require('mongoose')
const{Schema} = require('mongoose')

const customerSchema = mongoose.Schema(
    {
        

        name: {
            type: String,
            required:[true, "Please enter a customer name"]
        },

        email: {
            type: String,
            required:false,
        },

        phone: {
            type: String,
            required:false,
        },

        activated: {
            type: String,
            required: false,
            default: 0
        },

        subs: {
            type: Number,
            required: false,
        },

        tickets: {
            type: Number,
            required: false,
        },

        ticket:{type: Schema.Types.ObjectId, ref: 'tickets', required: false} ,
    },
    
    {
        timestamps: true,
    }
)

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;