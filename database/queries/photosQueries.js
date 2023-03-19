//Imports
const models = require('../models');
const Photo = models.photos


//Queries
const getPhotos = async (request, response) => {
    return await Photo.findAll({
        order: [
            ['createdAt', 'ASC'],
        ]
    })
    .then((photos) => { 
        //response.status(200).send(photos)
        console.log (JSON.stringify(photos, null, 2))
    })
    .catch((error) => {
        //response.status(400).send(error)
        console.log (error)
    })
}

console.log(getPhotos())



const getPhotosById = async (request, response) => {

}


const addPhotos = async (request, response) => {

}


const updatePhotos = async (request, response) => {

}


const deletePhotos = async (request, response) => {

}




//Export Queries
module.exports = {
    getPhotos,
    getPhotosById,
    addPhotos,
    updatePhotos,
    deletePhotos
  };
