const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name:{
    type: String,
    required: true,
  },

  sku:{
    type: Number,
    required: true,
    unique: true
  },

  productsId:{
    type: Number,
    required: true
  },

  price:{
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});


const Product = mongoose.model('products', productsSchema);

module.exports = Product;