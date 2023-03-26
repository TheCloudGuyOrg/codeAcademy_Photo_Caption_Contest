'use strict';
//Import DB Modules
const models = require('../database/models');
const User = models.user

//Import Cache
const CacheService = require('../database/cache/node-cache.js')
const ttl = 60 * 60 * 1 //cache for 1 Hour
const cache = new CacheService(ttl)
const cache_key = 'users'

//Get Users
exports.getUsers = async (request, response) => {
  return await cache.get(`${cache_key}`, () =>
    User.findAll({
      order: [
          ['createdAt', 'ASC'],
      ]
  }))
  .then((users) => { 
    response.status(200).send({
      status: 'Success',
      message: 'User Information retrieved',
      data: users,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Get Users by Id
exports.getUsersById = async (request, response) => {
  const id = parseInt(request.params.id)

  return await cache.get(`${cache_key}_${id}`, () =>
    User.findAll({
      where: {id: id},
      order: [
        ['id', 'ASC'],
      ]
  }))
  .then((users) => { 
    if (!users) {
      response.status(404).send({
        message: 'User Not Found',
      })
    }
    response.status(200).send({
      status: 'Success',
      message: 'User Information retrieved',
      data: users,
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Add Users
exports.addUser = async (request, response) => {
  return await User.create({
    name: request.query.name,
    email: request.query.email,
    password: request.query.password
  })
  .then((users) => { 
    response.status(201).send({
      status: 'Success',
      message: 'New User Created',
      data: users
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Update Users
exports.updateUsers = async (request, response) => {
  const id = parseInt(request.params.id)

  return await User.update({
    name: request.query.name,
    email: request.query.url,
    password: request.query.citation
  },{
    where: {id: id}
  })
  .then((users) => { 
    response.status(200).send({
      status: 'Success',
      message: `User with ID ${id} updated`,
      data: users
    })
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}

//Delete Users
exports.deleteUsers = async (request, response) => {
  const id = parseInt(request.params.id)
  
  return await User.destroy({
    where: {id: id}
  })
  .then((users) => { 
    if (users) {
      response.status(200).send({
        status: 'Success',
        message: `User with ID ${id} deleted`,
        data: users
      })
    } 
    else {
      response.status(404).send({
        status: 'Failure',
        message: 'User Not Found'
      })
    }
  })
  .catch((error) => {
    response.status(500).send({
      error: error.message
    })
  })
}


//Add Login
exports.addLogin = async (request, response) => {

}