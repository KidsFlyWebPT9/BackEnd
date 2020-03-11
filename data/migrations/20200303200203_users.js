exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();

      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users.string("firstname").notNullable();
      users.string("lastname").notNullable();
      users.string("homeairport").notNullable();
      users.boolean("is_admin").defaultTo(false);
      users.boolean("is_kidsflyconnection").defaultTo(false);
    })

    .createTable("trips", kids => {
      kids.increments();

      kids
        .integer("userId")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
       

      kids.string("airportname").notNullable();
      kids.string("departuretime").notNullable();
      kids.string("flightnumber").notNullable();
      kids.integer("numberofcarryons").notNullable();
      kids.integer("numberofchildren").notNullable();
      kids
        .boolean("specialneeds")
        .notNullable()
        .defaultTo(false);

    });
};
exports.down = function(knex, promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists('trips')
};
