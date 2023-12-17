const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const { DefaultService } = require('../service/DefaultService.js');
const app = require('../index.js');

// Initialising the server
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({prefixUrl: t.context.prefixUrl, responseType: 'json' });
    console.log("Test server successfuly initialised")
});

// Shutting down the server
test.after.always((t) => {
    console.log("Testing has ended. Shutting down the server.")
    t.context.server.close();
});

// Testing PUT of userDecision. FR 4
test('PUT user decision', async (t) => {
    const userID = 'existingUserID';
    const contractID = 'existingContractID';
    const decisionData = {
        Decision: true
    };

    // Doing the PUT request.
    const { statusCode } = await t.context.got.put(`user/${userID}/contract/${contractID}`, {
        json: decisionData,
    });

    t.is(statusCode, 200);
});

// Testing user decision for an invalid userID
test('PUT user decision with invalid user ID', async (t) => {
    const invalidUserID = '';
    const contractID = 'existingContractID';
    const decisionData = {
        Decision: true
    }
    // Doing the PUT request for invalid user.
    const { statusCode } = await t.context.got.put(`user/${invalidUserID}/contract/${contractID}`, {
        json: decisionData,
    });
    t.is(statusCode, 404);
});


// //PUT single post
// test('Put Post', async (t) => {
// const { statusCode } = await t.context.got.put("user/{userID}/contract/{contractID}/post",
// {
//     json : {
//         status : false
//         }
// });

// t.is(statusCode, 200);
// });


// //DELETE single user
// test('DELETE single user', async (t) => {
//     const UserId = 10
//     const { statusCode } = await t.context.got.delete(`user/${UserId}`)

//     t.is(statusCode, 200);
//   });

// //Delete multiple users
// test('DELETE multiple users', async (t) => {
// const UserId = [10, 123, 15]


// for (const users of UserId) {
//         const { statusCode } = await t.context.got.delete(`user/${users}`)
//         // Check status Code
//         t.is(statusCode, 200)
//         }
// });