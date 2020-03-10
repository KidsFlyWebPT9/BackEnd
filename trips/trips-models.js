const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('trips').select('userId');
}

function findBy(filter) {
  return db('trips').where(filter);
}

async function add(trip) {
  const [id] = await db('trips').insert(trip);

  return findById(id);
}

function findById(id) {
  return db('trips')
    .where({ id })
    .first();
}