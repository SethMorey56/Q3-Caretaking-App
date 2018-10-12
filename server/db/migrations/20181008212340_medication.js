
exports.up = function(knex, Promise) {
    return knex.schema.createTable('medication', (table) => {
        table.increments();
        table.string('name')
        table.integer('dosage')
        table.integer('frequency')
        table.string('instruction')
        table.text('about')
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('medication')
  };