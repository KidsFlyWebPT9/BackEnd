const router = require('express').Router();
const jwt = require('jsonwebtoken')

const Users = require('../users/users-models.js');

const secrets = require('../config/secrets.js')




module.exports = (req, res, next) => {
    const token = req.headers.authorization;

  if(token){
    jwt.verify(token, secrets.jwtSecrets, (err, decodedToken)=>{
      if(err) {
        res.status(401).json({err:err});
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  }else{
    res.status(401).json({you:"cant touch that"})
  }
}
