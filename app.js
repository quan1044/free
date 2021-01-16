var express = require('express')
var app = express()
var bodyParser = require("body-parser");
var http = require('https')
var querystring = require('querystring')

var findProduct = function () {
    const getData = querystring.stringify({
        q: 'christmas'
    });
    
    const options = {
        hostname: 'www.shopdisney.co.uk',
        path: '/search?' + getData,
        method: 'GET',
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    
    req.end();
}

var addToBagViewBag = function () {
    const options = {
        hostname: 'www.shopdisney.co.uk',
        path: '/bag',
        method: 'GET',
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    

    req.end();
}

var addToBagContinueShopping = function () {
    var currentPath = '/disney-store-mickey-and-minnie-festive-cloth-face-coverings-pack-of-4-2727050290015M.html'
    const options = {
        hostname: 'www.shopdisney.co.uk',
        path: currentPath,
        method: 'GET',
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    

    req.end();
}


findProduct()
addToBagViewBag()
addToBagContinueShopping()







module.exports = app;


