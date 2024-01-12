// Constructor function for creating a response payload with a given code and payload
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Function to create and return a ResponsePayload object with the provided code and payload
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

// Function to determine and return code from arguments
function getCode(arg1, arg2) {
  if (arg2 && Number.isInteger(arg2)) {
    return arg2;
  } else if (arg1 && Number.isInteger(arg1)) {
    return arg1;
  } else {
    return 200; // Default to 200 if no code is provided
  }
}

// Function to determine and return payload from arguments
function getPayload(arg1) {
  return arg1 && typeof arg1 === 'object' ? JSON.stringify(arg1, null, 2) : arg1;
}

// Function to write JSON response to the provided HTTP response object
exports.writeJson = function(response, arg1, arg2) {
  var code = getCode(arg1, arg2);
  var payload = getPayload(arg1);

  // If arg1 is a ResponsePayload object, recursively call writeJson
  if (arg1 instanceof ResponsePayload) {
    exports.writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Set HTTP headers and send the response
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}