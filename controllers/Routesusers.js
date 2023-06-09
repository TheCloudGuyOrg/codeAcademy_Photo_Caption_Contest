'use strict';

//Use Express
const express = require('express');
const usersApi = express.Router();

//Import Queries
const {
	getUsers,
	getUsersById,
	addUser,
	updateUsers,
	deleteUsers
} = require('../service/RoutesusersService.js');

//User API Routes

/** 
  /route/users/:
    summary: Users Root
    description: Root of the users URL
    get:
      tags:
      - /routes/users
      summary: Get List of Users
      description: Get List of Users
      operationId: getUsers
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesusers
**/
usersApi.get('/', getUsers);

/** 
  /route/users/:id:
    summary: Users by Id
    description: URL to Users by Id
    get:
      tags:
      - /routes/users
      summary: Get Users by Id
      description: Get Users by Id
      operationId: getUsersById
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesusers
**/
usersApi.get('/:id', getUsersById);

/** 
  /route/users/:
    summary: Users Root
    description: Root of the users URL
    post:
      tags:
      - /routes/users
      summary: Add User
      description: Add User
      operationId: addUser
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesusers
**/
usersApi.post('/', addUser);

/** 
  /route/users/:id:
    summary: Users by Id
    description: URL to Users by Id
    put:
      tags:
      - /routes/users
      summary: Update Users
      description: Update Users
      operationId: updateUsers
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesusers
**/
usersApi.put('/:id', updateUsers);

/**
  /route/users/:id:
    delete:
      tags:
      - /route/users
      summary: Delete User
      description: Delete User
      operationId: deleteUsers
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesuser
**/
usersApi.delete('/:id', deleteUsers);

//Export API
module.exports = usersApi;
