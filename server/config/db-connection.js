const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/battlerite_ult_charts', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
