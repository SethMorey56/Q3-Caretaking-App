const knex = require("../db/knex.js");

module.exports = {
    patients: function(req, res) {
        knex.select('*').from('patient')
        .then((result) => {
            res.json(result)
        })
    },
    
}