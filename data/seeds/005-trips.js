
exports.seed = function(knex) {
  // Deletes ALL existing entries

  
 return knex('trips').del()
  .then(function () {
    // Inserts seed entries
    return knex('trips').insert([
      {userId: 1, airportname:'jfk', departuretime:'11:45', flightnumber:"200", numberofcarryons:'0', numberofchildren:'2', specialneeds:true, },
      {userId: 2, airportname:'jfk', departuretime:'1:45', flightnumber:"20055", numberofcarryons:'20', numberofchildren:'20', specialneeds:false, },
      {userId: 3, airportname:'jfk', departuretime:'2:05', flightnumber:"201", numberofcarryons:'0', numberofchildren:'0', specialneeds:false }
    ]);
  });

};
