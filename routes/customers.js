const router = require('express').Router();
let customer= require('../models/customers');



router.route('/').get((req, res) => {//get all customers
  customer.find()
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').post((req, res) => {//add customers
    const newCustomer= new customer(req.body);
    newCustomer.save()
    .then(()=>res.json('customer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;