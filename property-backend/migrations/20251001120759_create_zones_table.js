exports.up = function (knex) {
  return knex.schema.createTable("zones", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE"); // if project deleted, zones also deleted
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("zones");
};
