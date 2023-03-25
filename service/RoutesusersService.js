'use strict';
//Imports
const models = require('../database/models');
const User = models.user

/**
 * Get List of Users
 * Get List of Users
 *
 * no response value expected for this operation
 **/
exports.getUsers = async (request, response) => {
  return await User.findAll({
    order: [
        ['createdAt', 'ASC'],
    ]
  })
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


/**
 * Get Users by Id
 * Get Users by Id
 *
 * no response value expected for this operation
 **/
exports.getUsersById = async (request, response) => {
  const id = parseInt(request.params.id)

  return await User.findAll({
    where: {id: id},
    order: [
        ['id', 'ASC'],
    ]
  })
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


/**
 * Add User
 * Add User
 *
 * no response value expected for this operation
 **/
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


/**
 * Update Users
 * Update Users
 *
 * no response value expected for this operation
 **/
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

/**
 * Delete Users
 * Delete Users
 *
 * no response value expected for this operation
 **/
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


/**
 * Add Login
 * Add Login
 *
 * no response value expected for this operation
 **/
exports.addLogin = async (request, response) => {

}