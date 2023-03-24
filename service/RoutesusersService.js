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
    message: 'Photo Information retrieved',
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

}


/**
 * Add User
 * Add User
 *
 * no response value expected for this operation
 **/
exports.addUser = async (request, response) => {

}


/**
 * Update Users
 * Update Users
 *
 * no response value expected for this operation
 **/
exports.updateUsers = async (request, response) => {

}


/**
 * Add Login
 * Add Login
 *
 * no response value expected for this operation
 **/
exports.addLogin = async (request, response) => {

}