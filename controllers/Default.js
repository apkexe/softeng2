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

module.exports.see statistics = function see statistics (req, res, next, contractID, userID, graphID) {
  Default.see statistics(contractID, userID, graphID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.see the posts by all bots = function see the posts by all bots (req, res, next, contractID, userID, botID) {
  Default.see the posts by all bots(contractID, userID, botID)
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

module.exports.user decision = function user decision (req, res, next, body, userID, contractID) {
  Default.user decision(body, userID, contractID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.user sends feedback = function user sends feedback (req, res, next) {
  Default.user sends feedback()
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
