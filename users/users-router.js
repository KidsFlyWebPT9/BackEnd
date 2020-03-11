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



  router.put('/:id', restricted, async ( req,res ) => {
    const { id } = req.params;
    const body = req.body;
  
    try{
      const data = await 
      users.findById;
      
      if (data) {
        users.update(body,id).then(updateUser =>{
          res.status(200).json({message: "user updated", body});
        });
      } else{
        console.log(id);
        res.status(404).json({message:"can not find user!"});
      }
    } catch (err) {
      res.status(500).json({message: 'Failed to update!', err});
      console.log(error)
    };
  });




  router.delete("/:id", restricted, async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Users.remove(id);
      res.status(200).json({ message: `Successfully removed user  ${id}.` });
    } catch (err) {
      res
        .status(500)
        .json({
          message: "Could not remove user.",
          err
        });
    }
  });
  



module.exports = router;