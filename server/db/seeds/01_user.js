
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {firstName: 'Kelsey', lastName: 'Rose', email: 'kelsey@mail.com', password: 'asdf'},
        {firstName: 'Donna', lastName: 'Morey', email: 'donna@mail.com', password: 'qwer'},
        {firstName: 'Dennis', lastName: 'Morey', email: 'dennis@mail.com', password: 'zxcv'}
      ]);
    });
};
