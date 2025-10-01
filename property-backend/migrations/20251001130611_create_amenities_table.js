exports.up = function (knex) {
  return knex.schema.createTable("amenities", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable(); // e.g. Pool, Gym, Playground
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("amenities");
};
