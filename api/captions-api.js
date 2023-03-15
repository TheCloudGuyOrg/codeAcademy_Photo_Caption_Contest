//Use Express
const express = require("express");
const captionApi = express.Router();

//Import Queries
const {
    getCaptionById,
    addCaption,
    updateCaption,
    deleteCaption
} = require('../database/queries/captionsQueries.js');

//Envelope API Routes
captionApi.get('/:id', getCaptionById);
captionApi.post('/', auth, addCaption);
captionApi.put('/:id', auth, updateCaption);
captionApi.delete('/:id', auth, deleteCaption);


//Export API
module.exports = captionApi;