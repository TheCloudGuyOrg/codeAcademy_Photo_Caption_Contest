'use strict';

//Use Express
const express = require("express");
const captionApi = express.Router();

//Import Queries
const {
    getCaptionById,
    addCaption,
    updateCaption,
    deleteCaption
} = require('../service/RoutescaptionsService.js');

//Envelope API Routes
captionApi.get('/:id', getCaptionById);
captionApi.post('/', addCaption);
captionApi.put('/:id', updateCaption);
captionApi.delete('/:id', deleteCaption);

//Export API
module.exports = captionApi;