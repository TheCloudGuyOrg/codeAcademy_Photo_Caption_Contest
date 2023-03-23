'use strict';
//Imports
const models = require('../database/models');
const Photo = models.photos


/**
 * Add Photo
 * Add Photo
 *
 * no response value expected for this operation
 **/
exports.addPhotos = async (request, response) => {

}


/**
 * Delete Photo
 * Delete Photo
 *
 * no response value expected for this operation
 **/
exports.deletePhotos = async (request, response) => {

}


/**
 * Get List of Photos
 * Get a List of Photos
 *
 * no response value expected for this operation
 **/
exports.getPhotos = async (request, response) => {
  return await Photo.findAll({
      order: [
          ['createdAt', 'ASC'],
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

}


/**
 * Update Photo
 * Update Photo
 *
 * no response value expected for this operation
 **/
exports.updatePhotos = async (request, response) => {

}



/*  SWAGGER QUERIES

exports.getPhotos = async (request, response) => {
  return await Photo.findAll({
      order: [
          ['createdAt', 'ASC'],
      ]
  })
  .then((photos) => { 
      response.status(200).send(photos)
  })
  .catch((error) => {
      response.status(400).send(error)
  })
}




exports.addPhotos = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.deletePhotos = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.getPhotos = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.getPhotosById = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.updatePhotos = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
*/