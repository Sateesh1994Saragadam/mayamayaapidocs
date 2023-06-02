'use strict';

var utils = require('../utils/writer.js');
var MayaMayaApp = require('../service/MayaMayaAppService');

module.exports.addUserPOST = function addUserPOST (req, res, next, body) {
  MayaMayaApp.addUserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuestionsByQuizIdPOST = function getQuestionsByQuizIdPOST (req, res, next, body) {
  MayaMayaApp.getQuestionsByQuizIdPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getQuizsBySprintIdPOST = function getQuizsBySprintIdPOST (req, res, next, body) {
  MayaMayaApp.getQuizsBySprintIdPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResultDetailsByIdGET = function getResultDetailsByIdGET (req, res, next, resultId) {
  MayaMayaApp.getResultDetailsByIdGET(resultId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSprintResultPOST = function getSprintResultPOST (req, res, next, body) {
  MayaMayaApp.getSprintResultPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserSprintsGET = function getUserSprintsGET (req, res, next, userId) {
  MayaMayaApp.getUserSprintsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loadUserProfileGET = function loadUserProfileGET (req, res, next, userId) {
  MayaMayaApp.loadUserProfileGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUserPOST = function loginUserPOST (req, res, next, body) {
  MayaMayaApp.loginUserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateQuestionPOST = function updateQuestionPOST (req, res, next, body) {
  MayaMayaApp.updateQuestionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserProfilePOST = function updateUserProfilePOST (req, res, next, body) {
  MayaMayaApp.updateUserProfilePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_registration_statusIdGET = function update_registration_statusIdGET (req, res, next, id) {
  MayaMayaApp.update_registration_statusIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGet_skill_results_datesGET = function usersGet_skill_results_datesGET (req, res, next, userId) {
  MayaMayaApp.usersGet_skill_results_datesGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUpdate_skill_result_viewPOST = function usersUpdate_skill_result_viewPOST (req, res, next, body) {
  MayaMayaApp.usersUpdate_skill_result_viewPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
