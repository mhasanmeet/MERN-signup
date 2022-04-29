// Database and Schema
const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type: "string",
        required: true
    },
    username:{
        type: "string",
        required: true
    },
    email:{
        type: "string",
        required: true
    },
    password:{
        type: "string",
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.export = mongoose.model('mytable', signUpTemplate)