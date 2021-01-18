const Browser = require('zombie');


const hostname = 'https://www.walmart.com'
const itemlink = '/ip/Best-Choice-Products-Kids-Walking-Tyrannosaurus-Rex-T-Rex-Jurassic-Dinosaur-Toy-w-Lights-Sound-Realistic-Movement/46887165'


describe('User visits item page', function () {

    const browser = new Browser({
        runScripts: false,
        loadCSS: false,
        silent: true,
        headers: {
            bot: false
        }
    });
    var Item = require('../model/item')
    var item = new Item(hostname, itemlink)

    before(function (done) {
        this.timeout(40000)
        browser.visit(item.hostname + item.itemlink, done);
    });

    it('should be successful', function () {
        browser.assert.success();
    });
    
    describe('check', function () {
        it('check in stock', function () {
            //browser.assert.attribute('button', 'data-tl-id', 'ProductPrimaryCTA-cta_add_to_cart_button');
            //browser.assert.text('button.button.spin-button.prod-ProductCTA--primary.button--primary span.spin-button-children', 'Add to cart');
            browser.assert.element('button.prod-ProductCTA--primary');
        });
    });
});

