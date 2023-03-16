'use strict';

var utils = require('../utils/writer.js');
var Routesphotos = require('../service/RoutesphotosService');

module.exports.addPhotos = function addPhotos (req, res, next) {
  Routesphotos.addPhotos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePhotos = function deletePhotos (req, res, next) {
  Routesphotos.deletePhotos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPhotos = function getPhotos (req, res, next) {
  Routesphotos.getPhotos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPhotosById = function getPhotosById (req, res, next) {
  Routesphotos.getPhotosById()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePhotos = function updatePhotos (req, res, next) {
  Routesphotos.updatePhotos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
