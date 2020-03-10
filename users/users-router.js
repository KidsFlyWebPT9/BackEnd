const router = require('express').Router();

const Users = require('./users-models.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});




router.get('/:id', restricted, async ( req,res ) => {
    const  id  = req.params.id;
    try{
      const user = await Users.findById(id)
      res.status(200).json({message: `welcome traveler ${user.username}`});
    } catch (err) {
        console.log(err);
      res.status(500).json({message: 'Failed to get user', err:err});
    };
  });



  router.put('/:id', async ( req,res ) => {
    const { id } = req.params;
    const body = req.body;
  
    try{
      const trip = await db('users').where('id', id)
      .update(body);
      res.status(200).json(trip);
    } catch (err) {
      res.status(500).json({message: 'Failed to update!', err});
    };
  });

module.exports = router;