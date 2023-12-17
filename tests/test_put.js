/*
  /user/{UserID}/contract/{ContractID}:
    put :
      description: fr4
      operationId: user-decision
      parameters:
        - name: UserID
          in: path
          description: ID of the user
          required: true
          schema:
            type: string
        
        - name: ContractID
          in: path
          description: ID of the contract 
          required: true
          schema:
            type: string
        
      requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  Decision:
                    type: boolean
      responses:
          "200":
            description: "OK"
            content:
              application/json:
                schema:
                  type: array
                  items:
                    $ref: "#/components/schemas/contract"
          "400": 
            description: unexpected error
            content:
              application/json:
                schema:
                  $ref: "#/components/schemas/Error"
                      contract:
      type: object
      properties:
        name:
          type: string
        ContractID:
          type: string
        status:
          type: integer
*/

const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const {DefaultService} = require('../service/DefaultService.js');
const app = require('../index.js');

// Initialising the server
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listenerCount(t.context.server); 
    t.context.got = got.extend({prefixUrl: t.contexc.prefixUrl, responseType: 'json' });
    console.log("Test server successfuly initialised")
});

// Shutting down the server
test.after.always((t) => {
    console.log("Testing has ended. Shutting down the server.")
    t.context.server.close();
});

// Testing PUT of userDecision. FR 4
test("PUTuserDecision", async (t) => {
    const contract = dummyContract
    await t.notThrowsAsync(
        DefaultService.userDecision({json: contract}, "contractID")
    )
});

// Test for PUT /user/{UserID}/contract/{ContractID}
test("PUT /user/{UserID}/contract/{ContractID}", async (t) => {
const userID = "123";
const contractID = "456";
const decision = {
    Decision: true
};

// Test a successful PUT request
const { statusCode, body } = await t.context.got.put(`user/${userID}/contract/${contractID}`, {
    json: decision,
});

// Test for σending a false decision
const { statusCode: statusCodeFalse, body: bodyFalse } = await t.context.got.put(`user/${userID}/contract/${contractID}`, {
    json: { Decision: false },
});

t.is(statusCodeFalse, 200, 'Expected status code to be 200 for the second case');

// Test for an invalid user ID
const { statusCode: statusCodeInvalidUser } = await t.context.got.put(`user/invalidUserID/contract/${contractID}`, {
    json: decision,
});

t.is(statusCodeInvalidUser, 404, 'Expected status code to be 404 for invalid user ID');

// Test for an invalid contract ID
const { statusCode: statusCodeInvalidContract } = await t.context.got.put(`user/${userID}/contract/invalidContractID`, {
    json: decisionPayload,
});

t.is(statusCodeInvalidContract, 404, 'Expected status code to be 400 for invalid contract ID');
});


//PUT single post
test('Put Post', async (t) => {
const { statusCode } = await t.context.got.put("user/{userID}/contract/{contractID}/post",
{
    json : {
        status : false
        }
});

t.is(statusCode, 200);
});


//DELETE single user
test('DELETE single user', async (t) => {
    const UserId = 10
    const { statusCode } = await t.context.got.delete(`user/${UserId}`)

    t.is(statusCode, 200);
  });

//Delete multiple users
test('DELETE multiple users', async (t) => {
const UserId = [10, 123, 15]


for (const users of UserId) {
        const { statusCode } = await t.context.got.delete(`user/${users}`)
        // Check status Code
        t.is(statusCode, 200)
        }
});