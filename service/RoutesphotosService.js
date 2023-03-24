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
    response.status(200).send({
      status: 'Success',
      message: 'Photo Information retrieved',
      data: photos,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
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
    where: {id: id},
    order: [
        ['id', 'ASC'],
    ]
  })
  .then((photos) => { 
    response.status(200).send({
      status: 'Success',
      message: 'Photo Information retrieved',
      data: photos,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
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
  .then((photos) => { 
    response.status(201).send({
      status: 'Success',
      message: 'New Photo Created',
      data: photos
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


/**
 * Update Photo
 * Update Photo
 *
 * no response value expected for this operation
 **/
exports.updatePhotos = async (request, response) => {
  const id = parseInt(request.params.id)

  return await Photo.update({
    name: request.query.name || photos.name,
    url: request.query.url || photos.url,
    citation: request.query.citation || photos.citation
  },{
    where: {id: id}
  })
  .then((photos) => { 
    response.status(200).send({
      status: 'Success',
      message: `Photo with ID ${id} updated`,
      data: photos
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


/**
 * Delete Photo
 * Delete Photo
 *
 * no response value expected for this operation
 **/
exports.deletePhotos = async (request, response) => {
  const id = parseInt(request.params.id)
  
  return await Photo.destroy({
    where: {id: id}
  })
  .then((photos) => { 
    response.status(200).send({
      status: 'Success',
      message: `Photo with ID ${id} deleted`,
      data: photos,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}




