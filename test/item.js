var assert = require('assert');


const hostname = 'https://www.walmart.com'
const itemlink = '/ip/Disney-Frozen-2-Princess-Anna-Dress-Up-Wig/473050543'


describe('User visits item page', function () {

    var Item = require('../model/item')
    var item = new Item(hostname, itemlink)

    it('check in stock', async function () {
        this.timeout(10000)
        assert.strictEqual(await item.checkInStock(), 'IN_STOCK');
    });
    
    
});

