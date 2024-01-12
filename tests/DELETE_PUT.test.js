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

// Testing PUT of FR8 - The user should be able to search and view the actions of the bots.
test('PUT posts with valid filters', async (t) => {
    const userID = '123';
    const contractID = '456';
    const filterSettings = {
        SortBy: 1, 
        Platforms: 10001 // 1 is for a selected platform and 0 for a non-selected one for the selection of {Facebook, X, Instagram, TikTok, Reddit}
    };

    const { statusCode, body } = await t.context.got.put(`user/${userID}/contract/${contractID}/post`, {
        json: filterSettings,
    });
    t.is(statusCode, 200);
});

// Testing PUT of posts with null filter settings
test('PUT posts with null filter settings', async (t) => {
    const userID = '123';
    const contractID = '456';
    const filterSettings = {
        SortBy: null,
        Platforms: null
    };
    await t.throwsAsync(
        async () => {
            await t.context.got.put(`user/${userID}/contract/${contractID}/post`, {
                json: filterSettings,
            });
        },
        {instanceOf: t.context.got.HTTPError, message: /Response code 400/ }
    );
});

// //DELETE single user
test('DELETE user by ID', async (t) => {
    const userIDToDelete = '123';

    const { statusCode } = await t.context.got.delete(`user/${userIDToDelete}`);

    t.is(statusCode, 200, 'Expected status code to be 200 for successful deletion');
});

test('DELETE user with invalid ID', async (t) => {
    const invalidUserID = '';
    await t.throwsAsync(
        t.context.got.delete(`user/${invalidUserID}`),
        {instanceOf: t.context.got.HTTPError, message: /Response code 405/ }
      );
});


// //Delete multiple users
test('DELETE multiple users by IDs', async (t) => {
    const userIDsToDelete = ['456', '789', '101'];

    for (const userID of userIDsToDelete) {
        const { statusCode } = await t.context.got.delete(`user/${userID}`);
        t.is(statusCode, 200, `Expected status code to be 200 for successful deletion of user ${userID}`);
    }
});