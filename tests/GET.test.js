// Import required modules: http for creating a server, test for test framework, listen for obtaining server's URL,
// and got for making HTTP requests in tests.
const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const {viewContracts, getPosts, seeStatistics, seeThePostsByAllBots} = require('../service/DefaultService.js');
const app = require('../index.js');

// Set up a test server, obtain its prefix URL by listening, and create a 'got' instance with JSON response type for testing.

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});


// Close the test server to clean up resources after all tests have been executed.

test.after.always((t) => {
    t.context.server.close();
});
// Test the GET Endpoint which returns a post
test('GET Post', async (t) => {
    const { body, statusCode } = await t.context.got("user/0/contract/0/post");
    
// Calculate response time
    const start = Date.now();
    const response = await getPosts(10, 29);
    const end = Date.now();
  
    const responseTime = end - start;
// Check if response time is alligned with the requirements
    t.true(responseTime < 3)
// Check if length is equal to the expected
    t.is(body.length, 2);
// Declare wrong input
    const nonExistentUserID = -10;
    const nonExistentContractID = -10;
    const nullresponse = await getPosts(null, null);
    
    const nonresponse = await getPosts(nonExistentUserID,1);
    const nonresponse2 = await getPosts(1,nonExistentContractID);
// Check if wrong input results to error
    t.deepEqual(nonresponse, []);
    t.deepEqual(nonresponse2, []);
    t.deepEqual(nullresponse, []); 

// Check if the body of the result is the one expected
    for(i = 0; i < body.length; i++){
        t.like(body[i], {
            "postLink": "http://example.com/aeiou",
            "imgPost": "http://example.com/aeiou",
            "BotID": "BotID",
            "postID": "postID"
          })
    }
    t.is(statusCode, 200);
});

// Test the GET Endpoint which returns a contract
test('GET Contract', async (t) => {
    const { body, statusCode } = await t.context.got("user/0/contract");
// Calculate response time
    const start = Date.now();
    const response = await viewContracts(5);
    const end = Date.now();
// Check if response time is alligned with the requirements
    const responseTime = end - start;
    t.true(responseTime < 3)
// Check if the body of the result is the one expected
    t.is(body.length, 2);
// Declare wrong input  
    const nonExistentUserID = -10;   
    const nonresponse = await viewContracts(nonExistentUserID);
    const nullresponse = await viewContracts(null);
// Check if wrong input results to error 
    t.deepEqual(nonresponse, []);
    t.deepEqual(nullresponse, []);
// Check if the body of the result is the one expected    
    for(i = 0; i < body.length; i++){
        t.like(body[i], {
            "name": "NWO Campaign",
            "ContractID": "ContractID",
          })
    }
    t.is(statusCode, 200); 
    
}); 

// Test the GET Endpoint which returns a graph
test('GET Graph', async (t) => {
    const { body, statusCode } = await t.context.got("user/0/contract/0/graph/0");
// Calculate response time
    const start = Date.now();
    const response = await seeStatistics(1,1,1);
    const end = Date.now();
// Check if response time is alligned with the requirements 
    const responseTime = end - start;
    t.true(responseTime < 3)
// Check if the body of the result is the one expected
    t.is(body.length, 2);
// Declare wrong input     
    const nonExistentUserID = -10;
    const nonExistentContractID = -10;
    const nonExistentGraphID = -10;
    
    // const nonresponse = await seeStatistics(nonExistentUserID,1,1);
    // const nonresponse2 = await seeStatistics(1,nonExistentContractID,1);
    // const nonresponse3 = await seeStatistics(1,1,nonExistentGraphID);
    // const nullresponse = await seeStatistics(null, null, null);
// Check if wrong input results to error   
    t.deepEqual(await seeStatistics(nonExistentUserID,1,1), []);
    t.deepEqual(await seeStatistics(1,nonExistentContractID,1), []);
    t.deepEqual(await seeStatistics(1,1,nonExistentGraphID), []);
    t.deepEqual(await seeStatistics(null, null, null), []);  
// Check if the body of the result is the one expected       
    for(i = 0; i < body.length; i++){
        t.like(body[i], {
            "color": "color",
            "size": 1.4658129805029452,
            "xData": [ 0.8008281904610115, 0.8008281904610115 ],
            "yData" : [ 6.027456183070403, 6.027456183070403 ],
            "labels" : [ "labels", "labels" ]
          })
    }
    t.is(statusCode, 200); 
    
}); 

// Test the GET Endpoint which returns a bot's profile
test('GET Bot Profile', async (t) => {
    const { body, statusCode } = await t.context.got("user/0/contract/0/post/0");
// Calculate response time
    const start = Date.now();
    const response = await seeThePostsByAllBots(1,1,1);
    const end = Date.now();
// Check if response time is alligned with the requirements   
    const responseTime = end - start;
    t.true(responseTime < 3)
// Check if the body of the result is the one expected
    t.is(body.length, 2);
// Declare wrong input     
    const nonExistentUserID = -10;
    const nonExistentContractID = -10;
    const nonExistentBotID = -10;
    
    const nonresponse = await seeThePostsByAllBots(nonExistentUserID, 4,3);
    const nonresponse2 = await seeThePostsByAllBots(1,nonExistentContractID,2);
    const nonresponse3 = await seeThePostsByAllBots(1,1,nonExistentBotID);
    const nullresponse = await seeThePostsByAllBots(null, null, null);
 // Check if wrong input results to error     
    t.deepEqual(nonresponse, []);
    t.deepEqual(nonresponse2, []);
    t.deepEqual(nonresponse3, []);
    t.deepEqual(nullresponse, []); 
 // Check if the body of the result is the one expected    
    for(i = 0; i < body.length; i++){
        t.like(body[i], {
            "top5": [ {
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
            "Profiles": [ "Profiles", "Profiles" ],
            "Stats": [ "Stats", "Stats" ],
            "id" : 0,
            "Name" : "Name"
          })
    } 
    t.is(statusCode, 200); 
    
}); 