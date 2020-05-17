var express = require('express');
var app = express();

const nodeFetch = require('node-fetch')
const url = require('url')

async function nodeFetchy(method, host, path, opts ) {
    opts = opts || {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const requestUrl = url.resolve(host, path)
    const requestResult = await nodeFetchy(requestUrl, opts)

    return {status: requestResult.status, body: await requestResult.json()
    }
}

module.exports = function (host) {
    return {
        get: nodeFetchy.bind(global, 'GET'),
        post: nodeFetchy.bind(global, 'POST', host)
    }
}

