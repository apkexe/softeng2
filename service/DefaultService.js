'use strict';
// FR 8 - The user should be able to search and view the actions of the bots.
exports.filterBy = function() {
  return new Promise(function(resolve) {
    const examples = [{
      "postLink" : "http://example.com/aeiou",
      "imgPost" : "http://example.com/aeiou", 
      "BotID" : "BotID", 
      "postID" : "postID"
    }, {
      "postLink" : "http://example.com/aeiou",
      "imgPost" : "http://example.com/aeiou",
      "BotID" : "BotID",
      "postID" : "postID"
    } ];
    resolve(examples);
  });
}
//FR 8 - The user should be able to search and view the actions of the bots.
exports.getPosts = function(contractID,userID) {
  return new Promise(function(resolve, reject) {
if (userID === null || userID < 0) {
  resolve([]);
  return; 
  } 
if (contractID === null || contractID < 0) {
resolve([]);
return; 
}
  
    var examples = {};
    examples['application/json'] = [ {
  "postLink" : "http://example.com/aeiou",
  "imgPost" : "http://example.com/aeiou",
  "BotID" : "BotID",
  "postID" : "postID"
}, {
  "postLink" : "http://example.com/aeiou",
  "imgPost" : "http://example.com/aeiou",
  "BotID" : "BotID",
  "postID" : "postID"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
// Log in
exports.loginUser = function() {
  return new Promise(function(resolve) {
    const examples = [{
  "password" : "password",
  "UserID" : "UserID",
  "username" : "username"
}, {
  "password" : "password",
  "UserID" : "UserID",
  "username" : "username"
}];
resolve(examples);
  });
}
// Returns all statistical graphs for the specific campaign 
exports.seeStatistics = function(contractID,userID,graphID) {
  return new Promise(function(resolve, reject) {
if (userID === null || userID < 0) {
  resolve([]);
  return; 
  } 
if (graphID === null || graphID < 0) {
  resolve([]);
  return; 
}
if (contractID === null || contractID < 0) {
resolve([]);
return; 
}
    var examples = {};
    examples['application/json'] = [ {
  "color" : "color",
  "size" : 1.4658129805029452,
  "xData" : [ 0.8008281904610115, 0.8008281904610115 ],
  "yData" : [ 6.027456183070403, 6.027456183070403 ],
  "labels" : [ "labels", "labels" ]
}, {
  "color" : "color",
  "size" : 1.4658129805029452,
  "xData" : [ 0.8008281904610115, 0.8008281904610115 ],
  "yData" : [ 6.027456183070403, 6.027456183070403 ],
  "labels" : [ "labels", "labels" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
// FR9 Returns a bots' profile
exports.seeThePostsByAllBots = function(contractID,userID,botID) {
  return new Promise(function(resolve, reject) {
if (userID === null || userID < 0) {
  resolve([]);
  return; 
  } 
if (botID === null || botID < 0) {
  resolve([]);
  return; 
}
if (contractID === null || contractID < 0) {
resolve([]);
return; 
}
    var examples = {};
    examples['application/json'] = [ {
  "top5" : [ {
    "postLink" : "http://example.com/aeiou",
    "imgPost" : "http://example.com/aeiou",
    "BotID" : "BotID",
    "postID" : "postID"
  }, {
    "postLink" : "http://example.com/aeiou",
    "imgPost" : "http://example.com/aeiou",
    "BotID" : "BotID",
    "postID" : "postID"
  } ],
  "Profiles" : [ "Profiles", "Profiles" ],
  "Stats" : [ "Stats", "Stats" ],
  "id" : 0,
  "Name" : "Name"
}, {
  "top5" : [ {
    "postLink" : "http://example.com/aeiou",
    "imgPost" : "http://example.com/aeiou",
    "BotID" : "BotID",
    "postID" : "postID"
  }, {
    "postLink" : "http://example.com/aeiou",
    "imgPost" : "http://example.com/aeiou",
    "BotID" : "BotID",
    "postID" : "postID"
  } ],
  "Profiles" : [ "Profiles", "Profiles" ],
  "Stats" : [ "Stats", "Stats" ],
  "id" : 0,
  "Name" : "Name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
// FR1/FR2 - The user should be able to select the parameters and the campaign.
exports.selectCampaignParameters = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "ContractID" : "ContractID",
  "status" : 0
}, {
  "name" : "name",
  "ContractID" : "ContractID",
  "status" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
// FR4
exports.userDecision = function(body,userID,contractID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "ContractID" : "ContractID",
  "status" : 0
}, {
  "name" : "name",
  "ContractID" : "ContractID",
  "status" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
// User gives feedback
exports.sendFeedback = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
// Delete a user by ID
exports.userUserIDDELETE = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
// FR5
exports.viewContracts = function(userID) {
  return new Promise(function(resolve, reject) {
if (userID === null || userID < 0) {
    resolve([]);
    return; // Return early to avoid executing the rest of the function
   }
    var examples = {};
    examples['application/json'] = [ {
  "name" : "NWO Campaign",
  "ContractID" : "ContractID",
  "status" : 0
}, {
  "name" : "NWO Campaign",
  "ContractID" : "ContractID",
  "status" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}