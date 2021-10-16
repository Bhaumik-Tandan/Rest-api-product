const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name:{
    type: String,
    required: true,
  },

  quantity:{
    type: Number,
    required: true,
  },

  productId:{
    type: Number,
    required: true,
  },
  orderId:{
    type: Number,
    required: true,
    unique: true
  },
  customerId:{
    type: Number,
    required: true,
  },
  status:{
    type:String,
    required:true
  }
}, {
  timestamps: true,
});


const Order = mongoose.model('orders', orderSchema);

module.exports = Order;