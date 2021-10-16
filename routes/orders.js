const router = require('express').Router();
let order = require('../models/orders');


router.route('/').get((req, res) => {//get all the orders
  order.find()
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('customer/:customerId').get((req, res) => {//get orders of a customer
  order.find({customerId:req.params.customerId})
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('product/:productId').get((req, res) => {//get orders of a product
  order.find({productId:req.params. productId})
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {//add orders
  const newOrder= new order(req.body);
  newOrder.save()
    .then(() => res.json('order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:orderId').patch((req, res) => {//update order
  order.updateOne({orderId:req.params.orderId}, {$set: req.body})
    .then(() => res.json('order updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;