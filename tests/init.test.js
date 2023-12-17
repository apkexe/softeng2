const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const {} = require('../service/DefaultService.js');
const app = require('../index.js');

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});
//single GET Post request
test('GET  Post', async (t) => {
    const { body, statusCode } = await t.context.got("user/{userID}/contract/{contractID}/post");
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

test('POST Single User', async (t) => {
    const { statusCode } = await t.context.got.post("user",
    {
        json : {
            UserID : 'message',
            username : 'email',
            password : 'asdfasd'
          }
    });

    t.is(statusCode, 200);
});

//POST multiple users
test('POST multiple User', async (t) => {

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


test('POST Contract', async (t) => {
    const { statusCode } = await t.context.got.post("user/0",
    {
        json : {
            select: "string",
            comments: "string",
            platforms: 0,
            intensity: 0
          }
    });

    t.is(statusCode, 200);
});
test('POST Feedback', async (t) => {
    const { statusCode } = await t.context.got.post("user/feedback",
    {
        json : {
            message : "aef",
            email : "qwer"
          }
    });

    t.is(statusCode, 200);
});

test('Put Decision', async (t) => {
    const { statusCode } = await t.context.got.put("user/0/contract/0",
    {
        json : {
            qewr : false
          }

    });

    t.is(statusCode, 200);
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
  })
//Delete multiple users
  test('DELETE multiple users', async (t) => {
    const UserId = [10, 123, 15]


    for (const users of UserId) {
            const { statusCode } = await t.context.got.delete(`user/${users}`)
            // Check status Code
            t.is(statusCode, 200)
          }
  })