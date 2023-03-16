'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.deleteCaption = function deleteCaption (req, res, next) {
  Default.deleteCaption()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
