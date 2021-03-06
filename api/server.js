const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const tripsRouter = require('../trips/trips-router.js');




const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("Backend for fly kids");
  });

  server.use('/api/auth', authRouter);
  server.use('/api/users', usersRouter);
  server.use('/api/trips', tripsRouter);
  


module.exports = server;