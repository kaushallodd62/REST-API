const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/UserDB'

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect(url);
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next) {
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(9000, function() {
    console.log('Ready to Go!');
});