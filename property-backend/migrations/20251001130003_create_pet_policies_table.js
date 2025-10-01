exports.up = function (knex) {
  return knex.schema.createTable("pet_policies", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pet_policies");
};
