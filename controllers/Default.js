'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addUserPOST = function addUserPOST (req, res, next, body) {
  Default.addUserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadUserProfileGET = function loadUserProfileGET (req, res, next, userId) {
  Default.loadUserProfileGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUserPOST = function loginUserPOST (req, res, next, body) {
  Default.loginUserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_registration_statusIdGET = function update_registration_statusIdGET (req, res, next, id) {
  Default.update_registration_statusIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
