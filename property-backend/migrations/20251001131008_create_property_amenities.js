exports.up = function (knex) {
  return knex.schema.createTable("property_amenities", (table) => {
    table.increments("id").primary();
    table
      .integer("property_id")
      .unsigned()
      .references("id")
      .inTable("property_types")
      .onDelete("CASCADE");
    table
      .integer("amenity_id")
      .unsigned()
      .references("id")
      .inTable("amenities")
      .onDelete("CASCADE");
    table.timestamps(true, true);

    table.unique(["property_id", "amenity_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("property_amenities");
};
