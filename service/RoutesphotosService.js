'use strict';
//Imports
const models = require('../database/models');
const Photo = models.photos


/**
 * Get List of Photos
 * Get a List of Photos
 *
 * no response value expected for this operation
 **/
exports.getPhotos = async (request, response) => {
  return await Photo.findAll({
      order: [
          ['id', 'ASC'],
      ]
  })
  .then((photos) => { 
      response.status(200).send(photos)
  })
  .catch((error) => {
      response.status(400).send(error)
  })
}


/**
 * Get Photos by Id
 * Get Photos by Id
 *
 * no response value expected for this operation
 **/
exports.getPhotosById = async (request, response) => {
  const id = parseInt(request.params.id)

  return await Photo.findAll({
    where: {
      id: id
    },
    order: [
        ['id', 'ASC'],
    ]
  })
  .then((photos) => { 
    response.status(200).send(photos)
  })
  .catch((error) => {
    response.status(400).send(error)
  })
}


/**
 * Add Photo
 * Add Photo
 *
 * no response value expected for this operation
 **/
exports.addPhotos = async (request, response) => {
  return await Photo.create({
    name: request.query.name,
    url: request.query.url,
    citation: request.query.citation
  })
  .then((photo) => {
    response.status(201).send(photo)
  })
  .catch((error) => {
    response.status(400).send(error)
  })
}

/**
 * Update Photo
 * Update Photo
 *
 * no response value expected for this operation
 **/
exports.updatePhotos = async (request, response) => {

}


/**
 * Delete Photo
 * Delete Photo
 *
 * no response value expected for this operation
 **/
exports.deletePhotos = async (request, response) => {

}