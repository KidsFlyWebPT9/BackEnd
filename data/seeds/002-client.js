
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1, name: 'joshua', email:'josh@gmail.com', hometown:'salt lake city', airport:'slc' },
        {id: 2, name: 'john', email:'jonh@gmail.com', hometown:'new york city', airport:'jfk'},
        {id: 3, name: 'jose', email:'jose@gmail.com', hometown:'los angles', airport:'lax'}
      ]);
    });
};
