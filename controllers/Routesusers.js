'use strict';

var utils = require('../utils/writer.js');
var Routesusers = require('../service/RoutesusersService');

module.exports.addLogin = function addLogin (req, res, next) {
  Routesusers.addLogin()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addUser = function addUser (req, res, next) {
  Routesusers.addUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next) {
  Routesusers.getUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsersById = function getUsersById (req, res, next) {
  Routesusers.getUsersById()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUsers = function updateUsers (req, res, next) {
  Routesusers.updateUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
