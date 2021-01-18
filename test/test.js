// const Browser = require('zombie');
// var jsdom = require('mocha-jsdom')
// var expect = require('chai').expect
// //Browser.waitDuration = '30000'

// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div>fhfgf</div></body></html>');
// global.window = dom.window;
// global.document = dom.window.document;

// describe('starting test', function () {
//     var $, browser
//     before(function () {
//         this.timeout(2000)
//         global.$ = $ = require('jquery')
//         browser = new Browser({
//             runScripts: true,
//             loadCSS: false,
//             silent: true,
//             headers: {
//                 bot: true
//             }
//         });
//         // global.document = jsdom({
//         //     url: "http://localhost"
//         // })
        
//     })
//     it('user access the web', function (done) {
//         console.log($("div").html())
//         this.timeout(30000)
//         var url = 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html'
      
//         browser.visit(url, done);
//     });

//     // it('should be successful', function () {
//     //     browser.assert.success();
//     // });

//     // it('User visits page', (done) => {
//     //     console.log($)
//     //     const browser = new Browser({
//     //         runScripts: true,
//     //         loadCSS: false,
//     //         silent: true,
//     //         headers: {
//     //             bot: true
//     //         }
//     //     });
//     //     browser.visit(url, done);
//     //     browser.assert.success();
//     //     //     it('should be successful', function () {
//     //     //         // console.log($)
//     //     //         browser.assert.success();
//     //     //     })

//     //     // before(function (done) {
//     //     //     this.timeout(30000)

//     //     // });

//     //     // it('submits form', function () {
//     //     //     before(function (done) {
//     //     //         browser.fill('q', 'kid')
//     //     //         browser.click("input[type=submit]", done)
//     //     //     });

//     //     //     it('should be successful', function () {
//     //     //         // console.log($)
//     //     //         browser.assert.success();
//     //     //     })

//     //     //     it('should see welcome page', function () {
//     //     //         console.log(browser.location.href);
//     //     //         //browser.assert.text('title', 'Welcome To Brains Depot');
//     //     //     });
//     //     // });
//     // });



// })

