const mongoose = require("mongoose");
const User = mongoose.Schema({
    username: {
        type: String , required: true
    },
    password: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    firstname: {
        type: String, required: true
    },
    lastname: {
        type: String, required: true
    },
    status: {
        type : Number, default: 0
    }
});

module.exports = mongoose.model('User',User);