const mongoose = require('mongoose');

const url = 'mongodb://localhost:2717/todo';
mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;