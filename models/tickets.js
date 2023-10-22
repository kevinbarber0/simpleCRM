const mongoose = require('mongoose')
const{Schema} = require('mongoose')

const ticketsSchema = mongoose.Schema(
    {
        issue: {
            type: String,
            required:[true, "Please explain your issue"]
        },

        supportRep: {
            type: String,
            required:false,
        },

        description: {
            type: String,
            required:false,
        },

        status: {
            type: String,
            required: false,
            default: 0
        },

    },
    {
        timestamps: true,
    }
)

const Ticket = mongoose.model('Ticket', ticketsSchema);

module.exports = Ticket;