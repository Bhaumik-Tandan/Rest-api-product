const router = require('express').Router();
let application = require('../models/application');

router.route('/').post((req, res) => {
  const newApplication= new application({post:req.body.post,name:req.body.name,expectedSalary:parseInt(req.body.expectedSalary),noticePeriod:parseInt(req.body.noticePeriod),qualification:req.body.qualification});
  newApplication.save()
    .then(() => res.json('application added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  application.find()
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;