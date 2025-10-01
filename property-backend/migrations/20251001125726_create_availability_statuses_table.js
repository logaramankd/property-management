exports.up = function (knex) {
  return knex.schema.createTable("availability_statuses", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("availability_statuses");
};
