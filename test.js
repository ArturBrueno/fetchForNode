const nodeFetchy = require('./')

const request = nodeFetchy('http://localhost:3000/')

async function test() {
    const result = await request.get('/user')
    // example: {"user_name":"test user"}
    console.log(result);
} 

test()
