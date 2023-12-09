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

test('GET Post', async (t) => {
    const { body, statusCode } = await t.context.got("user/0/contract/0/post");
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

test('POST User', async (t) => {
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