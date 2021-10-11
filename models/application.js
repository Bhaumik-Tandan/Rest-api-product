const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  post: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true,
  },
  expectedSalary:{
    type: Number,
    required: true,
  },
  noticePeriod:{
    type: Number,
    required: true,
  },
  qualification:{
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

applicationSchema.index({ "post": 1, "name": 1}, { "unique": true });

const Application = mongoose.model('Applications', applicationSchema);

module.exports = Application;