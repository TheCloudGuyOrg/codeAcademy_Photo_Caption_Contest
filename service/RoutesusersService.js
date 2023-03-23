'use strict';
//Imports
const models = require('../database/models');
const User = models.user

/**
 * Add Login
 * Add Login
 *
 * no response value expected for this operation
 **/
exports.addLogin = async (request, response) => {

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
    response.status(200).send(users)
})
.catch((error) => {
    response.status(400).send(error)
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
 * Update Users
 * Update Users
 *
 * no response value expected for this operation
 **/
exports.updateUsers = async (request, response) => {

}

/*  SWAGGER QUERIES

exports.addLogin = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.addUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.getUsersById = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.updateUsers = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

*/