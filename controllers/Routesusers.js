'use strict';

//Use Express
const express = require("express");
const usersApi = express.Router();

//Import Queries
const {
    getUsers,
    getUsersById,
    addUser,
    addLogin,
    updateUsers
} = require('../service/RoutesusersService.js');

//Envelope API Routes
usersApi.get('/', getUsers);
usersApi.get('/:id', getUsersById);
usersApi.post('/', addUser);
usersApi.post('/login', addLogin);
usersApi.put('/:id', updateUsers);


//Export API
module.exports = usersApi;
