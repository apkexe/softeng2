'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.filterBy = function filterBy (req, res, next, body, contractID, userID) {
  Default.filterBy(body, contractID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPosts = function getPosts (req, res, next, contractID, userID) {
  Default.getPosts(contractID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUser = function loginUser (req, res, next, body) {
  Default.loginUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seeStatistics = function seeStatistics (req, res, next, contractID, userID, graphID) {
  Default.seeStatistics(contractID, userID, graphID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.seeThePostsByAllBots = function seeThePostsByAllBots (req, res, next, contractID, userID, botID) {
  Default.seeThePostsByAllBots(contractID, userID, botID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.selectCampaignParameters = function selectCampaignParameters (req, res, next, body, userID) {
  Default.selectCampaignParameters(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userDecision = function userDecision (req, res, next, body, userID, contractID) {
  Default.userDecision(body, userID, contractID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userSendsFeedback = function userSendsFeedback (req, res, next) {
  Default.userSendsFeedback()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIDDELETE = function userUserIDDELETE (req, res, next, userID) {
  Default.userUserIDDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewContracts = function viewContracts (req, res, next, userID) {
  Default.viewContracts(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
