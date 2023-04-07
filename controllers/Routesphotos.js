'use strict';

//Use Express
const express = require("express");
const photosApi = express.Router();

//Import Queries
const {
    getPhotos,
    getPhotosById,
    addPhotos,
    updatePhotos,
    deletePhotos,
} = require('../service/RoutesphotosService.js');

//Photo API Routes

/**
  /route/photos/:
    summary: Photos Root
    description: Photos Root
    get:
      tags:
      - /routes/photos
      summary: Get List of Photos
      description: Get a List of Photos
      operationId: getPhotos
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesphotos
**/
photosApi.get('/', getPhotos);

/**
  /route/photos/:id:
    summary: Photos by ID
    description: URL to Photos by Id
    get:
      tags:
      - /routes/photos
      summary: Get Photos by Id
      description: Get Photos by Id
      operationId: getPhotosById
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesphotos
**/
photosApi.get('/:id', getPhotosById);

/**
  /route/photos/:
    summary: Photos Root
    description: Photos Root
    post:
      tags:
      - /routes/photos
      summary: Add Photo
      description: Add Photo
      operationId: addPhotos
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesphotos
**/
photosApi.post('/', addPhotos);

/**
  /route/photos/:id:
    summary: Photos by ID
    description: URL to Photos by Id
    put:
      tags:
      - /routes/photos
      summary: Update Photo
      description: Update Photo
      operationId: updatePhotos
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesphotos
**/
photosApi.put('/:id', updatePhotos);

/**
  /route/photos/:id:
    summary: Photos by ID
    description: URL to Photos by Id
    delete:
      tags:
      - /routes/photos
      summary: Delete Photo
      description: Delete Photo
      operationId: deletePhotos
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesphotos
**/
photosApi.delete('/:id', deletePhotos);

//Export API
module.exports = photosApi;