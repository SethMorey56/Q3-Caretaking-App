const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  // index: function(req, res) {
  //   res.send("Hello");
  // },

  users: function(req, res) {
    knex.select('*').from('user')
    .then((result) => {
      res.json(result)
    })
  },
  
}
