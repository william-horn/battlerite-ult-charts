
const mongoose = require("mongoose");

const User = mongoose.Schema({

    username: {
        type: String
    },

    password: {
        type: String
    },

    email: {
        type: String
    },

});

module.exports = mongoose.model('User', User);
