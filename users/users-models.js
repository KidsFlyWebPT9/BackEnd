const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('users').select('id', 'username');
};

function findBy(filter) {
  return db('users').where(filter);
};

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
};

function update(data, id) {
  return db('users')
      .where({ id })
      .update(data);
};
function remove(id) {
  return db('users')
      .select('username', 'first name', 'home airport', 'last name', 'password')
      .where({ id })
      .del();
};




