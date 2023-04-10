'use strict';

//Use Express
const express = require('express');
const captionApi = express.Router();

//Import Queries
const {
	getCaption, 
	getCaptionById,
	addCaption,
	updateCaption,
	deleteCaption
} = require('../service/RoutescaptionsService.js');


//Captions API Routes

/**
  /route/captions/:
    summary: Captions Root
    description: Root of the captions URL
    get:
      tags:
      - /route/captions
      summary: Get List of Captions
      description: Get a List of Captions
      operationId: getCaptions
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routescaptions
**/
captionApi.get('/', getCaption);

/**
  /route/captions/:id:
    summary: Captions by Id
    description: URL to Captions by Id
    get:
      tags:
      - /route/captions
      summary: Get Caption by Id
      description: Get Caption by Id
      operationId: getCaptionById
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routescaptions 
**/
captionApi.get('/:id', getCaptionById);

/** 
  /route/captions/:
    summary: Captions Root
    description: Root of the captions URL
    post:
      tags:
      - /route/captions
      summary: Add Caption
      description: Add Caption
      operationId: addCaption
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routescaptions
**/
captionApi.post('/', addCaption);

/**
  /route/captions/:id:
    summary: Captions by Id
    description: URL to Captions by Id
    put:
      tags:
      - /route/captions
      summary: Update Caption
      description: Update Caption
      operationId: updateCaption
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routescaptions
 **/
captionApi.put('/:id', updateCaption);

/**
  /route/captions/:id:
    summary: Captions by Id
    description: URL to Captions by Id
    delete:
      tags:
      - /route/captions
      summary: Delete Caption
      description: Delete Caption
      operationId: deleteCaption
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routescaptions
**/
captionApi.delete('/:id', deleteCaption);

//Export API
module.exports = captionApi;