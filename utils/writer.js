// Constructor function for creating a response payload with a given code and payload
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Function to create and return a ResponsePayload object with the provided code and payload
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

// Function to write JSON response to the provided HTTP response object
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  // Check if arg1 is a ResponsePayload object, if yes, recursively call writeJson
  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Determine code and payload based on arguments
  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }

  // Assign payload based on arguments
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  // Default to 200 if no code is provided
  if(!code) {
    code = 200;
  }

  // Stringify payload if it's an object
  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }

  // Set HTTP headers and send the response
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}