
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medication').del()
    .then(function () {
      // Inserts seed entries
      return knex('medication').insert([
        {name: 'drug', dosage: '20', frequency: '2', instruction: 'take with water', about: 'used for carpel tunnel'},
        {name: 'oxy', dosage: '25', frequency: '3', instruction: 'take with beer', about: 'stops stuff'},
        {name: 'zanex', dosage: '5', frequency: '5', instruction: 'take with food', about: 'placebo'}
      ]);
    });
};
