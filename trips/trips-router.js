const router = require('express').Router();

const Trips = require('./trips-models.js');
const restricted = require('../auth/restricted-middleware.js');



router.post('/create', restricted,(req,res)=>{
    const trip = req.body;
  
      Trips.add(trip)
    .then(saved => {
      res.status(201).json({message:"trip created", saved});
    })
    .catch(error => {
        console.log(error);
      res.status(500).json({message:"trip failed to create", error});
    });
  
  
  });
  
  module.exports = router;