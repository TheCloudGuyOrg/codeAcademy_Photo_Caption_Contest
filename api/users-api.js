//Use Express
const express = require("express");
const usersApi = express.Router();

//Import Queries
const {
    getUsers,
    getUsersById,
    addUsers,
    addLogin,
    updateUsers
} = require('../database/queries/usersQueries.js');

//Envelope API Routes
usersApi.get('/', getUsers);
usersApi.get('/:id', getUsersById);
usersApi.post('/', addUsers);
usersApi.post('/login', addLogin);
usersApi.put('/:id', auth, updateUsers);


//Export API
module.exports = usersApi;