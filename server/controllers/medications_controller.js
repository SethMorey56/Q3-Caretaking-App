const knex = require("../db/knex.js");

module.exports = {
    getMedications: function(req, res) {
        knex.select('*').from('medication')
        .then((result) => {
            res.json(result)
        })
    },

    postMedications: function(req,res) {
        knex('medication').insert({
            name: req.body.name,
            dosage: req.body.dosage,
            frequency: req.body.frequency,
            instruction: req.body.instruction,
            about: req.body.about
        }).then((result) => {
            res.json(req.body)
        })
    }
}
