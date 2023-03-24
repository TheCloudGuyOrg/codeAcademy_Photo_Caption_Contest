//Import DB Models
const models = require('../database/models');
const Photo = models.photos


//Helper Functions
const getId = async (request, response) => {
   await Photo.findAll({
        where: {
            name: request
          }
    })
    .then((id) => {
       console.log (id[0].id)
    })
    .catch((error) => {
       console.log(error)
    })
  }

getId('Daisy at Echo Lake')

