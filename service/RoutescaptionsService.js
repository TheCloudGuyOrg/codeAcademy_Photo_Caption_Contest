'use strict';
//Import DB Modules
const models = require('../database/models');
const Caption = models.caption;

//Import Cache
const CacheService = require('../database/cache/node-cache.js')
const ttl = 60 * 60 * 1 //cache for 1 Hour
const cache = new CacheService(ttl)
const cache_key = 'captions'

//Get Caption
exports.getCaption = async (request, response) => {
  return await cache.get(`${cache_key}`, () =>
    Caption.findAll({
      order: [
        ['createdAt', 'ASC'],
      ]
  }))
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


//Get Caption by Id
exports.getCaptionById = async (request, response) => {
  const id = parseInt(request.params.id)

  return await cache.get(`${cache_key}_${id}`, () =>
    Caption.findAll({
      where: {id: id},
      order: [
        ['id', 'ASC'],
      ]
  }))
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

//Add Caption
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


//Update Caption
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


//Delete Caption
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