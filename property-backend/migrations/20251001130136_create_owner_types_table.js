exports.up = function (knex) {
  return knex.schema.createTable("owner_types", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("owner_types");
};
