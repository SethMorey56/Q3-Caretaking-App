
exports.up = function(knex, Promise) {
    return knex.schema.createTable('patient', (table) => {
        table.increments();
        table.string('firstName')
        table.string('lastName')
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('patient')
  };