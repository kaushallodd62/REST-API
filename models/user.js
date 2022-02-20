const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    age: {
        type: Number,
        min: 10
    },
    hobbies: {
        type: String
    },
    phno: {
        type: Number
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        minlength: 10
    }
});


const User = mongoose.model('user', UserSchema);

module.exports = User;