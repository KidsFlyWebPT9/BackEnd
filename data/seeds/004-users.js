
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username:'josh', password:'123', firstname:'josh', lastname:'daley', homeairport:'slc', is_admin:true, is_kidsflyconnection:true},
        {id: 2, username:'jen', password:'123', firstname:'jenny', lastname:'mendoza', homeairport:'jfk', is_admin:false, is_kidsflyconnection:true},
        {id: 3, username:'jose', password:'123', firstname:'jose', lastname:'garcia', homeairport:'hobby',is_admin:false, is_kidsflyconnection:false}
      ])
    })


};
