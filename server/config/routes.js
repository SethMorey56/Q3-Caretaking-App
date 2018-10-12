//Update the name of the controller below and rename the file.
const users_controller = require("../controllers/users_controller.js")
const medications_controller = require("../controllers/medications_controller.js")
const patients_controller = require("../controllers/patients_controllers.js")

module.exports = function(app){

  // app.get('/', users_controller.index);

  // User table controllers
  app.get('/users', users_controller.users)
  // Medications controllers
  app.get('/medications', medications_controller.getMedications)
  app.post('/medications', medications_controller.postMedications)
  // Patients controllers
  app.get('/patients', patients_controller.patients)
}