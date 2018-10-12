
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patient').del()
    .then(function () {
      // Inserts seed entries
      return knex('patient').insert([
        {firstName: 'Faith', lastName: 'Morey'}
      ]);
    });
};
