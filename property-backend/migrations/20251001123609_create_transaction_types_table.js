exports.up = function (knex) {
  return knex.schema.createTable("transaction_types", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable(); // e.g. For Lease, For Sell
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("transaction_types");
};
