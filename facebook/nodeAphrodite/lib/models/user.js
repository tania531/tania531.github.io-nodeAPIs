'use strict';

var Mongoose = require('mongoose');

var userSchema = Mongoose.Schema({
  email: {type: String, required: true},
  avatar: {type: String, required: true},
  address: {type: String},
  gender: {type: String, required: true},
  photo: {type: String},
  birthday: {type: Date},
  createdAt: {type: Date, required: true, default: Date.now}
});

module.exports = Mongoose.model('User', userSchema);
