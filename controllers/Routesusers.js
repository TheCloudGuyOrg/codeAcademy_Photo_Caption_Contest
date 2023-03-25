'use strict';

//Use Express
const express = require("express");
const usersApi = express.Router();

//Import Queries
const {
    getUsers,
    getUsersById,
    addUser,
    updateUsers,
    deleteUsers,
    addLogin
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
    NEED SWAGGER CODE
**/
usersApi.delete('/:id', deleteUsers)

/** 
  /route/users/login:
    summary: User Logins
    description: URL to Logins
    post:
      tags:
      - /routes/users
      summary: Add Login
      description: Add Login
      operationId: addLogin
      responses:
        default:
          description: Default error sample response
      x-swagger-router-controller: Routesusers
**/
usersApi.post('/login', addLogin);

//Export API
module.exports = usersApi;
