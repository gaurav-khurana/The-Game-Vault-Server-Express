/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("allgames", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("release_date").notNullable();
    table.string("description", 1000).notNullable();
    table.string("price").notNullable();
    table.string("price_15days").notNullable();
    table.string("price_30days").notNullable();
    table.string("platform").notNullable();
    table.string("genre").notNullable();
    table.string("developer").notNullable();
    table.string("players").notNullable();
    table.string("online_play").notNullable();
    table.string("ratings").notNullable();
    table.string("image1", 255).notNullable();
    table.string("image2", 255).notNullable();
    table.string("image3", 255).notNullable();
    table.string("image4", 255).notNullable();
    table.string("image5", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("allgames");
};
