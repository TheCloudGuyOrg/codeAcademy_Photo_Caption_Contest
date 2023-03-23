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

//Envelope API Routes
photosApi.get('/', getPhotos);
photosApi.get('/:id', getPhotosById);
photosApi.post('/', addPhotos);
photosApi.put('/:id', updatePhotos);
photosApi.delete('/:id', deletePhotos);

//Export API
module.exports = photosApi;