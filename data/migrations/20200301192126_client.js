
exports.up = function(knex) {
    return knex.schema.createTable('client', client => {
        client.increments();
    
        client
          .string('Name', 255)
          .notNullable()
        client.string('Email', 255).notNullable();
        client.string('hometown',255).notNullable();
        client.string('airport', 255).notNullable();

        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('client');
};
