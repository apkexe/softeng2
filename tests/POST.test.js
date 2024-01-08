const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const {getPosts} = require('../service/DefaultService.js');
const app = require('../index.js');
//Start running the server before the tests
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});
//Close the server after the tests are done
test.after.always((t) => {
    t.context.server.close();
});

//POST single user
test('POST Single User', async (t) => {
    const { statusCode } = await t.context.got.post("user",
    {
        json : {
            UserID : 'message',
            username : 'email',
            password : 'asdfasd'
          }
    });

      //Check status code
      t.is(statusCode, 200);
});

//POST multiple users
test('POST multiple User', async (t) => {
    //Dummy data
    const usersToBeAdded = [
            {
            UserID : 'message',
            username : 'email',
            password : 'asdfasd'
            },
            {
            UserID : 'message',
            username : 'email',
            password : 'asdfasd'
            }
        ]
    
        for (const users of usersToBeAdded) {
            const { statusCode } = await t.context.got.post('user', { json: users })
        
            // Check status Code
            t.is(statusCode, 200)
          }
});
//Test for empty user
test('POST empty user', async (t) => {
    await t.throwsAsync(
      async () => {
        await t.context.got.post('user', {})
      },
      { instanceOf: t.context.got.HTTPError, message: /Response code 415/ }
    )
  })

//Test for POST Contract endpoint
test('POST Contract', async (t) => {
    const { statusCode } = await t.context.got.post("user/{userID}",
    {
        //Dummy Contract data
        json : {
            select: "string",
            comments: "string",
            platforms: 0,
            intensity: 0
          }
    });
    //Check status code
    t.is(statusCode, 200);
});
//Test for Multiple POST Contract requests
test('POST multiple Contracts', async (t) => {

    const contractsToBeAdded = [
            {
                select: "string",
                comments: "string",
                platforms: 0,
                intensity: 0
            },
            {
                select: "string",
                comments: "string",
                platforms: 3,
                intensity: 0
            }
        ]
    
        for (const contracts of contractsToBeAdded) {
            const { statusCode } = await t.context.got.post('user/{userID}', { json: contracts })
        
            // Check status Code
            t.is(statusCode, 200)
          }
});


//Test for empty Contract input 
test('POST empty contract', async (t) => {
    await t.throwsAsync(
      async () => {
        await t.context.got.post('user/{userID}', {})
      },
      { instanceOf: t.context.got.HTTPError, message: /Response code 415/ }
    )
  })
//Test for POST Feedback endpoint
test('POST Feedback', async (t) => {
    const { statusCode } = await t.context.got.post("user/feedback",
    {
        json : {
            message : "aef",
            email : "qwer"
          }
    });
    //Check status code
    t.is(statusCode, 200);
});
