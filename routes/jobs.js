const router = require('express').Router();
let job = require('../models/jobs');

router.route('/').post((req, res) => {
  const newJob = new job({post:req.body.post,salary:parseInt(req.body.salary),location:req.body.location});
  newJob.save()
    .then(() => res.json('job added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  job.find()
    .then(j => res.json(j))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/post').get((req, res) => {
  job.find({post:req.body.post})
    .then(j => res.json(j[0]))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;