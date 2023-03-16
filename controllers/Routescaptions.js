'use strict';

var utils = require('../utils/writer.js');
var Routescaptions = require('../service/RoutescaptionsService');

module.exports.addCaption = function addCaption (req, res, next) {
  Routescaptions.addCaption()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCaptionById = function getCaptionById (req, res, next) {
  Routescaptions.getCaptionById()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCaption = function updateCaption (req, res, next) {
  Routescaptions.updateCaption()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
