'use strict';
//Imports
const models = require('../database/models');
const Caption = models.caption;


/**
 * Get List of Captions
 * Get List of Captions
 *
 * no response value expected for this operation
 **/
exports.getCaption = async (request, response) => {
  return await Caption.findAll({
    order: [
        ['createdAt', 'ASC'],
    ]
  })
  .then((captions) => { 
    response.status(200).send({
      status: 'Success',
      message: 'Caption Information retrieved',
      data: captions,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


/**
 * Get Caption by Id
 * Get Caption by Id
 *
 * no response value expected for this operation
 **/
exports.getCaptionById = async (request, response) => {
  const id = parseInt(request.params.id)

  return await Caption.findAll({
    where: {id: id},
    order: [
        ['id', 'ASC'],
    ]
  })
  .then((captions) => { 
    if (!captions) {
      response.status(404).send({
        message: 'Caption Not Found',
      })
    }
    response.status(200).send({
      status: 'Success',
      message: 'Caption Information retrieved',
      data: captions,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


/**
 * Add Caption
 * Add Caption
 *
 * no response value expected for this operation
 **/
exports.addCaption = async (request, response) => {
  return await Caption.create({
    photo_id: request.query.photo_id,
    user_id: request.query.user_id,
    comment: request.query.comment
  })
  .then((captions) => { 
    response.status(201).send({
      status: 'Success',
      message: 'New Caption Created',
      data: captions
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


/**
 * Update Caption
 * Update Caption
 *
 * no response value expected for this operation
 **/
exports.updateCaption = async (request, response) => {
  const id = parseInt(request.params.id)

  return await Caption.update({
    photo_id: request.query.photo_id,
    user_id: request.query.user_id,
    comment: request.query.comment
  },{
    where: {id: id}
  })
  .then((captions) => { 
    response.status(200).send({
      status: 'Success',
      message: `Caption with ID ${id} updated`,
      data: captions
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


/**
 * Delete Caption
 * Delete Caption
 *
 * no response value expected for this operation
 **/
exports.deleteCaption = async (request, response) => {
  const id = parseInt(request.params.id)
  
  return await Caption.destroy({
    where: {id: id}
  })
  .then((captions) => { 
    if (captions) {
      response.status(200).send({
        status: 'Success',
        message: `Caption with ID ${id} deleted`,
        data: captions
      })
    } 
    else {
      response.status(404).send({
        status: 'Failure',
        message: 'Caption Not Found'
      })
    }
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}