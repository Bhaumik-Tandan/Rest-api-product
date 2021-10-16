const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
  customer_id:{
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  phone:{
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Customer = mongoose.model('customers', customersSchema);

module.exports = Customer;