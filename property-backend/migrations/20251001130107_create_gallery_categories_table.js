exports.up = function (knex) {
  return knex.schema.createTable("gallery_categories", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("gallery_categories");
};
