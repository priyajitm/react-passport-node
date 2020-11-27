const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
  },
  password: String,
  registeredOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('users', User);
