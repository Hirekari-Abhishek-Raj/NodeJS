const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    city: String,
    profession: String,
    selected: Number
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;

// GET - Fetch, POST - Create, PUT-Update, DELETE- delete the data