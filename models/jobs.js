const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobsSchema = new Schema({
  post: {
    type: String,
    required: true,
    unique: true
  },
  salary:{
    type: Number,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Job = mongoose.model('Jobs', jobsSchema);

module.exports = Job;