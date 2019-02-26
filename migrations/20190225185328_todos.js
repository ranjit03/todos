exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", table => {
    table.increments("id").primary();
    table.text("task");
    table.integer("priority");
    table.string("category");
    table.boolean("is_complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("todos");
};
