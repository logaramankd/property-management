exports.up = function (knex) {
  return knex.schema.createTable("parking_options", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("parking_options");
};
