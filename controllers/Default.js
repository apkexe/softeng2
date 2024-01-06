'use strict';
// Requires
var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
// Used to filter bots
module.exports.filterBy = function filterBy (req, res, next, body, contractID, userID) {
  Default.filterBy(body, contractID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used to get Posts
module.exports.getPosts = function getPosts (req, res, next, contractID, userID) {
  Default.getPosts(contractID, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used for login User
module.exports.loginUser = function loginUser (req, res, next, body) {
  Default.loginUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used to see statistics
module.exports.seeStatistics = function seeStatistics (req, res, next, contractID, userID, graphID) {
  Default.seeStatistics(contractID, userID, graphID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used to see all the posts by bots
module.exports.seeThePostsByAllBots = function seeThePostsByAllBots (req, res, next, contractID, userID, botID) {
  Default.seeThePostsByAllBots(contractID, userID, botID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used for campaign parameters
module.exports.selectCampaignParameters = function selectCampaignParameters (req, res, next, body, userID) {
  Default.selectCampaignParameters(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used for choosing campaign type
module.exports.userDecision = function userDecision (req, res, next, body, userID, contractID) {
  Default.userDecision(body, userID, contractID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used for the feedback
module.exports.sendFeedback = function sendFeedback (req, res, next) {
  Default.sendFeedback()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used in order to delete user
module.exports.userUserIDDELETE = function userUserIDDELETE (req, res, next, userID) {
  Default.userUserIDDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// Used to see contracts
module.exports.viewContracts = function viewContracts (req, res, next, userID) {
  Default.viewContracts(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
