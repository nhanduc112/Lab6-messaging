const mongoose = require('mongoose')
const messagingSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})
    
module.exports = mongoose.model('message', messagingSchema)