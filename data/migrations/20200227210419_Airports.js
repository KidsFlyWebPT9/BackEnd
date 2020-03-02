
exports.up = function(knex) {
    return knex.schema.createTable('Airports', Airport => {
        Airport.increments();
    
        Airport
          .string('name', 255)
          .notNullable()
          
        Airport.string('City', 255).notNullable();
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Airports');
};
