
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Airports').insert()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Airports').insert([
        {id: 1, name:'LAX', city:'Los Angeles'},
        {id: 2, name:'Hartsfield', city:'Atlanta'},
        {id: 3, name:'Dallas/Ft worth',city: 'Dallas'},
      ]);
    });
};
