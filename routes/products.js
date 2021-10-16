const router = require('express').Router();
let product = require('../models/products');


router.route('/').get((req, res) => {//get all the products
  product.find()
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:productId').get((req, res) => {//get product details of a particular product
  product.find({productId:req.params.productId})
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {//add products
  const newProduct= new product(req.body);
  newProduct.save()
    .then(() => res.json('product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:productId').patch((req, res) => {//update product
  product.updateOne({productId:req.params.productId}, {$set: req.body})
    .then(() => res.json('product updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;